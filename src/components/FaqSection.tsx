import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFF9F5] border-t border-[#C9A66B]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#2A2025]/80 max-w-xl mx-auto font-normal">
            Have questions about visiting our boutique or scheduling salon services in Americus? We're here to help.
          </p>
        </div>

        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#C9A66B]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#D98C9B] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-medium text-[#3A1F2B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F6D6D8]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#B4506A] text-white' : 'text-[#3A1F2B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#2A2025]/80 leading-relaxed border-t border-[#F6D6D8] animate-fade-in space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#B4506A]">
                      <Phone className="w-3.5 h-3.5" />
                      <a href={`tel:${SITE_CONFIG.phoneClean}`} className="hover:underline">
                        Call us directly at {SITE_CONFIG.displayPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
