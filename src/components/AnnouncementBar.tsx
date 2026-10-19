import { Phone, MapPin, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#3A1F2B] text-[#FFF9F5] text-xs py-2 px-4 border-b border-[#C9A66B]/30 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 md:gap-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
          <span className="font-medium tracking-wide uppercase text-[11px] text-[#F6D6D8]">
            Boutique + Salon, All Under One Roof
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-[11px] text-[#FFF9F5]/90">
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="flex items-center gap-1.5 hover:text-[#F6D6D8] transition-colors font-medium"
            aria-label="Call Beyoutiful Boutique and Salon at +1 229-938-7291"
          >
            <Phone className="w-3 h-3 text-[#D98C9B]" />
            <span>Call {SITE_CONFIG.displayPhone}</span>
          </a>

          <span className="hidden sm:inline text-[#C9A66B]/60" aria-hidden="true">·</span>

          <a
            href="#visit-us"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#F6D6D8] transition-colors"
          >
            <MapPin className="w-3 h-3 text-[#D98C9B]" />
            <span>Visit Us on S MLK Jr Blvd, Americus</span>
          </a>
        </div>
      </div>
    </div>
  );
}
