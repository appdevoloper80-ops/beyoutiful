/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AnnouncementBar from '@/src/components/AnnouncementBar';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import MarqueeStrip from '@/src/components/MarqueeStrip';
import TwoWorldsSection from '@/src/components/TwoWorldsSection';
import BoutiqueSection from '@/src/components/BoutiqueSection';
import SalonSection from '@/src/components/SalonSection';
import TransformationGallery from '@/src/components/TransformationGallery';
import AboutSection from '@/src/components/AboutSection';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import ReviewsSection from '@/src/components/ReviewsSection';
import GiftAndNewsletter from '@/src/components/GiftAndNewsletter';
import FaqSection from '@/src/components/FaqSection';
import LocationAndContact from '@/src/components/LocationAndContact';
import Footer from '@/src/components/Footer';
import ConciergeChat from '@/src/components/ConciergeChat';
import FloatingActions from '@/src/components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#2A2025] selection:bg-[#F6D6D8] selection:text-[#3A1F2B]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Slow-Scrolling Marquee Band */}
        <MarqueeStrip />

        {/* Two Worlds: Boutique & Salon Split */}
        <TwoWorldsSection />

        {/* The Boutique (Light Section with 6 categories & New Arrivals slider) */}
        <BoutiqueSection />

        {/* The Salon (Blush Section with Service Cards & How it Works stepper) */}
        <SalonSection />

        {/* Transformation Gallery with Interactive Before/After Slider & Lightbox */}
        <TransformationGallery />

        {/* About / Our Story (Two-column cream with arch collage) */}
        <AboutSection />

        {/* Why Choose Us (Plum Section with 4 champagne icon cards) */}
        <WhyChooseUs />

        {/* Customer Reviews */}
        <ReviewsSection />

        {/* Gift Spotlight & Newsletter Signup */}
        <GiftAndNewsletter />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Location, Hours, Google Map & Inquiry Form */}
        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Concierge Chat Widget */}
      <ConciergeChat />

      {/* Floating Elements (Mobile bar + Back to Top) */}
      <FloatingActions />
    </div>
  );
}
