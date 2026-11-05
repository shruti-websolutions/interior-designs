import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { 
  Maximize2, 
  RotateCw, 
  Eye, 
  Layers, 
  Phone, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Check
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

type LayoutType = 'island' | 'tall-pantry' | 'minimal-l';
type ShutterFinish = 'oak-wood' | 'acrylic-white' | 'matte-charcoal' | 'champagne';
type CountertopType = 'quartz-white' | 'black-granite' | 'carrara-marble';

interface ThreeKitchenViewerProps {
  onOpenCallModal?: () => void;
}

export const ThreeKitchenViewer: React.FC<ThreeKitchenViewerProps> = ({ onOpenCallModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<LayoutType>('island');
  const [finish, setFinish] = useState<ShutterFinish>('oak-wood');
  const [countertop, setCountertop] = useState<CountertopType>('quartz-white');
  const [doorsOpen, setDoorsOpen] = useState<boolean>(false);
  const [explodedAmount, setExplodedAmount] = useState<number>(0);
  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(false);
  const [activeCamPreset, setActiveCamPreset] = useState<'front' | 'angle' | 'top'>('angle');

  // Mutable refs for Three.js scene instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rootKitchenGroupRef = useRef<THREE.Group | null>(null);

  // Animated elements refs
  const animatedDrawersRef = useRef<THREE.Mesh[]>([]);
  const animatedDoorsRef = useRef<THREE.Group[]>([]);
  const upperUnitsRef = useRef<THREE.Group | null>(null);
  const countertopMeshRef = useRef<THREE.Mesh | null>(null);

  // Target values for smooth interpolation
  const doorsTargetRef = useRef<number>(0);
  const doorsCurrentRef = useRef<number>(0);
  const explodedTargetRef = useRef<number>(0);
  const explodedCurrentRef = useRef<number>(0);

  // Colors & material definitions
  const finishMaterialsRef = useRef<{
    base: THREE.MeshStandardMaterial;
    countertop: THREE.MeshStandardMaterial;
    accents: THREE.MeshStandardMaterial;
    glass: THREE.MeshPhysicalMaterial;
    metal: THREE.MeshStandardMaterial;
    glow: THREE.MeshBasicMaterial;
  }>({
    base: new THREE.MeshStandardMaterial({ color: 0xc89658, roughness: 0.45, metalness: 0.1 }),
    countertop: new THREE.MeshStandardMaterial({ color: 0xf5f5f7, roughness: 0.2, metalness: 0.05 }),
    accents: new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.3, metalness: 0.7 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.65, roughness: 0.1, transmission: 0.85, ior: 1.5 }),
    metal: new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.85 }),
    glow: new THREE.MeshBasicMaterial({ color: 0x38bdf8 }),
  });

  // Update materials when user selects swatch
  useEffect(() => {
    const mats = finishMaterialsRef.current;
    if (!mats) return;

    // Finish logic
    if (finish === 'oak-wood') {
      mats.base.color.setHex(0xb08253);
      mats.base.roughness = 0.55;
      mats.base.metalness = 0.05;
    } else if (finish === 'acrylic-white') {
      mats.base.color.setHex(0xfafafa);
      mats.base.roughness = 0.08; // High gloss acrylic mirror shine
      mats.base.metalness = 0.12;
    } else if (finish === 'matte-charcoal') {
      mats.base.color.setHex(0x27272a);
      mats.base.roughness = 0.7; // Soft touch matte
      mats.base.metalness = 0.15;
    } else if (finish === 'champagne') {
      mats.base.color.setHex(0xbaa68c);
      mats.base.roughness = 0.25;
      mats.base.metalness = 0.35;
    }

    // Countertop logic
    if (countertop === 'quartz-white') {
      mats.countertop.color.setHex(0xf4f4f5);
      mats.countertop.roughness = 0.15;
      mats.countertop.metalness = 0.1;
    } else if (countertop === 'black-granite') {
      mats.countertop.color.setHex(0x141416);
      mats.countertop.roughness = 0.12;
      mats.countertop.metalness = 0.25;
    } else if (countertop === 'carrara-marble') {
      mats.countertop.color.setHex(0xe8ecef);
      mats.countertop.roughness = 0.25;
      mats.countertop.metalness = 0.08;
    }
  }, [finish, countertop]);

  // Synchronize target refs for drawer animation and exploded view
  useEffect(() => {
    doorsTargetRef.current = doorsOpen ? 1 : 0;
  }, [doorsOpen]);

  useEffect(() => {
    explodedTargetRef.current = explodedAmount;
  }, [explodedAmount]);

  // Build the 3D procedural kitchen scene
  const buildKitchenLayout = (currentLayout: LayoutType) => {
    if (!sceneRef.current || !rootKitchenGroupRef.current) return;
    const group = rootKitchenGroupRef.current;
    
    // Clear previous children
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if ((child as any).geometry) (child as any).geometry.dispose();
    }

    animatedDrawersRef.current = [];
    animatedDoorsRef.current = [];

    const mats = finishMaterialsRef.current;

    // Floor tile base platform with soft bevel
    const floorGeo = new THREE.CylinderGeometry(5.2, 5.2, 0.1, 48);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x11141a, roughness: 0.8, metalness: 0.2 });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -0.05;
    floorMesh.receiveShadow = true;
    group.add(floorMesh);

    // Contact shadow plane
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x05070a,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.005;
    group.add(shadowMesh);

    // Common Base Cabinet carcass parameters
    const cabinetHeight = 0.86;
    const cabinetDepth = 0.60;
    const plinthHeight = 0.08;

    // --- LAYOUT 1: ISLAND KITCHEN (Inspired by Reference Photo 2) ---
    if (currentLayout === 'island') {
      // 1. Back wall main run (L-shape rear)
      const rearRunLength = 3.2;
      const baseGeo = new THREE.BoxGeometry(rearRunLength, cabinetHeight - plinthHeight, cabinetDepth);
      const baseMesh = new THREE.Mesh(baseGeo, mats.base);
      baseMesh.position.set(0, (cabinetHeight - plinthHeight) / 2 + plinthHeight, -1.2);
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      group.add(baseMesh);

      // Skirting / Plinth with subtle LED strip
      const plinthGeo = new THREE.BoxGeometry(rearRunLength - 0.1, plinthHeight, cabinetDepth - 0.08);
      const plinthMat = new THREE.MeshStandardMaterial({ color: 0x1f242d, roughness: 0.7 });
      const plinthMesh = new THREE.Mesh(plinthGeo, plinthMat);
      plinthMesh.position.set(0, plinthHeight / 2, -1.2);
      group.add(plinthMesh);

      // Plinth cyan glow strip (as seen in Dorio reference photo 3!)
      const glowGeo = new THREE.BoxGeometry(rearRunLength - 0.12, 0.02, 0.01);
      const glowMesh = new THREE.Mesh(glowGeo, mats.glow);
      glowMesh.position.set(0, plinthHeight - 0.01, -1.2 + (cabinetDepth / 2) + 0.002);
      group.add(glowMesh);

      // Main Back Countertop slab
      const topGeo = new THREE.BoxGeometry(rearRunLength + 0.06, 0.04, cabinetDepth + 0.06);
      const topMesh = new THREE.Mesh(topGeo, mats.countertop);
      topMesh.position.set(0, cabinetHeight + 0.02, -1.2);
      topMesh.castShadow = true;
      group.add(topMesh);
      countertopMeshRef.current = topMesh;

      // Built-in Gas Hob (Modern dual burner brass flame)
      const hobGeo = new THREE.BoxGeometry(0.70, 0.015, 0.45);
      const hobMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.2, metalness: 0.85 });
      const hobMesh = new THREE.Mesh(hobGeo, hobMat);
      hobMesh.position.set(-0.6, cabinetHeight + 0.042, -1.2);
      group.add(hobMesh);

      // Brass Burners
      for (let b = -0.16; b <= 0.16; b += 0.32) {
        const burnerGeo = new THREE.CylinderGeometry(0.065, 0.075, 0.02, 24);
        const burnerMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.9 });
        const burnerMesh = new THREE.Mesh(burnerGeo, burnerMat);
        burnerMesh.position.set(-0.6 + b, cabinetHeight + 0.055, -1.2);
        group.add(burnerMesh);
      }

      // Overhead Matte Black Cabinets & Industrial Chimney Hood (from photo 2)
      const upperGroup = new THREE.Group();
      upperUnitsRef.current = upperGroup;

      const upperGeo = new THREE.BoxGeometry(rearRunLength, 0.72, 0.35);
      const upperMat = new THREE.MeshStandardMaterial({ color: 0x1c1e22, roughness: 0.3, metalness: 0.4 });
      const upperMesh = new THREE.Mesh(upperGeo, upperMat);
      upperMesh.position.set(0, cabinetHeight + 0.85, -1.2);
      upperMesh.castShadow = true;
      upperGroup.add(upperMesh);

      // Angled Baffle Chimney Hood Box
      const hoodGeo = new THREE.BoxGeometry(0.85, 0.55, 0.45);
      const hoodMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f5, roughness: 0.3, metalness: 0.2 });
      const hoodMesh = new THREE.Mesh(hoodGeo, hoodMat);
      hoodMesh.position.set(-0.6, cabinetHeight + 0.95, -1.18);
      upperGroup.add(hoodMesh);

      group.add(upperGroup);

      // 2. Central Breakfast Island (matching reference photo 2 with stools!)
      const islandLength = 2.1;
      const islandWidth = 1.05;
      const islandBaseGeo = new THREE.BoxGeometry(islandLength, cabinetHeight - plinthHeight, islandWidth - 0.3);
      const islandBase = new THREE.Mesh(islandBaseGeo, mats.base);
      islandBase.position.set(0, (cabinetHeight - plinthHeight) / 2 + plinthHeight, 0.4);
      islandBase.castShadow = true;
      group.add(islandBase);

      // Island Waterfall Countertop
      const islandTopGeo = new THREE.BoxGeometry(islandLength + 0.1, 0.05, islandWidth);
      const islandTop = new THREE.Mesh(islandTopGeo, mats.countertop);
      islandTop.position.set(0, cabinetHeight + 0.025, 0.4);
      islandTop.castShadow = true;
      group.add(islandTop);

      // Modern Bar Stools (3 stools lined up at the island)
      for (let s = -0.65; s <= 0.65; s += 0.65) {
        const stoolGroup = new THREE.Group();
        // Stool seat
        const seatGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.04, 24);
        const seatMat = new THREE.MeshStandardMaterial({ color: 0x1e1b18, roughness: 0.6 });
        const seatMesh = new THREE.Mesh(seatGeo, seatMat);
        seatMesh.position.y = 0.62;
        stoolGroup.add(seatMesh);

        // Stool legs (metal frame)
        for (let a = 0; a < 4; a++) {
          const angle = (a * Math.PI) / 2 + Math.PI / 4;
          const legGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.62, 12);
          const legMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.4, metalness: 0.8 });
          const legMesh = new THREE.Mesh(legGeo, legMat);
          legMesh.position.set(Math.cos(angle) * 0.13, 0.31, Math.sin(angle) * 0.13);
          legMesh.rotation.z = Math.cos(angle) * 0.08;
          stoolGroup.add(legMesh);
        }
        stoolGroup.position.set(s, 0, 1.15);
        group.add(stoolGroup);
      }

      // Dual Industrial Bell Pendant Lights hanging over island
      for (let p of [-0.5, 0.5]) {
        const pendantCordGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.8, 8);
        const pendantCordMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const cordMesh = new THREE.Mesh(pendantCordGeo, pendantCordMat);
        cordMesh.position.set(p, 2.2, 0.4);
        group.add(cordMesh);

        const shadeGeo = new THREE.ConeGeometry(0.18, 0.16, 24);
        const shadeMat = new THREE.MeshStandardMaterial({ color: 0x2e2b26, roughness: 0.3, metalness: 0.6 });
        const shadeMesh = new THREE.Mesh(shadeGeo, shadeMat);
        shadeMesh.position.set(p, 1.74, 0.4);
        group.add(shadeMesh);
      }

      // Animated soft-close Tandem Drawers on the island facing the cook
      for (let d = 0; d < 3; d++) {
        const drawerGeo = new THREE.BoxGeometry(0.62, 0.22, 0.02);
        const drawerMat = mats.base;
        const drawerMesh = new THREE.Mesh(drawerGeo, drawerMat);
        drawerMesh.position.set(-0.55, 0.18 + d * 0.25, 0.4 - (islandWidth - 0.3) / 2 - 0.015);
        
        // Handle (brushed gold J-profile)
        const handleGeo = new THREE.BoxGeometry(0.25, 0.015, 0.02);
        const handleMesh = new THREE.Mesh(handleGeo, mats.metal);
        handleMesh.position.set(0, 0.08, -0.015);
        drawerMesh.add(handleMesh);

        group.add(drawerMesh);
        animatedDrawersRef.current.push(drawerMesh);
      }
    } 
    // --- LAYOUT 2: TALL PANTRY SYSTEM (Inspired by Reference Photo 1) ---
    else if (currentLayout === 'tall-pantry') {
      const runLength = 2.4;

      // Base cabinets
      const baseGeo = new THREE.BoxGeometry(runLength, cabinetHeight - plinthHeight, cabinetDepth);
      const baseMesh = new THREE.Mesh(baseGeo, mats.base);
      baseMesh.position.set(0.3, (cabinetHeight - plinthHeight) / 2 + plinthHeight, 0);
      baseMesh.castShadow = true;
      group.add(baseMesh);

      // Countertop
      const topGeo = new THREE.BoxGeometry(runLength + 0.04, 0.04, cabinetDepth + 0.04);
      const topMesh = new THREE.Mesh(topGeo, mats.countertop);
      topMesh.position.set(0.3, cabinetHeight + 0.02, 0);
      topMesh.castShadow = true;
      group.add(topMesh);
      countertopMeshRef.current = topMesh;

      // Tall Pantry Tower on Left (Floor-to-ceiling modular unit)
      const tallTowerWidth = 0.85;
      const tallTowerHeight = 2.15;
      const tallGeo = new THREE.BoxGeometry(tallTowerWidth, tallTowerHeight, cabinetDepth + 0.04);
      const tallMat = mats.base;
      const tallMesh = new THREE.Mesh(tallGeo, tallMat);
      tallMesh.position.set(-1.3, tallTowerHeight / 2, 0.02);
      tallMesh.castShadow = true;
      group.add(tallMesh);

      // Microwave Cavity Niche in Tall Tower
      const microCavityGeo = new THREE.BoxGeometry(0.68, 0.42, 0.45);
      const microCavityMat = new THREE.MeshStandardMaterial({ color: 0x1a1c22, roughness: 0.7 });
      const microCavity = new THREE.Mesh(microCavityGeo, microCavityMat);
      microCavity.position.set(-1.3, 1.25, 0.12);
      group.add(microCavity);

      // Built-in Microwave with glowing front glass
      const microGeo = new THREE.BoxGeometry(0.60, 0.36, 0.40);
      const microMat = new THREE.MeshStandardMaterial({ color: 0xc4c7cc, metalness: 0.85, roughness: 0.2 });
      const microMesh = new THREE.Mesh(microGeo, microMat);
      microMesh.position.set(-1.3, 1.25, 0.13);
      group.add(microMesh);

      const microScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(0.38, 0.24),
        new THREE.MeshBasicMaterial({ color: 0xa3e635 }) // glowing display from photo 1
      );
      microScreen.position.set(-1.38, 1.25, 0.332);
      group.add(microScreen);

      // Vegetable Wicker Basket Niche (natural weave basket from photo 1)
      const basketGeo = new THREE.BoxGeometry(0.62, 0.28, 0.48);
      const basketMat = new THREE.MeshStandardMaterial({ color: 0x925b29, roughness: 0.9 }); // wicker weave tone
      const basketMesh = new THREE.Mesh(basketGeo, basketMat);
      basketMesh.position.set(-1.3, 0.48, 0.12);
      group.add(basketMesh);

      // Upper wall cabinets with lift-ups
      const upperGroup = new THREE.Group();
      upperUnitsRef.current = upperGroup;
      const upperGeo = new THREE.BoxGeometry(runLength, 0.65, 0.36);
      const upperMesh = new THREE.Mesh(upperGeo, mats.base);
      upperMesh.position.set(0.3, cabinetHeight + 0.85, -0.12);
      upperMesh.castShadow = true;
      upperGroup.add(upperMesh);

      // Backsplash with patterned tile look
      const splashGeo = new THREE.PlaneGeometry(runLength, 0.62);
      const splashMat = new THREE.MeshStandardMaterial({ color: 0xd9cbb8, roughness: 0.4 });
      const splashMesh = new THREE.Mesh(splashGeo, splashMat);
      splashMesh.position.set(0.3, cabinetHeight + 0.34, -cabinetDepth / 2 + 0.01);
      upperGroup.add(splashMesh);

      group.add(upperGroup);

      // Animated soft-close door on the tall tower upper module
      const tallDoorGroup = new THREE.Group();
      tallDoorGroup.position.set(-1.3 + tallTowerWidth / 2, 1.82, 0.02 + cabinetDepth / 2 + 0.02);
      const tallDoorMesh = new THREE.Mesh(
        new THREE.BoxGeometry(tallTowerWidth - 0.04, 0.58, 0.02),
        mats.base
      );
      tallDoorMesh.position.set(-(tallTowerWidth / 2 - 0.02), 0, 0);
      tallDoorGroup.add(tallDoorMesh);
      group.add(tallDoorGroup);
      animatedDoorsRef.current.push(tallDoorGroup);
    }
    // --- LAYOUT 3: MINIMALIST HANDLE-LESS L-SHAPED (Inspired by Reference Photo 3) ---
    else if (currentLayout === 'minimal-l') {
      const arm1Length = 2.6;
      const arm2Length = 2.2;

      // Arm 1 (Main cooking wing with gas hob)
      const arm1Geo = new THREE.BoxGeometry(arm1Length, cabinetHeight - plinthHeight, cabinetDepth);
      const arm1Mesh = new THREE.Mesh(arm1Geo, mats.base);
      arm1Mesh.position.set(-0.2, (cabinetHeight - plinthHeight) / 2 + plinthHeight, -0.7);
      arm1Mesh.castShadow = true;
      group.add(arm1Mesh);

      // Arm 2 (Sink wing with double bowl sink)
      const arm2Geo = new THREE.BoxGeometry(cabinetDepth, cabinetHeight - plinthHeight, arm2Length);
      const arm2Mesh = new THREE.Mesh(arm2Geo, mats.base);
      arm2Mesh.position.set(0.8, (cabinetHeight - plinthHeight) / 2 + plinthHeight, 0.2);
      arm2Mesh.castShadow = true;
      group.add(arm2Mesh);

      // Skirting blue glow along the entire L-perimeter (Exact feature in photo 3)
      const glow1 = new THREE.Mesh(new THREE.BoxGeometry(arm1Length, 0.025, 0.01), mats.glow);
      glow1.position.set(-0.2, 0.06, -0.7 + cabinetDepth / 2 + 0.01);
      group.add(glow1);

      const glow2 = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.025, arm2Length), mats.glow);
      glow2.position.set(0.8 - cabinetDepth / 2 - 0.01, 0.06, 0.2);
      group.add(glow2);

      // L-Countertop (Jet black granite / Quartz)
      const top1Geo = new THREE.BoxGeometry(arm1Length + 0.02, 0.04, cabinetDepth + 0.02);
      const top1Mesh = new THREE.Mesh(top1Geo, mats.countertop);
      top1Mesh.position.set(-0.2, cabinetHeight + 0.02, -0.7);
      top1Mesh.castShadow = true;
      group.add(top1Mesh);
      countertopMeshRef.current = top1Mesh;

      const top2Geo = new THREE.BoxGeometry(cabinetDepth + 0.02, 0.04, arm2Length);
      const top2Mesh = new THREE.Mesh(top2Geo, mats.countertop);
      top2Mesh.position.set(0.8, cabinetHeight + 0.02, 0.2);
      top2Mesh.castShadow = true;
      group.add(top2Mesh);

      // Undermount Double-Bowl Stainless Steel Sink & Swivel Faucet (Photo 3)
      const sinkRimGeo = new THREE.BoxGeometry(0.72, 0.01, 0.46);
      const sinkMat = new THREE.MeshStandardMaterial({ color: 0x8a929e, roughness: 0.2, metalness: 0.95 });
      const sinkRim = new THREE.Mesh(sinkRimGeo, sinkMat);
      sinkRim.position.set(0.8, cabinetHeight + 0.041, 0.4);
      group.add(sinkRim);

      // Gooseneck Chrome Faucet
      const faucetCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.8, cabinetHeight + 0.04, 0.16),
        new THREE.Vector3(0.8, cabinetHeight + 0.32, 0.16),
        new THREE.Vector3(0.8, cabinetHeight + 0.34, 0.24),
        new THREE.Vector3(0.8, cabinetHeight + 0.28, 0.28)
      ]);
      const faucetGeo = new THREE.TubeGeometry(faucetCurve, 20, 0.014, 12, false);
      const faucetMesh = new THREE.Mesh(faucetGeo, mats.metal);
      group.add(faucetMesh);

      // Gas Hob on Arm 1
      const hobMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.68, 0.02, 0.42),
        new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.15, metalness: 0.9 })
      );
      hobMesh.position.set(-0.6, cabinetHeight + 0.042, -0.7);
      group.add(hobMesh);

      // Two burners on hob
      for (let b of [-0.15, 0.15]) {
        const burner = new THREE.Mesh(
          new THREE.CylinderGeometry(0.065, 0.075, 0.02, 24),
          new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4, metalness: 0.85 })
        );
        burner.position.set(-0.6 + b, cabinetHeight + 0.055, -0.7);
        group.add(burner);
      }

      // Handle-less J-Pull animated drawers
      for (let d = 0; d < 2; d++) {
        const dMesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.78, 0.32, 0.02),
          mats.base
        );
        dMesh.position.set(-0.5, 0.24 + d * 0.36, -0.7 + cabinetDepth / 2 + 0.015);
        
        // Concealed Gola profile recess
        const gola = new THREE.Mesh(
          new THREE.BoxGeometry(0.78, 0.03, 0.03),
          new THREE.MeshStandardMaterial({ color: 0xb8956e, roughness: 0.3, metalness: 0.7 })
        );
        gola.position.set(0, 0.16, -0.015);
        dMesh.add(gola);

        group.add(dMesh);
        animatedDrawersRef.current.push(dMesh);
      }
    }
  };

  // Re-build layout when layout selection changes
  useEffect(() => {
    buildKitchenLayout(layout);
  }, [layout]);

  // Main Three.js Scene Setup & Loop
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Detect software WebGL per skill guidelines
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0c0f14);
    scene.fog = new THREE.Fog(0x0c0f14, 8, 22);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(3.4, 2.4, 4.2);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.04; // Don't flip under the floor
    controls.minDistance = 2.0;
    controls.maxDistance = 8.5;
    controls.target.set(0, 0.8, 0);
    controlsRef.current = controls;

    // Environment map using RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.05).texture;
    pmremGenerator.dispose();

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfffaed, 0x0f172a, 0.7);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 1.8);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 16;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x93c5fd, 0.9);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // Root Kitchen Group
    const kitchenGroup = new THREE.Group();
    scene.add(kitchenGroup);
    rootKitchenGroupRef.current = kitchenGroup;

    // Initial Layout build
    buildKitchenLayout(layout);

    // Animation loop with exponential damping
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);

      controls.update();

      // Smooth interpolation for drawer & cabinet opening
      doorsCurrentRef.current = THREE.MathUtils.damp(
        doorsCurrentRef.current,
        doorsTargetRef.current,
        6,
        delta
      );

      // Animate drawers sliding out along their local orientation
      animatedDrawersRef.current.forEach((drawer) => {
        // Slide out on Z axis relative to parent
        drawer.position.z = THREE.MathUtils.lerp(0.4 - (1.05 - 0.3) / 2 - 0.015, 0.4 - (1.05 - 0.3) / 2 - 0.38, doorsCurrentRef.current);
      });

      // Animate cabinet doors swinging open on hinge
      animatedDoorsRef.current.forEach((doorGroup) => {
        doorGroup.rotation.y = THREE.MathUtils.lerp(0, -Math.PI / 2.2, doorsCurrentRef.current);
      });

      // Smooth interpolation for exploded view separation
      explodedCurrentRef.current = THREE.MathUtils.damp(
        explodedCurrentRef.current,
        explodedTargetRef.current,
        5,
        delta
      );

      if (countertopMeshRef.current) {
        countertopMeshRef.current.position.y = 0.88 + explodedCurrentRef.current * 0.45;
      }
      if (upperUnitsRef.current) {
        upperUnitsRef.current.position.y = explodedCurrentRef.current * 0.55;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Camera presets
  const applyCamPreset = (preset: 'front' | 'angle' | 'top') => {
    setActiveCamPreset(preset);
    if (!cameraRef.current || !controlsRef.current) return;
    if (preset === 'front') {
      cameraRef.current.position.set(0, 1.3, 4.5);
      controlsRef.current.target.set(0, 0.8, 0);
    } else if (preset === 'angle') {
      cameraRef.current.position.set(3.4, 2.4, 4.2);
      controlsRef.current.target.set(0, 0.8, 0);
    } else if (preset === 'top') {
      cameraRef.current.position.set(0.1, 5.2, 0.1);
      controlsRef.current.target.set(0, 0, 0);
    }
    controlsRef.current.update();
  };

  return (
    <div className="relative w-full h-[620px] lg:h-[720px] rounded-3xl overflow-hidden border border-white/10 bg-[#0a0d13] shadow-2xl">
      {/* 3D WebGL Canvas Mount */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Header Overlay: Minimal Title, Specs Badge & Direct Call CTA */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="pointer-events-auto bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#7BAE43]">
              Interactive 3D Kitchen Configurator
            </div>
            <div className="text-sm font-medium text-white flex items-center gap-2">
              <span>BWP Marine Plywood Core</span>
              <span className="text-white/30">•</span>
              <span className="text-zinc-300">German Soft-Close Mechanism</span>
            </div>
          </div>
        </div>

        {/* Quick Camera & Reset buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/10 flex items-center">
            <button
              onClick={() => applyCamPreset('angle')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCamPreset === 'angle'
                  ? 'bg-[#7BAE43] text-black font-semibold'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Perspective 3D
            </button>
            <button
              onClick={() => applyCamPreset('front')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCamPreset === 'front'
                  ? 'bg-[#7BAE43] text-black font-semibold'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Front Elevation
            </button>
            <button
              onClick={() => applyCamPreset('top')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCamPreset === 'top'
                  ? 'bg-[#7BAE43] text-black font-semibold'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Plan / Top
            </button>
          </div>

          {/* Direct CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-semibold text-xs shadow-lg transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>Call 080762 75334</span>
          </a>
        </div>
      </div>

      {/* Floating Instructions Tooltip (Disappears on interaction) */}
      <div className="absolute top-20 left-4 pointer-events-none hidden md:flex items-center gap-2 text-[11px] text-zinc-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
        <RotateCw className="w-3 h-3 text-[#7BAE43]" />
        <span>Drag to rotate 360° • Pinch / scroll to zoom in & out</span>
      </div>

      {/* Collapsible Bottom Dock (Skill compliant: Unified bottom center, zero side occlusion) */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[94%] max-w-[920px] transition-all duration-300 z-20 ${
          isDockCollapsed ? 'translate-y-[calc(100%-42px)]' : 'translate-y-0'
        }`}
      >
        {/* Toggle Collapse Bar */}
        <div className="flex justify-center -mb-2">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#171b23] border border-white/10 rounded-t-xl text-xs font-medium text-zinc-300 hover:text-[#7BAE43] shadow-xl hover:bg-[#1e232e] transition-colors"
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-[#7BAE43]" />
                <span>Show Kitchen Customizer</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-[#7BAE43]" />
                <span>Hide Controls (Full View)</span>
              </>
            )}
          </button>
        </div>

        {/* Main Dock Container */}
        <div className="bg-[#12161f]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* 1. Layout Selector */}
            <div>
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#7BAE43]" />
                <span>Kitchen Layout</span>
              </div>
              <div className="grid grid-cols-3 gap-1 bg-black/50 p-1 rounded-xl border border-white/5 text-xs">
                <button
                  onClick={() => setLayout('island')}
                  className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                    layout === 'island'
                      ? 'bg-[#7BAE43] text-black font-semibold shadow'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                  title="Photo 2: Natural Wood & Island Bar"
                >
                  Island Bar
                </button>
                <button
                  onClick={() => setLayout('tall-pantry')}
                  className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                    layout === 'tall-pantry'
                      ? 'bg-[#7BAE43] text-black font-semibold shadow'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                  title="Photo 1: Tall Pantry & Appliance Tower"
                >
                  Tall Tower
                </button>
                <button
                  onClick={() => setLayout('minimal-l')}
                  className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                    layout === 'minimal-l'
                      ? 'bg-[#7BAE43] text-black font-semibold shadow'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                  title="Photo 3: Handle-less L-Shape"
                >
                  L-Shape Gola
                </button>
              </div>
            </div>

            {/* 2. Shutter Finish */}
            <div>
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Shutter Finish</span>
                <span className="text-[10px] text-[#7BAE43] capitalize font-normal">{finish.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 p-1.5 rounded-xl border border-white/5">
                {[
                  { id: 'oak-wood', label: 'Oak Wood', color: '#b08253' },
                  { id: 'acrylic-white', label: 'Acrylic Gloss', color: '#f8fafc' },
                  { id: 'matte-charcoal', label: 'Matte Charcoal', color: '#27272a' },
                  { id: 'champagne', label: 'Champagne Taupe', color: '#baa68c' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFinish(item.id as ShutterFinish)}
                    className={`relative flex-1 h-7 rounded-lg transition-transform flex items-center justify-center ${
                      finish === item.id ? 'ring-2 ring-[#7BAE43] scale-105' : 'hover:scale-105 opacity-80'
                    }`}
                    style={{ backgroundColor: item.color }}
                    title={item.label}
                  >
                    {finish === item.id && (
                      <Check className={`w-3.5 h-3.5 ${item.id === 'acrylic-white' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Countertop Slab */}
            <div>
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Countertop</span>
                <span className="text-[10px] text-zinc-300 font-normal capitalize">
                  {countertop.replace('-', ' ')}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 p-1.5 rounded-xl border border-white/5">
                {[
                  { id: 'quartz-white', label: 'Quartz White', color: '#f1f5f9' },
                  { id: 'black-granite', label: 'Black Granite', color: '#18181b' },
                  { id: 'carrara-marble', label: 'Carrara Marble', color: '#cbd5e1' },
                ].map((top) => (
                  <button
                    key={top.id}
                    onClick={() => setCountertop(top.id as CountertopType)}
                    className={`relative flex-1 h-7 rounded-lg transition-transform flex items-center justify-center ${
                      countertop === top.id ? 'ring-2 ring-[#7BAE43] scale-105' : 'hover:scale-105 opacity-80'
                    }`}
                    style={{ backgroundColor: top.color }}
                    title={top.label}
                  >
                    {countertop === top.id && (
                      <Check className={`w-3.5 h-3.5 ${top.id === 'black-granite' ? 'text-white' : 'text-black'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Interactive Simulation & CTA */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDoorsOpen(!doorsOpen)}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    doorsOpen
                      ? 'bg-[#7BAE43]/20 text-[#7BAE43] border border-[#7BAE43]/40'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{doorsOpen ? 'Close Cabinets' : 'Open Drawers'}</span>
                </button>

                <button
                  onClick={() => setExplodedAmount(explodedAmount > 0 ? 0 : 1)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    explodedAmount > 0
                      ? 'bg-[#7BAE43]/20 text-[#7BAE43] border border-[#7BAE43]/40'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                  }`}
                  title="Lift countertop to inspect internal carcass joinery"
                >
                  <span>Exploded</span>
                </button>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2 px-3 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-black" />
                <span>Call to Order in Etawah</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
