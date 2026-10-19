/**
 * Pure logic and validation rules for Beyoutiful Boutique and Salon.
 * Decoupled from React UI components for zero-dependency testability.
 */

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

/**
 * Formats user input into standard US phone number format (XXX) XXX-XXXX.
 */
export function formatUsPhone(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

/**
 * Validates US phone numbers (must contain exactly 10 digits).
 */
export function validateUsPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10;
}

/**
 * Validates an email address using standard RFC pattern.
 */
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

/**
 * Sanitizes inquiry or chat input.
 */
export function sanitizeInquiryText(text: string): string {
  return text.trim().replace(/[<>]/g, '');
}

/**
 * Validates the contact/inquiry form submission.
 */
export function validateInquiryForm(data: InquiryFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.phone || !validateUsPhone(data.phone)) {
    errors.phone = 'Please provide a valid 10-digit US phone number.';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.interest || data.interest === '') {
    errors.interest = 'Please select what you are interested in.';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please include a brief message or question (at least 5 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Rule-based answers for the Beyoutiful AI Concierge Assistant.
 * Never invents hours, staff names, or prices.
 */
export function getConciergeResponse(query: string): string {
  const q = query.toLowerCase().trim();

  if (!q) {
    return "Hi there, gorgeous! How can I help you today? Ask about our boutique collection, salon services, or where to find us in Americus.";
  }

  // Location / Directions
  if (
    q.includes('location') ||
    q.includes('where') ||
    q.includes('address') ||
    q.includes('directions') ||
    q.includes('mlk') ||
    q.includes('americus')
  ) {
    return "We are located at 902 S MLK Jr Blvd, Americus, GA 31719 (Plus Code: 3QC8+XW). Convenient parking is available right in front! You can also call us anytime at +1 229-938-7291.";
  }

  // Salon / Hair / Appointments / Pricing
  if (
    q.includes('salon') ||
    q.includes('book') ||
    q.includes('hair') ||
    q.includes('appointment') ||
    q.includes('color') ||
    q.includes('cut') ||
    q.includes('balayage') ||
    q.includes('highlight') ||
    q.includes('treatment') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('price') ||
    q.includes('how much')
  ) {
    return "We'd love to host you in our salon chair! For stylist consultations, custom hair appointments, and accurate service pricing, please call +1 229-938-7291 to chat directly with our team.";
  }

  // Boutique / Fashion / Clothes / Sizing / Inventory
  if (
    q.includes('boutique') ||
    q.includes('clothes') ||
    q.includes('dress') ||
    q.includes('outfit') ||
    q.includes('shoes') ||
    q.includes('jewelry') ||
    q.includes('accessory') ||
    q.includes('carry') ||
    q.includes('size') ||
    q.includes('brand') ||
    q.includes('shop')
  ) {
    return "Beyoutiful Boutique features curated seasonal women's clothing, statement dresses, footwear, chic handbags, jewelry, and gifts. Our inventory moves quickly with fresh weekly arrivals! Stop by our store or call +1 229-938-7291 to inquire about current stock.";
  }

  // Hours
  if (
    q.includes('hour') ||
    q.includes('open') ||
    q.includes('close') ||
    q.includes('time') ||
    q.includes('sunday') ||
    q.includes('saturday')
  ) {
    return "To confirm our current weekly boutique and salon hours or request a special appointment time, please call +1 229-938-7291.";
  }

  // Styling help
  if (q.includes('personal styl') || q.includes('styling') || q.includes('consult')) {
    return "Yes! We love offering warm, one-on-one personal styling in the boutique to help you assemble the perfect outfit for any occasion. Drop in or call +1 229-938-7291!";
  }

  // Gifts
  if (q.includes('gift') || q.includes('present') || q.includes('card')) {
    return "We carry unique gift items, accessories, candles, and beauty treats perfect for birthdays, holidays, or celebrating someone special. Visit us at 902 S MLK Jr Blvd to explore!";
  }

  // Default fallback polite guide
  return "Thank you for asking! We're proud to offer boutique fashion and luxury salon services all under one roof in Americus, GA. For personalized styling, appointment bookings, or inventory checks, feel free to give us a call at +1 229-938-7291.";
}
