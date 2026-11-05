import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: 'Vijay Nagar, Etawah',
    service: 'Modular Kitchen (BWP Ply & Acrylic)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `Hi Dorio Modular Kitchen, I would like to book a free site visit in Etawah.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Locality:* ${encodeURIComponent(formData.locality)}%0A*Service:* ${encodeURIComponent(formData.service)}`;
    window.open(`https://wa.me/918076275334?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#090B0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#7BAE43] font-bold mb-2">
            Showroom & Consultations
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Visit Our Etawah Studio or Call Today
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Located on Pachawali Road, Vijay Nagar. Schedule a free home measurement or material preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Direct Call & Address Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Call Card */}
            <div className="p-6 rounded-2xl bg-[#14171E] border border-[#7BAE43]/40 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BAE43]">
                Primary Direct Line
              </div>
              <h3 className="text-xl font-bold text-white">
                Speak with our Kitchen Architect
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Direct phone consultation for kitchen dimensions, acrylic samples, or booking a site visit.
              </p>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3.5 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-extrabold text-base flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <div className="text-[11px] text-zinc-500 text-center">
                * Zero visiting charges in Etawah & immediate radius
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-6 rounded-2xl bg-[#14171E] border border-white/10 space-y-4 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7BAE43] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Studio Address</div>
                  <div className="text-zinc-400 mt-0.5">{BUSINESS_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <Clock className="w-4 h-4 text-[#7BAE43] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Hours of Operation</div>
                  <div className="text-zinc-400 mt-0.5">{BUSINESS_INFO.workingHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <Navigation className="w-4 h-4 text-[#7BAE43] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Serving Etawah Region</div>
                  <div className="text-zinc-400 mt-0.5">
                    Pachawali Rd, Vijay Nagar, Friends Colony, Civil Lines, Saifai & Jaswantnagar.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Free Site Visit Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#14171E] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                Schedule a Free Site Measurement
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Our technician visits your site with material samples and laser measures your space.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#7BAE43]/15 border border-[#7BAE43]/30 text-center space-y-2">
                <div className="text-[#7BAE43] font-bold text-sm">Request Received!</div>
                <p className="text-xs text-zinc-300">
                  We are connecting via Phone ({BUSINESS_INFO.phone}) to confirm your appointment.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-block mt-2 px-4 py-2 rounded-lg bg-[#7BAE43] text-black font-bold text-xs"
                >
                  Call Directly Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#7BAE43]"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">Phone Number (Calling / WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 080762 75334"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#7BAE43]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Locality in Etawah</label>
                    <input
                      type="text"
                      placeholder="e.g. Vijay Nagar, Friends Colony"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#7BAE43]"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Product Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#7BAE43]"
                    >
                      <option value="Modular Kitchen (BWP Ply & Acrylic)">Modular Kitchen</option>
                      <option value="Acrylic Modular Kitchen">Acrylic Modular Kitchen</option>
                      <option value="Kitchen Cabinets & Pantry">Kitchen Cabinets</option>
                      <option value="Interior & Exterior Decorators">Interior & Exterior Decor</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Confirm Free Visit Booking
                  </button>
                </div>
              </form>
            )}

            {/* Google Maps Preview */}
            <div className="pt-3 border-t border-white/5">
              <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  title="Dorio Kitchen Location Pachawali Road Etawah"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14282.88514930811!2d79.014238!3d26.776629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975cf518a4d45a9%3A0x6b44709d6fbbbe13!2sPachavali%20Rd%2C%20Vijay%20Nagar%2C%20Etawah%2C%20Uttar%20Pradesh%20206001!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
