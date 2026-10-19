import { useState, useEffect } from 'react';
import { Phone, Navigation, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to top floating button (desktop & tablet) */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white border border-[#C9A66B]/50 text-[#3A1F2B] hover:text-[#B4506A] shadow-blush hover:shadow-blush-lg transition-all items-center justify-center"
          aria-label="Back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Sticky Bottom Bar (Only visible on small screens < 640px, capped < 12% viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FFF9F5]/95 backdrop-blur-md border-t border-[#C9A66B]/30 px-3 py-2.5 shadow-lg">
        <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
          {/* Call Now */}
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn-rose-gradient py-2.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-blush text-center"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          {/* Directions */}
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#C9A66B] text-[#3A1F2B] bg-white hover:bg-[#F6D6D8]/30 transition-colors text-center"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B4506A]" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </>
  );
}
