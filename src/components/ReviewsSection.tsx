import { Star, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FFF9F5] border-t border-[#C9A66B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B4506A]">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Community Love</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
            Words From Our Guests
          </h2>
          <p className="text-base text-[#2A2025]/80 font-normal leading-relaxed max-w-xl mx-auto">
            From hair styling compliments to boutique discoveries, hear what women in Americus and Sumter County say about their visits.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SITE_CONFIG.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-[#C9A66B]/30 shadow-blush hover:shadow-blush-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* 5 Champagne Stars */}
                <div className="flex items-center gap-1 text-[#C9A66B]" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A66B]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-[#2A2025]/85 italic leading-relaxed font-serif">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F6D6D8]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-[#3A1F2B]">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-[#2A2025]/60 mt-0.5">
                      {rev.service} · {rev.location}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#B4506A] px-2 py-0.5 rounded-full bg-[#F6D6D8]/50">
                    Sample
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Placeholder Link */}
        <div className="text-center pt-4">
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C9A66B] text-[#3A1F2B] hover:bg-[#F6D6D8]/40 hover:border-[#B4506A] transition-all"
          >
            <span>Read More on Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B4506A]" />
          </a>
          <p className="text-xs text-[#2A2025]/60 mt-2 font-serif italic">
            *Demo reviews illustrate layout and guest sentiment. Live Google reviews can be synced.
          </p>
        </div>
      </div>
    </section>
  );
}
