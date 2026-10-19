import { Sparkles, Phone, MapPin, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3A1F2B] text-[#FFF9F5] pt-16 pb-12 border-t border-[#C9A66B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C9A66B]/25">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-3xl font-semibold tracking-tight text-white">
                Be<span className="italic font-normal text-[#D98C9B]">you</span>tiful
              </span>
              <Sparkles className="w-4 h-4 text-[#C9A66B]" />
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A66B] font-medium">
              Boutique & Salon · Americus, GA
            </p>
            <p className="font-serif italic text-lg text-[#F6D6D8]">
              "Be You. Be Beyoutiful."
            </p>
            <p className="text-xs text-[#FFF9F5]/75 leading-relaxed max-w-sm font-light">
              Your premier women's fashion boutique and hair beauty sanctuary under one roof. Celebrating beauty, confidence, and sisterhood in Sumter County.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A66B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF9F5]/85">
              <li>
                <a href="#boutique" className="hover:text-[#F6D6D8] transition-colors">
                  The Boutique Collection
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-[#F6D6D8] transition-colors">
                  The Salon Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F6D6D8] transition-colors">
                  Before & After Transformations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F6D6D8] transition-colors">
                  Our Story & Mission
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F6D6D8] transition-colors">
                  Client Love & Reviews
                </a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-[#F6D6D8] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A66B]">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#FFF9F5]/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D98C9B] shrink-0 mt-0.5" />
                <span>902 S MLK Jr Blvd, Americus, GA 31719 (Plus Code: 3QC8+XW)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D98C9B] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="hover:text-[#F6D6D8] font-medium">
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Social Icons (Champagne with glow) */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C9A66B] block mb-2">
                Follow Along
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C9A66B]/50 flex items-center justify-center text-[#C9A66B] hover:text-white hover:border-[#C9A66B] hover:shadow-[0_0_12px_rgba(201,166,107,0.4)] transition-all text-xs font-bold"
                  aria-label="Beyoutiful on Facebook"
                >
                  f
                </a>
                {/* Instagram */}
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C9A66B]/50 flex items-center justify-center text-[#C9A66B] hover:text-white hover:border-[#C9A66B] hover:shadow-[0_0_12px_rgba(201,166,107,0.4)] transition-all text-xs font-bold"
                  aria-label="Beyoutiful on Instagram"
                >
                  ig
                </a>
                {/* TikTok */}
                <a
                  href={SITE_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C9A66B]/50 flex items-center justify-center text-[#C9A66B] hover:text-white hover:border-[#C9A66B] hover:shadow-[0_0_12px_rgba(201,166,107,0.4)] transition-all text-xs font-bold"
                  aria-label="Beyoutiful on TikTok"
                >
                  tt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F5]/60">
          <p>
            © 2026 Beyoutiful Boutique and Salon. All rights reserved. Demo design.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C9A66B] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
