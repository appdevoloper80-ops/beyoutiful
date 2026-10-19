/**
 * =========================================================================
 * BEYOUTIFUL BOUTIQUE AND SALON - CLIENT CONFIGURATION FILE
 * =========================================================================
 * Easily swap out client details, contact information, hours, inventory,
 * and service menus here for production deployment.
 */

// Import generated high-resolution assets
import heroBoutiqueImg from '@/src/assets/images/hero_boutique_fashion_1792384508021.jpg';
import heroSalonImg from '@/src/assets/images/hero_salon_styling_1792384509427.jpg';
import productDressImg from '@/src/assets/images/boutique_collection_dresses_1792384509477.jpg';
import salonTransformationImg from '@/src/assets/images/salon_transformation_glow_1792384509409.jpg';
import boutiqueSalonInteriorImg from '@/src/assets/images/boutique_salon_interior_1792384510272.jpg';
import salonBeforeImg from '@/src/assets/images/salon_before_texture_1792384528329.jpg';
import productJewelryImg from '@/src/assets/images/product_accessories_jewelry_1792384528354.jpg';
import productToteImg from '@/src/assets/images/product_handbag_tote_1792384528169.jpg';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  tag: string;
  inStore: boolean;
  description: string;
}

export interface SalonService {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  // Brand Details
  brandName: 'Beyoutiful',
  brandSubtitle: 'Boutique & Salon',
  tagline: 'Look Beyoutiful. Feel Unstoppable.',
  subTagline:
    "Trendy fashion, stylish accessories and expert hair and beauty services, all in one place on S MLK Jr Blvd.",

  // Contact & Location
  phone: '+1 229-938-7291',
  phoneClean: '+12299387291',
  displayPhone: '(229) 938-7291',
  address: '902 S MLK Jr Blvd',
  city: 'Americus',
  state: 'GA',
  zip: '31719',
  country: 'USA',
  fullAddress: '902 S MLK Jr Blvd, Americus, GA 31719, USA',
  plusCode: '3QC8+XW Americus, Georgia',
  serviceArea: 'Americus and surrounding Sumter County',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=902+S+MLK+Jr+Blvd,+Americus,+GA+31719',
  hoursNotice: 'Please call to confirm current weekly boutique & salon hours',

