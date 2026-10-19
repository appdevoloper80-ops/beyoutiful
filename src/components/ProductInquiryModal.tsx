import { useState, useId } from 'react';
import { X, Phone, Send, CheckCircle2, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG, ProductItem } from '@/src/config/siteConfig';
import { formatUsPhone, validateUsPhone } from '@/src/utils/pure_logic';

interface ProductInquiryModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductInquiryModal({ product, onClose }: ProductInquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const nameInputId = useId();
  const phoneInputId = useId();
  const noteInputId = useId();

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Please provide your name.');
      return;
    }
    if (!validateUsPhone(phone)) {
      setError('Please provide a valid 10-digit US phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3A1F2B]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF9F5] border border-[#C9A66B]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#2A2025]/60 hover:text-[#B4506A] rounded-full hover:bg-[#F6D6D8]/30 transition-colors"
          aria-label="Close inquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F6D6D8] flex items-center justify-center mx-auto text-[#B4506A]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif-luxury text-2xl text-[#3A1F2B]">
              Inquiry Received, Gorgeous!
            </h3>
            <p className="text-sm text-[#2A2025]/80 max-w-sm mx-auto">
              We've noted your interest in the <span className="font-semibold text-[#B4506A]">{product.name}</span>. Our team in Americus will reach out shortly, or feel free to call us directly!
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn-rose-gradient px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.displayPhone}</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C9A66B] text-[#3A1F2B] hover:bg-[#F6D6D8]/30"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-[#F6D6D8]">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#C9A66B]/30 bg-[#F6D6D8]/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C9A66B]">
                  In-Store Item · {product.category}
                </span>
                <h3 id="modal-product-title" className="font-serif-luxury text-xl text-[#3A1F2B] font-medium">
                  {product.name}
                </h3>
                <p className="text-xs text-[#2A2025]/70 mt-1">
                  Pricing & sizing available in-store or by phone inquiry.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F6D6D8]/40 border border-[#C9A66B]/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B4506A]" />
                <span className="text-xs text-[#3A1F2B] font-medium">Instant availability check:</span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="text-xs font-bold text-[#B4506A] hover:underline"
              >
                Call {SITE_CONFIG.displayPhone}
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor={nameInputId} className="block text-xs font-medium text-[#2A2025] mb-1">
                  Your Full Name
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  required
                  placeholder="e.g. Jessica Williams"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C9A66B]/40 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D98C9B]"
                />
              </div>

              <div>
                <label htmlFor={phoneInputId} className="block text-xs font-medium text-[#2A2025] mb-1">
                  Phone Number (US)
                </label>
                <input
                  id={phoneInputId}
                  type="tel"
                  required
                  placeholder="(229) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(formatUsPhone(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C9A66B]/40 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D98C9B]"
                />
              </div>

              <div>
                <label htmlFor={noteInputId} className="block text-xs font-medium text-[#2A2025] mb-1">
                  Size or Question (Optional)
                </label>
                <textarea
                  id={noteInputId}
                  rows={2}
                  placeholder="e.g. Inquiring about size M, or matching jewelry."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C9A66B]/40 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D98C9B]"
                />
              </div>

              {error && <p className="text-xs text-[#B4506A] font-medium">{error}</p>}

              <button
                type="submit"
                className="btn-rose-gradient w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-blush"
              >
                <Send className="w-4 h-4" />
                <span>Send Item Inquiry</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
