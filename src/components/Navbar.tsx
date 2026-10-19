import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Boutique', href: '#boutique' },
    { name: 'Salon', href: '#salon' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit-us' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F5]/95 backdrop-blur-md border-b border-[#C9A66B]/30 shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Logo Wordmark */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0"
            aria-label="Beyoutiful Boutique and Salon Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-tight text-[#3A1F2B] group-hover:text-[#B4506A] transition-colors">
                Be<span className="italic font-normal text-[#B4506A]">you</span>tiful
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B] animate-pulse" />
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#C9A66B] -mt-1">
              Boutique & Salon
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#2A2025]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#B4506A] transition-colors whitespace-nowrap shrink-0 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A66B] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn-rose-gradient px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase whitespace-nowrap shadow-blush flex items-center gap-2"
              aria-label="Book a Salon Visit - Call +1 229-938-7291"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book a Salon Visit</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn-rose-gradient p-2 rounded-full text-white shadow-blush"
              aria-label="Call to Book"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#3A1F2B] hover:text-[#B4506A] focus:outline-none focus:ring-2 focus:ring-[#D98C9B] rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-In Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex justify-end"
        >
          {/* Solid Backdrop */}
          <div
            className="fixed inset-0 backdrop-blur-sm transition-opacity"
            style={{ backgroundColor: 'rgba(58, 31, 43, 0.65)' }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Solid Slide Drawer Content */}
          <div
            className="relative w-4/5 max-w-xs h-full p-6 shadow-2xl flex flex-col justify-between border-l border-[#C9A66B]/40 z-10"
            style={{ backgroundColor: '#FFF9F5' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F6D6D8]">
                <div>
                  <span className="font-serif-luxury text-2xl font-semibold text-[#3A1F2B]">
                    Be<span className="italic text-[#B4506A]">you</span>tiful
                  </span>
                  <p className="text-[10px] tracking-widest uppercase text-[#C9A66B]">
                    Boutique & Salon · Americus, GA
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#2A2025] hover:text-[#B4506A] rounded-full hover:bg-[#F6D6D8]/40"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif-luxury text-2xl font-medium text-[#2A2025] hover:text-[#B4506A] transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#F6D6D8] space-y-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn-rose-gradient w-full py-3.5 rounded-full text-center text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-blush"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.displayPhone}</span>
              </a>
              <div className="text-center text-xs text-[#2A2025]/75 space-y-1">
                <p className="font-medium text-[#3A1F2B]">902 S MLK Jr Blvd</p>
                <p>Americus, GA 31719</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
