import { Sparkles, Heart, Gift, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function WhyChooseUs() {
  const icons = [
    <Sparkles className="w-6 h-6 text-[#C9A66B]" />,
    <Heart className="w-6 h-6 text-[#C9A66B]" />,
    <Gift className="w-6 h-6 text-[#C9A66B]" />,
    <MapPin className="w-6 h-6 text-[#C9A66B]" />,
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#3A1F2B] text-[#FFF9F5] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C9A66B]/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#B4506A]/15 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
            The Beyoutiful Standard
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Why Women Love Our Sanctuary
          </h2>
          <p className="text-sm sm:text-base text-[#FFF9F5]/80 font-light max-w-xl mx-auto">
            Experience the care, convenience, and charm that make every visit to 902 S MLK Jr Blvd special.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_CONFIG.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2A2025]/60 backdrop-blur-sm rounded-3xl p-7 border border-[#C9A66B]/35 shadow-plum hover:border-[#C9A66B] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C9A66B]/15 border border-[#C9A66B]/40 flex items-center justify-center">
                  {icons[idx]}
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#FFF9F5] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF9F5]/75 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#C9A66B]/20 text-[11px] font-semibold tracking-wider uppercase text-[#C9A66B]">
                0{idx + 1} · Excellence
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