  // Social Links (demo placeholders)
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  },

  // Color Palette Reference
  colors: {
    blush: '#F6D6D8',
    rose: '#D98C9B',
    roseDeep: '#B4506A',
    plum: '#3A1F2B',
    champagne: '#C9A66B',
    cream: '#FFF9F5',
    ink: '#2A2025',
    white: '#FFFFFF',
  },

  // Assets
  images: {
    heroBoutique: heroBoutiqueImg,
    heroSalon: heroSalonImg,
    productDress: productDressImg,
    productJewelry: productJewelryImg,
    productTote: productToteImg,
    salonBefore: salonBeforeImg,
    salonAfter: salonTransformationImg,
    interior: boutiqueSalonInteriorImg,
  },

  // Boutique Categories (6 cards)
  boutiqueCategories: [
    {
      id: 'cat-clothing',
      title: 'Curated Clothing',
      description: 'Chic everyday wear, floral dresses, premium denim & elevated workwear.',
      badge: 'Fresh Styles',
      image: heroBoutiqueImg,
    },
    {
      id: 'cat-footwear',
      title: 'Footwear & Heels',
      description: 'Comfortable statement mules, sleek strappy heels & seasonal boots.',
      badge: 'All Sizes',
      image: boutiqueSalonInteriorImg,
    },
    {
      id: 'cat-accessories',
      title: 'Chic Accessories',
      description: 'Layered gold necklaces, hoop earrings, hair clips & designer belts.',
      badge: 'Gold & Brass',
      image: productJewelryImg,
    },
    {
      id: 'cat-seasonal',
      title: 'Seasonal Picks',
      description: 'Hand-picked trend pieces curated for spring, summer, fall and festive winter.',
      badge: 'Limited Run',
      image: productDressImg,
    },
    {
      id: 'cat-gifts',
      title: 'Unique Gifts',
      description: 'Specialty gift sets, fragrant luxury treats, and celebratory surprises.',
      badge: 'Gift Ready',
      image: productToteImg,
    },
    {
      id: 'cat-styling',
      title: 'Personal Styling',
      description: 'Friendly, warm one-on-one styling guidance right here on the boutique floor.',
      badge: 'Complimentary',
      image: heroSalonImg,
    },
  ],

  // New Arrivals Showcase (Sample items - inventory changes often)
  sampleProducts: [
    {
      id: 'prod-1',
      name: 'Blush Silk Wrap Dress',
      category: 'Dresses',
      image: productDressImg,
      tag: 'Sample Item',
      inStore: true,
      description:
        'A romantic, flattering wrap silhouette crafted from silky lightweight fabric with soft flutter sleeves.',
    },
    {
      id: 'prod-2',
      name: 'Champagne Gold Statement Earrings',
      category: 'Jewelry',
      image: productJewelryImg,
      tag: 'Sample Item',
      inStore: true,
      description:
        'Brushed champagne gold hoop and medallion earrings designed to catch the light beautifully.',
    },
    {
      id: 'prod-3',
      name: 'Classic Nude Everyday Tote',
      category: 'Handbags',
      image: productToteImg,
      tag: 'Sample Item',
      inStore: true,
      description:
        'Structured pebble-finish leatherette with polished brass hardware and spacious interior.',
    },
    {
      id: 'prod-4',
      name: 'Tailored Cream Silhouette Blazer',
      category: 'Outerwear',
      image: heroBoutiqueImg,
      tag: 'Sample Item',
      inStore: true,
      description:
        'Impeccably tailored cream blazer with structured lapels, perfect for day-to-night styling.',
    },
  ] as ProductItem[],

  // Salon Services (5 service categories)
  salonServices: [
    {
      id: 'svc-cuts',
      title: 'Haircuts & Precision Styling',
      icon: 'Scissors',
      description:
        'Customized haircuts, face-framing layers, dry cutting, and signature blowout finishes tailored to your hair type.',
      benefits: ['Consultation included', 'Signature blowout', 'Healthy heat protection'],
    },
    {
      id: 'svc-color',
      title: 'Custom Hair Color & Gloss',
      icon: 'Sparkles',
      description:
        'Rich all-over color, root touch-ups, seamless gray blending, and high-shine tone-restoring glosses.',
      benefits: ['Ammonia-safe formulas', 'Deep color retention', 'Mirror-like shine'],
    },
    {
      id: 'svc-highlights',
      title: 'Dimensional Highlights & Balayage',
      icon: 'Sun',
      description:
        'Hand-painted sun-kissed balayage, babylights, full foil highlights, and custom dimensional toning.',
      benefits: ['Soft natural grow-out', 'Blended dimension', 'Custom toners'],
    },
    {
      id: 'svc-treatments',
      title: 'Specialized Hair Treatments',
      icon: 'HeartHandshake',
      description:
        'Intensive bond-rebuilding masks, scalp rejuvenation, deep moisture treatments, and frizz-taming care.',
      benefits: ['Restores elasticity', 'Tames humidity frizz', 'Scalp balancing'],
    },
    {
      id: 'svc-beauty',
      title: 'Beauty & Glam Styling',
      icon: 'Crown',
      description:
        'Event styling, elegant updos, bouncy curls, and beauty grooming touches to make you look unforgettable.',
      benefits: ['Special occasions', 'Long-lasting hold', 'Photo-ready glam'],
    },
  ] as SalonService[],

  // Stepper: How it Works
  howItWorksSteps: [
    {
      step: '01',
      title: 'Call or Visit Us',
      desc: 'Reach out at +1 229-938-7291 or stop by our location on S MLK Jr Blvd in Americus.',
    },
    {
      step: '02',
      title: 'Chat With Your Stylist',
      desc: 'Discuss your hair goals, face shape, color inspiration, or personalized outfit pairing.',
    },
    {
      step: '03',
      title: 'Leave Feeling Beyoutiful',
      desc: 'Walk out glowing with head-turning hair and an outfit that celebrates your unique confidence.',
    },
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: 'Boutique + Salon Under One Roof',
      desc: 'Shop the newest trends and refresh your hair look in a single relaxed, pampering visit.',
      icon: 'Sparkle',
    },
    {
      title: 'Friendly Personal Styling',
      desc: 'Warm, sincere guidance with zero pressure. We help you find pieces that fit your body and lifestyle.',
      icon: 'Heart',
    },
    {
      title: 'Unique Gifts & Seasonal Finds',
      desc: 'Carefully curated pieces and delightful gifts you will not find in regular big-box department stores.',
      icon: 'Gift',
    },
    {
      title: 'Locally Loved in Americus',
      desc: 'Proudly serving Americus, Sumter County, and neighboring communities with southern hospitality.',
      icon: 'MapPin',
    },
  ],

  // Customer Reviews (Sample reviews with fake first names and initials)
  reviews: [
    {
      id: 'rev-1',
      author: 'Candace M.',
      location: 'Americus, GA',
      service: 'Salon Balayage & Boutique Shopping',
      rating: 5,
      quote:
        'I had the best afternoon here! Getting my hair colored and then browsing the boutique racks right after was heavenly. The team made me feel like royalty.',
      date: 'Sample review · 2 weeks ago',
    },
    {
      id: 'rev-2',
      author: 'Tamara R.',
      location: 'Sumter County, GA',
      service: 'Haircut, Blowout & Dress Styling',
      rating: 5,
      quote:
        'Beyoutiful is a true gem in Americus. My blowout stayed flawless for days, and I found the cutest dress for my anniversary dinner. So welcoming!',
      date: 'Sample review · 1 month ago',
    },
    {
      id: 'rev-3',
      author: 'Brianna K.',
      location: 'Americus, GA',
      service: 'Gift Shopping & Accessories',
      rating: 5,
      quote:
        'Such a chic vibe. The personal styling help was so genuine and patient. Plus their accessory selection is gorgeous—I bought earrings and a bag on the spot!',
      date: 'Sample review · 3 weeks ago',
    },
  ] as ReviewItem[],

  // FAQ Accordion
  faqs: [
    {
      id: 'faq-1',
      question: 'How do I book a salon appointment?',
      answer:
        'Booking is simple and personalized! Please call us directly at +1 229-938-7291. We will consult on your hair goals, match you with the right service time, and answer any pricing questions.',
    },
    {
      id: 'faq-2',
      question: 'What does the boutique carry?',
      answer:
        'Our boutique features a hand-selected collection of women’s apparel, seasonal dresses, casual-chic separates, footwear, statement jewelry, handbags, and unique gift items. Inventory updates frequently!',
    },
    {
      id: 'faq-3',
      question: 'Do you offer personal styling help?',
      answer:
        'Yes, absolutely! We love helping our guests curate complete looks, discover flattering fits, or coordinate outfits with their new hairstyle. Drop in or call +1 229-938-7291 for personalized recommendations.',
    },
    {
      id: 'faq-4',
      question: 'Where are you located in Americus?',
      answer:
        'We are conveniently located at 902 S MLK Jr Blvd, Americus, GA 31719 (Plus Code: 3QC8+XW Americus, Georgia). There is easy street-level parking right in front of the building.',
    },
    {
      id: 'faq-5',
      question: 'What are your hours and pricing?',
      answer:
        'Because our boutique inventory arrives regularly and salon services are customized per client length and texture, please call +1 229-938-7291 to confirm current weekly hours and pricing details.',
    },
  ] as FaqItem[],
};
