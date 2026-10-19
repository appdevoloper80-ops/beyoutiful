import { useState, useRef, useCallback } from 'react';
import { Sparkles, Maximize2, X, MoveHorizontal } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function TransformationGallery() {
  // Before / After Slider Position (percentage 0 - 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lightbox Modal state
  const [activeLightboxImg, setActiveLightboxImg] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const galleryItems = [
    {
      src: SITE_CONFIG.images.salonAfter,
      caption: 'Dimensional Caramel Highlights & Wave Finish',
      category: 'Color & Highlights',
    },
    {
      src: SITE_CONFIG.images.heroSalon,
      caption: 'Full Volume Blowout & Tone Refresh',
      category: 'Styling',
    },
    {
      src: SITE_CONFIG.images.productDress,
      caption: 'Blush Silk Wrap Dress & Gold Accents Styling',
      category: 'Boutique Look',
    },
    {
      src: SITE_CONFIG.images.interior,
      caption: 'Boutique & Salon Floor Experience',
      category: 'Storefront',
    },
    {
      src: SITE_CONFIG.images.heroBoutique,
      caption: 'Spring Ready Floral & Tailored Collection',
      category: 'Personal Styling',
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FFF9F5] border-t border-[#C9A66B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Before & After Transformations</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
            The Beyoutiful Glow
          </h2>
          <p className="text-base sm:text-lg text-[#2A2025]/80 font-normal leading-relaxed">
            See the transformative difference a custom cut, dimensional color, and boutique style can make. Drag the slider below to compare results.
          </p>
          <div className="inline-block px-3 py-1 rounded-full bg-[#F6D6D8]/50 border border-[#C9A66B]/30 text-[11px] font-semibold text-[#B4506A] uppercase tracking-wider">
            Sample images in demo
          </div>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="max-w-4xl mx-auto mb-20">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] rounded-3xl overflow-hidden shadow-blush-lg border-2 border-[#C9A66B]/40 select-none cursor-ew-resize bg-[#2A2025]"
          >
            {/* "After" Image (Full background) */}
            <img
              src={SITE_CONFIG.images.salonAfter}
              alt="Hair transformation after: rich dimensional highlights and blowout"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#3A1F2B]/85 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-[#FFF9F5] border border-[#C9A66B]/30">
              After: Gloss & Waves
            </div>

            {/* "Before" Image (Clipped with polygon) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src={SITE_CONFIG.images.salonBefore}
                alt="Hair before transformation"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#FFF9F5]/90 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-[#3A1F2B] border border-[#C9A66B]/30">
                Before: Natural Tone
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FFF9F5] shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize pointer-events-none z-30"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFF9F5] border-2 border-[#B4506A] shadow-lg flex items-center justify-center text-[#B4506A]">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#2A2025]/70 mt-3 px-2">
            <span>← Drag left for Before</span>
            <span className="font-medium text-[#C9A66B]">Interactive Hair Transformation Slider</span>
            <span>Drag right for After →</span>
          </div>
        </div>

        {/* Transformation & Boutique Gallery Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-2xl text-[#3A1F2B]">
              Transformation & Style Highlights
            </h3>
            <span className="text-xs text-[#2A2025]/60 uppercase tracking-widest">
              Click photo to enlarge
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImg({ src: item.src, caption: item.caption })}
                className="group relative rounded-3xl overflow-hidden shadow-blush border border-[#C9A66B]/30 cursor-pointer aspect-[4/3] bg-white"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/80 via-transparent to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A66B] font-semibold">
                    {item.category}
                  </span>
                  <p className="font-serif-luxury text-lg text-white font-medium">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#FFF9F5]/90 backdrop-blur-sm text-[#3A1F2B] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3A1F2B]/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightboxImg(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#FFF9F5] rounded-3xl overflow-hidden shadow-2xl relative border border-[#C9A66B]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxImg(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#3A1F2B]/80 text-[#FFF9F5] hover:bg-[#B4506A] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-[#2A2025] flex items-center justify-center">
              <img
                src={activeLightboxImg.src}
                alt={activeLightboxImg.caption}
                className="w-full h-auto max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 flex items-center justify-between bg-[#FFF9F5] border-t border-[#C9A66B]/30">
              <p className="font-serif-luxury text-lg text-[#3A1F2B]">
                {activeLightboxImg.caption}
              </p>
              <span className="text-xs text-[#B4506A] font-semibold uppercase tracking-wider">
                Sample demo photo
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
