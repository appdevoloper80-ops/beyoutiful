import { useState, useRef } from 'react';
import { Heart, ChevronLeft, ChevronRight, MessageSquare, Sparkles, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG, ProductItem } from '@/src/config/siteConfig';
import ProductInquiryModal from './ProductInquiryModal';

export default function BoutiqueSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="boutique" className="py-20 sm:py-28 bg-[#FFF9F5] border-t border-[#C9A66B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Curated Women's Fashion</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
            Style That's Made for You
          </h2>
          <p className="text-base sm:text-lg text-[#2A2025]/80 font-normal leading-relaxed">
            Discover curated seasonal fashion, trendy women's clothing, statement footwear, handcrafted accessories, and delightful gift items—accompanied by warm, friendly in-store personal styling guidance.
          </p>
          <p className="text-xs text-[#C9A66B] italic font-serif">
            *Inventory changes frequently with weekly arrivals. Visit us at 902 S MLK Jr Blvd to view current pieces!
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SITE_CONFIG.boutiqueCategories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-3xl overflow-hidden shadow-blush hover:shadow-blush-lg transition-all duration-300 border border-[#C9A66B]/30 bg-white flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/60 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FFF9F5]/90 backdrop-blur-sm text-[10px] font-semibold tracking-wider uppercase text-[#3A1F2B] border border-[#C9A66B]/30">
                  {cat.badge}
                </span>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#3A1F2B] group-hover:text-[#B4506A] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#2A2025]/75 leading-relaxed mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F6D6D8]/60 flex items-center justify-between text-xs text-[#B4506A] font-medium">
                  <span>Available In-Store</span>
                  <span className="font-serif text-[#C9A66B] group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Arrivals Showcase Section with Horizontal Slider */}
        <div className="bg-[#F6D6D8]/20 rounded-3xl p-6 sm:p-10 border border-[#C9A66B]/30 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B4506A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Showcase</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#3A1F2B] mt-1 font-medium">
                New Arrivals Spotlight
              </h3>
              <p className="text-xs text-[#2A2025]/70 mt-0.5">
                Sample showcase styles. For exact stock and sizes, call or visit us in Americus.
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider('left')}
                className="p-2.5 rounded-full bg-white text-[#3A1F2B] hover:text-[#B4506A] hover:bg-[#FFF9F5] shadow-sm border border-[#C9A66B]/30 transition-all focus:outline-none"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="p-2.5 rounded-full bg-white text-[#3A1F2B] hover:text-[#B4506A] hover:bg-[#FFF9F5] shadow-sm border border-[#C9A66B]/30 transition-all focus:outline-none"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider Track */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
            tabIndex={0}
            role="region"
            aria-label="New arrivals product carousel"
          >
            {SITE_CONFIG.sampleProducts.map((prod) => (
              <div
                key={prod.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-[#C9A66B]/30 shadow-blush flex flex-col"
              >
                {/* Product Image */}
                <div className="h-64 relative overflow-hidden bg-[#F6D6D8]/30">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#FFF9F5]/90 backdrop-blur-sm text-[10px] font-semibold tracking-wider uppercase text-[#3A1F2B] border border-[#C9A66B]/30 shadow-xs">
                      {prod.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#3A1F2B]/85 text-[10px] font-medium tracking-wider uppercase text-[#FFF9F5]">
                      In Store
                    </span>
                  </div>

                  {/* Favorite Heart Toggle */}
                  <button
                    onClick={() => toggleFavorite(prod.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#FFF9F5]/90 backdrop-blur-sm text-[#3A1F2B] hover:text-[#B4506A] transition-colors shadow-xs"
                    aria-label={`Save ${prod.name} to wishlist`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        favorites[prod.id] ? 'fill-[#B4506A] text-[#B4506A]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C9A66B]">
                      {prod.category}
                    </span>
                    <h4 className="font-serif-luxury text-xl font-medium text-[#3A1F2B] mt-1 leading-snug">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-[#2A2025]/75 mt-1.5 line-clamp-2">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F6D6D8]/80 space-y-3">
                    <p className="text-xs font-semibold text-[#B4506A] tracking-wide">
                      Call or visit for pricing
                    </p>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#B4506A] text-[#B4506A] hover:bg-[#B4506A] hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ask About This Item</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* In-Code Note for Client Handover */}
          <div className="mt-8 pt-4 border-t border-[#C9A66B]/20 text-center text-xs text-[#2A2025]/60">
            Note: Boutique inventory updates continuously with seasonal trends. Real client photography and live stock can be linked directly.
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <ProductInquiryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
