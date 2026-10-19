import { MapPin, Sparkles, Heart, Scissors, ArrowDown } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-4 pb-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#F6D6D8]/30 to-[#FFF9F5]">
      {/* Decorative Subtle Background Watermark / Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F6D6D8]/40 to-[#C9A66B]/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Particles (< 15 particles for performance & reduced motion) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle-float absolute w-2 h-2 rounded-full bg-[#D98C9B]/40"
            style={{
              top: `${(i * 19 + 7) % 95}%`,
              left: `${(i * 23 + 11) % 92}%`,
              animationDelay: `${(i * 0.7) % 5}s`,
              transform: `scale(${0.6 + (i % 4) * 0.3})`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Americus, Georgia · Sumter County</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3A1F2B] leading-[1.12]">
              Look Be<span className="italic font-normal text-[#B4506A]">you</span>tiful.{' '}
              <br className="hidden sm:inline" />
              <span className="font-semibold text-[#2A2025]">Feel Unstoppable.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-[#2A2025]/85 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Trendy fashion, stylish accessories and expert hair and beauty services, all in one place on S MLK Jr Blvd.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#boutique"
                className="btn-rose-gradient w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase text-center shadow-blush hover:shadow-blush-lg flex items-center justify-center gap-2"
              >
                <span>Shop the Boutique</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase text-[#3A1F2B] border-2 border-[#C9A66B] hover:bg-[#C9A66B]/10 hover:border-[#B4506A] transition-all text-center flex items-center justify-center gap-2 bg-[#FFF9F5]/80 backdrop-blur-sm"
              >
                <Scissors className="w-4 h-4 text-[#B4506A]" />
                <span>Book a Salon Visit</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-6 border-t border-[#C9A66B]/25 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#2A2025]/80">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#B4506A] shrink-0" />
                <span className="font-medium">902 S MLK Jr Blvd, Americus</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Heart className="w-4 h-4 text-[#D98C9B] shrink-0" />
                <span className="font-medium">Friendly Personal Styling</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span className="font-medium">Boutique + Salon in One Stop</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arch-Shaped Collage */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Back Gold Arch Ornament Frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 sm:-inset-4 border border-[#C9A66B]/50 rounded-[140px] pointer-events-none transform rotate-1"
              />

              {/* Main Fashion Arch Image */}
              <div className="relative z-10 overflow-hidden shadow-blush-lg border-2 border-[#FFF9F5] rounded-[130px] bg-[#F6D6D8]/20 aspect-[3/4] max-h-[500px] w-full">
                <img
                  src={SITE_CONFIG.images.heroBoutique}
                  alt="Curated women's fashion in Beyoutiful Boutique Americus GA"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/60 via-transparent to-transparent" />

                {/* Floating Glass Badge 1: New Arrivals */}
                <div className="absolute top-8 left-6 bg-[#FFF9F5]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A66B]/40 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B4506A]" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#3A1F2B]">
                    New Arrivals
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Salon Shot Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 z-20 w-44 sm:w-56 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF9F5] bg-[#FFF9F5]">
                <img
                  src={SITE_CONFIG.images.heroSalon}
                  alt="Client enjoying hair styling transformation at Beyoutiful Salon"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/70 via-transparent to-transparent" />

                {/* Floating Glass Badge 2: Hair & Beauty */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#3A1F2B]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#C9A66B]/40 text-center">
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-[#FFF9F5]">
                    Hair & Beauty
                  </p>
                </div>
              </div>

              {/* Delicate Champagne Star Accent */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 text-[#C9A66B] z-20 animate-pulse hidden sm:block"
              >
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#two-worlds"
            className="flex flex-col items-center gap-1.5 text-xs text-[#2A2025]/60 hover:text-[#B4506A] transition-colors group"
            aria-label="Scroll to learn more"
          >
            <span className="tracking-widest uppercase text-[10px]">Explore Experience</span>
            <ArrowDown className="w-4 h-4 text-[#C9A66B] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
