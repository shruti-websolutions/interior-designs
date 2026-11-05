import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  Copy, 
  Check, 
  Send, 
  ShieldCheck, 
  Award,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    setSubmitted(true);
    // Open WhatsApp directly with the entered phone number
    const message = `Hello Dorio Kitchens, I want to book a free 3D kitchen estimate for my home in Etawah. My contact number is: ${phoneInput}`;
    window.open(`https://wa.me/918460266584?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-[#120F0D] text-[#E5E5E5] pt-16 pb-24 md:pb-12 border-t border-neutral-800 scroll-mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Consultation Conversion Bar */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-[#1C1713] border border-[#72583d]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-[#72583d] mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{BUSINESS_INFO.statusText} · Etawah Studio</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-didact text-white">
              Get Your Free 3D Modular Kitchen Preview
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-kodchasan mt-1">
              Precision laser measurement &amp; 3D layout consultation with zero visiting charges in Etawah.
            </p>
          </div>

          <form onSubmit={handleQuickLead} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2.5">
            <input
              type="tel"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full sm:w-64 px-4 py-3 bg-[#0E0C0A] border border-neutral-700 rounded-none text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#72583d]"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#72583d] hover:bg-[#856747] text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{submitted ? 'Sent via WhatsApp' : 'Get Free Estimate'}</span>
            </button>
          </form>
        </div>

        {/* 4-Column Footer Grid - Matching Layout Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          
          {/* Column 1: Brand, Quick Links, Social Icons & Hours */}
          <div className="space-y-6">
            <div>
              <a href="#home" className="inline-block">
                <span className="font-bold text-xl sm:text-2xl tracking-widest text-white uppercase font-didact">
                  DORIO <span className="text-[#72583d]">DECOR</span>
                </span>
              </a>
              <p className="text-xs text-neutral-400 mt-2 font-kodchasan leading-relaxed">
                Custom modular kitchens and luxury interiors in Etawah since 2011.
              </p>
            </div>

            {/* Quick Links */}
            <ul className="space-y-2 text-sm text-neutral-300 font-kodchasan">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white hover:underline transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white hover:underline transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Social Icons Strip (Exact layout matching Screenshot 3: white square buttons) */}
            <div className="pt-2">
              <p className="text-sm font-bold text-white mb-2.5">
                Social
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white hover:bg-[#72583d] text-neutral-900 hover:text-white flex items-center justify-center rounded-sm transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white hover:bg-[#72583d] text-neutral-900 hover:text-white flex items-center justify-center rounded-sm transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white hover:bg-[#72583d] text-neutral-900 hover:text-white flex items-center justify-center rounded-sm transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white hover:bg-[#72583d] text-neutral-900 hover:text-white flex items-center justify-center rounded-sm transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-white hover:bg-[#72583d] text-neutral-900 hover:text-white flex items-center justify-center rounded-sm transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="pt-1">
              <p className="text-sm font-bold text-white mb-1">
                Available:
              </p>
              <p className="text-xs text-neutral-400 font-kodchasan leading-relaxed">
                {BUSINESS_INFO.workingHours}
              </p>
            </div>
          </div>

          {/* Column 2: Modular Kitchen Types */}
          <div>
            <h4 className="text-base font-bold text-white font-didact tracking-wide mb-4">
              Modular Kitchen
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-kodchasan">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  U-Shaped Kitchen with Breakfast Bar
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  L-Shaped Kitchen with Prep &amp; Work Nook
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Open-Plan Island Kitchen Layout
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  G-Shaped (Peninsula) Kitchen
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  High-Gloss Acrylic Modular Kitchens
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  100% BWP Marine 710 Plywood Core
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Modular Kitchen Dealers in Etawah
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Wardrobe & Interior Solutions */}
          <div>
            <h4 className="text-base font-bold text-white font-didact tracking-wide mb-4">
              Wardrobe Design &amp; Interiors
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-kodchasan">
              <li>
                <span className="text-neutral-400">Floor-to-Ceiling Sliding Wardrobes</span>
              </li>
              <li>
                <span className="text-neutral-400">Walk-in Wardrobe &amp; Dressing Suite</span>
              </li>
              <li>
                <span className="text-neutral-400">Living Room TV Console &amp; Louvers</span>
              </li>
              <li>
                <span className="text-neutral-400">Tall Pantry Units &amp; Appliance Towers</span>
              </li>
              <li>
                <span className="text-neutral-400">Quartz &amp; Granite Countertop Fitting</span>
              </li>
              <li>
                <span className="text-neutral-400">Soft-Close Tandem Hardware &amp; Baskets</span>
              </li>
              <li>
                <span className="text-neutral-400">Interior Designers in Etawah</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Authentic Address, Contact & Verified Certificate Card */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-didact tracking-wide">
              Studio &amp; Workshop
            </h4>

            {/* Authentic Address from Screenshots 1 & 2 */}
            <div className="text-xs sm:text-[13px] text-neutral-300 font-kodchasan leading-relaxed space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#72583d] shrink-0 mt-0.5" />
                <p>
                  1 Dorio, Dorio Modular Kitchen Interior, Near JP Garden, Pachawali Road, Yashoda Nagar, Etawah-206001, Uttar Pradesh
                </p>
              </div>

              {/* Action Buttons: Get Directions & Copy */}
              <div className="flex items-center gap-4 pt-1 text-xs font-semibold text-[#72583d]">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Numbers */}
              <div className="pt-2 flex flex-col gap-1 text-sm font-bold text-white">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-[#72583d] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#72583d]" />
                  <span>+91 84602 66584</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                  className="flex items-center gap-2 hover:text-[#72583d] transition-colors text-xs text-neutral-400"
                >
                  <Phone className="w-3 h-3 text-[#72583d]" />
                  <span>+91 80762 75334</span>
                </a>
              </div>
            </div>

            {/* Authentic Certificate & Credential Badge (Matching the white certificate card in Screenshot 3!) */}
            <div className="bg-white text-neutral-900 p-4 rounded-lg shadow-lg border border-white/20 space-y-2 mt-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <div className="flex items-center gap-1.5">
                  <Award className="w-5 h-5 text-[#72583d]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-800">
                    Certified Member
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-neutral-100 rounded text-neutral-700">
                  GST Verified
                </span>
              </div>

              <div>
                <p className="text-[12px] font-bold text-neutral-900 tracking-tight">
                  DORIO MODULAR KITCHENS
                </p>
                <p className="text-[10px] text-neutral-500 font-medium">
                  GSTIN: {BUSINESS_INFO.gstin}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-600 border-t border-neutral-100">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72583d]" />
                  <span>100% BWP Marine</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-kodchasan text-center sm:text-left">
          <p>
            Copyright &copy; 2026 Dorio Modular Kitchen &amp; Interior. All rights reserved.
          </p>

          <p className="text-neutral-400">
            Pachawali Road, Etawah, Uttar Pradesh 206001 · GSTIN: {BUSINESS_INFO.gstin}
          </p>
        </div>

      </div>
    </footer>
  );
};
