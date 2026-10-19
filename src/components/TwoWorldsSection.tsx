import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function TwoWorldsSection() {
  return (
    <section id="two-worlds" className="py-16 sm:py-24 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] mb-2">
            Two Worlds, One Destination
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3A1F2B] font-normal">
            Where Style Meets Pampering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* World 1: Boutique */}
          <div className="group relative rounded-3xl overflow-hidden shadow-blush hover:shadow-blush-lg transition-all duration-500 border border-[#C9A66B]/30 h-[420px] sm:h-[480px] flex flex-col justify-end p-8 sm:p-10">
            {/* Background Image */}
            <img
              src={SITE_CONFIG.images.heroBoutique}
              alt="Curated Fashion and Gifts at Beyoutiful Boutique"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/90 via-[#3A1F2B]/45 to-transparent transition-opacity" />

            {/* Content */}
            <div className="relative z-10 text-white space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9F5]/20 backdrop-blur-md text-xs font-medium text-[#F6D6D8]">
                <ShoppingBag className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>The Boutique</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-medium tracking-tight text-white">
                Curated Fashion & Gifts
              </h3>
              <p className="text-sm sm:text-base text-[#FFF9F5]/90 max-w-md font-light">
                Discover trending apparel, seasonal statement pieces, footwear, and thoughtful gifts tailored for you.
              </p>
              <div className="pt-2">
                <a
                  href="#boutique"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFF9F5] text-[#3A1F2B] font-semibold text-xs tracking-wider uppercase hover:bg-[#F6D6D8] transition-colors shadow-sm"
                >
                  <span>Explore the Boutique</span>
                  <ArrowRight className="w-4 h-4 text-[#B4506A] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* World 2: Salon */}
          <div className="group relative rounded-3xl overflow-hidden shadow-blush hover:shadow-blush-lg transition-all duration-500 border border-[#C9A66B]/30 h-[420px] sm:h-[480px] flex flex-col justify-end p-8 sm:p-10">
            {/* Background Image */}
            <img
              src={SITE_CONFIG.images.heroSalon}
              alt="Hair and Beauty Salon Services at Beyoutiful"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/90 via-[#3A1F2B]/45 to-transparent transition-opacity" />

            {/* Content */}
            <div className="relative z-10 text-white space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9F5]/20 backdrop-blur-md text-xs font-medium text-[#F6D6D8]">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>The Salon</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-medium tracking-tight text-white">
                Hair & Beauty, Perfected
              </h3>
              <p className="text-sm sm:text-base text-[#FFF9F5]/90 max-w-md font-light">
                Indulge in personalized cuts, rich color transformations, sun-kissed balayage, and luxurious hair rituals.
              </p>
              <div className="pt-2">
                <a
                  href="#salon"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFF9F5] text-[#3A1F2B] font-semibold text-xs tracking-wider uppercase hover:bg-[#F6D6D8] transition-colors shadow-sm"
                >
                  <span>Explore the Salon</span>
                  <ArrowRight className="w-4 h-4 text-[#B4506A] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
