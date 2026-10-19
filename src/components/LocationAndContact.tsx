import { useState, useId } from 'react';
import { MapPin, Phone, Clock, Navigation, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';
import {
  formatUsPhone,
  validateInquiryForm,
  sanitizeInquiryText,
  InquiryFormData,
} from '@/src/utils/pure_logic';

export default function LocationAndContact() {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Boutique',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const fullNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const interestId = useId();
  const messageId = useId();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUsPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedData: InquiryFormData = {
      fullName: sanitizeInquiryText(formData.fullName),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      interest: formData.interest,
      message: sanitizeInquiryText(formData.message),
    };

    const validation = validateInquiryForm(sanitizedData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="visit-us" className="py-20 sm:py-28 bg-[#FFF9F5] border-t border-[#C9A66B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Americus, GA</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
            Stop By & Say Hello
          </h2>
          <p className="text-base text-[#2A2025]/80 font-normal leading-relaxed max-w-xl mx-auto">
            We are conveniently located on S MLK Jr Blvd, serving Americus, Sumter County, and surrounding towns.
          </p>
        </div>

        {/* Location Split: Info Glass Card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Glass Card */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#C9A66B]/35 shadow-blush flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B4506A]">
                  Destination
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#3A1F2B] font-medium mt-1">
                  Beyoutiful Boutique & Salon
                </h3>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F6D6D8]/50 flex items-center justify-center shrink-0 text-[#B4506A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C9A66B]">
                    Address
                  </h4>
                  <p className="text-sm font-medium text-[#2A2025] mt-0.5">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-sm text-[#2A2025]/80">
                    {SITE_CONFIG.city}, {SITE_CONFIG.state} {SITE_CONFIG.zip}, {SITE_CONFIG.country}
                  </p>
                  <p className="text-xs text-[#B4506A] mt-1 font-mono">
                    Plus Code: {SITE_CONFIG.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F6D6D8]/50 flex items-center justify-center shrink-0 text-[#B4506A]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C9A66B]">
                    Phone (Click to Call)
                  </h4>
                  <a
                    href={`tel:${SITE_CONFIG.phoneClean}`}
                    className="text-base font-semibold text-[#B4506A] hover:underline block mt-0.5"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-xs text-[#2A2025]/70 mt-0.5">
                    Appointments, pricing & inventory inquiries
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F6D6D8]/50 flex items-center justify-center shrink-0 text-[#C9A66B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C9A66B]">
                    Store & Salon Hours
                  </h4>
                  <p className="text-sm text-[#2A2025]/85 mt-0.5">
                    {SITE_CONFIG.hoursNotice}
                  </p>
                  <p className="text-xs text-[#2A2025]/60 italic font-serif mt-0.5">
                    *To be updated with real business operating hours by client.
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-4 border-t border-[#F6D6D8]">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose-gradient w-full py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-blush"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Maps / Map View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#C9A66B]/35 shadow-blush min-h-[350px] lg:min-h-[460px] relative bg-[#F6D6D8]/20">
            <iframe
              title="Beyoutiful Boutique and Salon Location in Americus, GA"
              src="https://maps.google.com/maps?q=902+S+MLK+Jr+Blvd,+Americus,+GA+31719&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 z-10 bg-[#FFF9F5]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A66B]/40 shadow-xs flex items-center gap-2 text-xs font-semibold text-[#3A1F2B]">
              <MapPin className="w-3.5 h-3.5 text-[#B4506A]" />
              <span>Americus, GA 31719</span>
            </div>
          </div>
        </div>

        {/* Below: Inquiry & Message Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#C9A66B]/35 shadow-blush">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#B4506A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>Send a Direct Note</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#3A1F2B]">
              How Can We Help You Glow?
            </h3>
            <p className="text-xs sm:text-sm text-[#2A2025]/70 max-w-md mx-auto">
              Send us a message about boutique outfits, personal styling, or salon consultation questions.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#F6D6D8] flex items-center justify-center mx-auto text-[#B4506A]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif-luxury text-2xl text-[#3A1F2B]">
                Thank you, gorgeous!
              </h4>
              <p className="text-sm text-[#2A2025]/80 max-w-sm mx-auto">
                We'll be in touch soon. If you need immediate assistance or want to book right away, give us a call at <a href={`tel:${SITE_CONFIG.phoneClean}`} className="font-semibold text-[#B4506A] underline">{SITE_CONFIG.displayPhone}</a>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      interest: 'Boutique',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#C9A66B] text-[#3A1F2B] hover:bg-[#F6D6D8]/30"
                >
                  Send Another Note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor={fullNameId} className="block text-xs font-medium text-[#2A2025] mb-1.5">
                    Your Full Name <span className="text-[#B4506A]">*</span>
                  </label>
                  <input
                    id={fullNameId}
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Amanda Clark"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF9F5] focus:outline-none focus:ring-2 focus:ring-[#D98C9B] ${
                      errors.fullName ? 'border-[#B4506A]' : 'border-[#C9A66B]/40'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#B4506A] mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor={phoneId} className="block text-xs font-medium text-[#2A2025] mb-1.5">
                    Phone Number (US) <span className="text-[#B4506A]">*</span>
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    name="phone"
                    required
                    placeholder="(229) 000-0000"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF9F5] focus:outline-none focus:ring-2 focus:ring-[#D98C9B] ${
                      errors.phone ? 'border-[#B4506A]' : 'border-[#C9A66B]/40'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#B4506A] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label htmlFor={emailId} className="block text-xs font-medium text-[#2A2025] mb-1.5">
                    Email Address <span className="text-[#B4506A]">*</span>
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    name="email"
                    required
                    placeholder="amanda@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF9F5] focus:outline-none focus:ring-2 focus:ring-[#D98C9B] ${
                      errors.email ? 'border-[#B4506A]' : 'border-[#C9A66B]/40'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#B4506A] mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label htmlFor={interestId} className="block text-xs font-medium text-[#2A2025] mb-1.5">
                    I'm Interested In <span className="text-[#B4506A]">*</span>
                  </label>
                  <select
                    id={interestId}
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF9F5] focus:outline-none focus:ring-2 focus:ring-[#D98C9B] ${
                      errors.interest ? 'border-[#B4506A]' : 'border-[#C9A66B]/40'
                    }`}
                  >
                    <option value="Boutique">Boutique & Fashion Arrivals</option>
                    <option value="Salon">Salon Appointment Consultation</option>
                    <option value="Gifts">Gifts & Accessories</option>
                    <option value="Personal Styling">One-on-One Styling Guidance</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                  {errors.interest && (
                    <p className="text-xs text-[#B4506A] mt-1">{errors.interest}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor={messageId} className="block text-xs font-medium text-[#2A2025] mb-1.5">
                  Your Message or Question <span className="text-[#B4506A]">*</span>
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what you have in mind..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF9F5] focus:outline-none focus:ring-2 focus:ring-[#D98C9B] ${
                    errors.message ? 'border-[#B4506A]' : 'border-[#C9A66B]/40'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-[#B4506A] mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-rose-gradient w-full py-4 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-blush hover:shadow-blush-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
