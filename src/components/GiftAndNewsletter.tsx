import { useState } from 'react';
import { Gift, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { validateEmail } from '@/src/utils/pure_logic';

export default function GiftAndNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage("You're on the list, gorgeous! Expect style inspiration soon.");
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Banner: Gift Spotlight (Blush-to-Rose gradient) */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#F6D6D8] via-[#eec5cb] to-[#D98C9B] border border-[#C9A66B]/35 shadow-blush flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9F5]/70 text-xs font-semibold text-[#B4506A] uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5" />
                <span>Gift Collections</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A1F2B] font-medium leading-tight">
                Looking for the Perfect Gift?
              </h3>
              <p className="text-sm sm:text-base text-[#3A1F2B]/85 font-light leading-relaxed">
                From luxury scented candles and artisan accessories to statement jewelry and custom boutique gift bundles, surprise someone special with an unforgettable treat from Americus.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#boutique"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A1F2B] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#B4506A] transition-colors shadow-md"
              >
                <span>Visit the Boutique</span>
                <ArrowRight className="w-4 h-4 text-[#C9A66B]" />
              </a>
            </div>
          </div>

          {/* Right Box: Style Tips & New Arrivals Newsletter */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white border border-[#C9A66B]/35 shadow-blush flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6D6D8]/40 text-xs font-semibold text-[#C9A66B] uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-[#B4506A]" />
                <span>VIP Insiders</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A1F2B] font-medium leading-tight">
                Get Style Tips & New Arrival Alerts
              </h3>
              <p className="text-sm sm:text-base text-[#2A2025]/80 font-light leading-relaxed">
                Be the first to hear when fresh boutique collections land, seasonal salon styling tips, and private in-store trunk shows.
              </p>
            </div>

            <div className="pt-6">
              {status === 'success' ? (
                <div className="p-4 rounded-2xl bg-[#F6D6D8]/50 border border-[#C9A66B]/30 flex items-center gap-3 text-sm text-[#3A1F2B]">
                  <CheckCircle2 className="w-5 h-5 text-[#B4506A] shrink-0" />
                  <span>{message}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-full border border-[#C9A66B]/40 bg-[#FFF9F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#D98C9B]"
                      aria-label="Email for style newsletter"
                    />
                    <button
                      type="submit"
                      className="btn-rose-gradient px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap shadow-xs"
                    >
                      Subscribe
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-xs text-[#B4506A] font-medium pl-2">{message}</p>
                  )}
                  <p className="text-[11px] text-[#2A2025]/60 pl-2">
                    We treat your inbox with care. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
