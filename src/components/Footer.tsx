import { useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Facebook,
  Loader2,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Star,
} from 'lucide-react';
import { BUSINESS_INFO } from '../constant';
// Keep your original import path for BUSINESS_INFO here.


/* ---------- Config ---------- */

// Optional: free key from web3forms.com. Leads are emailed to the client.
// Without it, the form opens WhatsApp with the lead details pre-filled.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const PHONE_RE = /^[6-9]\d{9}$/;

const KITCHEN_TYPES = [
  'U-Shaped with Breakfast Bar',
  'L-Shaped with Prep Nook',
  'Open-Plan Island Kitchen',
  'G-Shaped (Peninsula) Kitchen',
  'Parallel / Straight Kitchen',
  'Full Home Interior & Kitchen',
];

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const KITCHEN_LINKS = [
  'U-Shaped Kitchen',
  'L-Shaped Kitchen',
  'Island Kitchen',
  'Peninsula Kitchen',
];

const ADDRESS =
  '1 Dorio, Dorio Modular Kitchen Interior, Near JP Garden, Pachawali Road, Yashoda Nagar, Etawah-206001, Uttar Pradesh';

/* ---------- Helpers ---------- */

const toWhatsAppNumber = (raw: string) => `91${raw.replace(/\D/g, '').slice(-10)}`;

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${toWhatsAppNumber(BUSINESS_INFO.phoneRaw)}?text=${encodeURIComponent(message)}`;

const inputClass =
  'w-full h-12 px-4 bg-[#0E0C0A] border border-neutral-700/80 rounded-lg text-white placeholder-neutral-500 text-base font-kodchasan focus:outline-none focus:border-[#72583d] focus:ring-1 focus:ring-[#72583d] transition-colors';

const labelClass =
  'block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5';

/* ---------- Component ---------- */

type Status = 'idle' | 'sending' | 'sent';

export default function Footer() {
  const [form, setForm] = useState({ name: '', phone: '', kitchenType: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const whatsappMessage = () =>
    `Hi, I'm ${form.name.trim()} (${form.phone}). I'd like a free estimate for: ${form.kitchenType}.`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.name.trim().length < 2) return setError('Enter your name');
    if (!PHONE_RE.test(form.phone)) return setError('Enter a valid 10-digit mobile number');
    if (!form.kitchenType) return setError('Select a kitchen type');

    // No form backend configured: open WhatsApp straight from the tap
    // (must happen before any await, or mobile browsers block the popup).
    if (!WEB3FORMS_KEY) {
      window.open(buildWhatsAppUrl(whatsappMessage()), '_blank', 'noopener');
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New kitchen estimate lead',
          name: form.name.trim(),
          phone: form.phone,
          kitchen_type: form.kitchenType,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('idle');
      setError('Could not send. Please call us or use WhatsApp.');
    }
  };

  const resetForm = () => {
    setForm({ name: '', phone: '', kitchenType: '' });
    setStatus('idle');
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#120F0D] text-[#E5E5E5] border-t border-neutral-800 scroll-mt-16 font-sans pt-12 sm:pt-16 pb-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 pb-12 border-b border-neutral-800">
          {/* ---------- Lead form (first on mobile, 50% on desktop) ---------- */}
          <section
            id="lead-form"
            aria-labelledby="lead-form-title"
            className="scroll-mt-20 bg-[#181411] border border-[#72583d]/40 rounded-2xl p-5 sm:p-8"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b08d62]">
              <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>5.0 rating · 36 reviews · 15+ years</span>
            </div>

            <h2
              id="lead-form-title"
              className="mt-3 text-2xl sm:text-3xl font-bold text-white font-didact tracking-tight"
            >
              Get your free kitchen estimate
            </h2>
            <p className="mt-2 text-sm text-neutral-400 font-kodchasan leading-relaxed">
              Free laser measurement and 3D preview in Etawah. Share your details and our design
              team will call you back.
            </p>

            {status === 'sent' ? (
              <div
                role="status"
                className="mt-6 p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white font-didact">Request received</h3>
                <p className="text-sm text-neutral-300 font-kodchasan leading-relaxed">
                  Thank you, <strong className="text-white">{form.name.trim()}</strong>. We will
                  call you shortly.
                </p>
                <a
                  href={buildWhatsAppUrl(whatsappMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-[#25D366] text-[#25D366] text-sm font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message us on WhatsApp
                </a>
                <div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-[#b08d62] hover:underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lead-name" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Rahul Sharma"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className={labelClass}>
                      Mobile number
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={form.phone}
                      onChange={(e) =>
                        update('phone', e.target.value.replace(/\D/g, '').slice(-10))
                      }
                      placeholder="98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-kitchen" className={labelClass}>
                    Kitchen type
                  </label>
                  <div className="relative">
                    <select
                      id="lead-kitchen"
                      value={form.kitchenType}
                      onChange={(e) => update('kitchenType', e.target.value)}
                      className={`${inputClass} appearance-none pr-10 cursor-pointer ${form.kitchenType ? '' : 'text-neutral-500'
                        }`}
                    >
                      <option value="" disabled>
                        Select kitchen layout
                      </option>
                      {KITCHEN_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[#0E0C0A] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="w-4 h-4 text-neutral-400 absolute right-3.5 top-4 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <p role="alert" aria-live="polite" className="min-h-5 text-sm text-red-400">
                  {error}
                </p>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full h-12 px-4 bg-[#72583d] hover:bg-[#856747] active:scale-[0.99] disabled:opacity-70 text-white font-bold text-base tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{status === 'sending' ? 'Sending...' : 'Get free estimate'}</span>
                </button>

                <a
                  href={buildWhatsAppUrl(
                    "Hi, I'd like a free estimate for a modular kitchen in Etawah."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-lg border border-[#25D366] text-[#25D366] font-bold text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Or chat on WhatsApp</span>
                </a>
              </form>
            )}
          </section>

          {/* ---------- Contact and links ---------- */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white font-didact tracking-wide mb-4">
                Talk to us now
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="h-12 flex items-center justify-center gap-2 rounded-lg bg-[#72583d] hover:bg-[#856747] text-white font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call now
                </a>
                <a
                  href={buildWhatsAppUrl('Hi, I have a question about modular kitchens.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 flex items-center justify-center gap-2 rounded-lg border border-[#25D366] text-[#25D366] font-bold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <address className="not-italic space-y-3 text-sm text-neutral-300 font-kodchasan leading-relaxed">
              <h3 className="text-lg font-bold text-white font-didact tracking-wide">
                Studio &amp; workshop
              </h3>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b08d62] shrink-0 mt-1" aria-hidden="true" />
                <p>{ADDRESS}</p>
              </div>
              <div className="flex items-center gap-5 text-xs font-semibold text-[#b08d62]">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get directions
                </a>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
              </div>
              <p className="text-neutral-400">{BUSINESS_INFO.workingHours}</p>
              <p className="flex items-center gap-1.5 text-xs text-[#b08d62] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                {BUSINESS_INFO.statusText}
              </p>
            </address>

            <div className="grid grid-cols-2 gap-6">
              <nav aria-label="Footer">
                <h3 className="text-sm font-bold text-white font-didact tracking-wide mb-3">
                  Quick links
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-400 font-kodchasan">
                  {QUICK_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h3 className="text-sm font-bold text-white font-didact tracking-wide mb-3">
                  Kitchen layouts
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-400 font-kodchasan">
                  {KITCHEN_LINKS.map((label) => (
                    <li key={label}>
                      <a href="#projects" className="hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 bg-white hover:bg-[#72583d] text-neutral-900 hover:text-white flex items-center justify-center rounded-md transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ---------- Legal strip ---------- */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500 font-kodchasan text-center sm:text-left">
          <p>&copy; 2026 Dorio Modular Kitchen &amp; Interior. All rights reserved.</p>
          <p>GSTIN: {BUSINESS_INFO.gstin}</p>
        </div>
      </div>
    </footer>
  );
}
