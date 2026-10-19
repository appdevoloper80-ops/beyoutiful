import { Scissors, Sparkles, Sun, HeartHandshake, Crown, Phone, Check } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function SalonSection() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#B4506A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C9A66B]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#B4506A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C9A66B]" />;
      case 'Crown':
      default:
        return <Crown className="w-6 h-6 text-[#B4506A]" />;
    }
  };

  return (
    <section id="salon" className="py-20 sm:py-28 bg-gradient-to-b from-[#F6D6D8]/30 via-[#FFF9F5] to-[#F6D6D8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B4506A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Salon Experience</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
            Your Hair, Your Glow
          </h2>
          <p className="text-base sm:text-lg text-[#2A2025]/80 font-normal leading-relaxed">
            From precision cuts and sun-kissed balayage to rich color transformations and restorative treatments, our talented stylists are dedicated to bringing out your signature beauty in Americus, GA.
          </p>
        </div>

        {/* 5 Service Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {SITE_CONFIG.salonServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-[#C9A66B]/30 shadow-blush hover:shadow-blush-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F6D6D8]/40 border border-[#C9A66B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#3A1F2B] font-medium group-hover:text-[#B4506A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A2025]/75 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2 border-t border-[#F6D6D8]">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#2A2025]/85">
                      <Check className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Book Action */}
              <div className="pt-6 mt-6 border-t border-[#F6D6D8]">
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#B4506A] text-[#B4506A] hover:bg-[#B4506A] hover:text-white transition-all flex items-center justify-center gap-2 shadow-xs"
                  aria-label={`Call to book ${service.title}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Book</span>
                </a>
              </div>
            </div>
          ))}

          {/* Special Custom Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-[#3A1F2B] to-[#2A2025] rounded-3xl p-7 text-white shadow-plum border border-[#C9A66B]/40 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A66B]/20 border border-[#C9A66B]/40 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#C9A66B]" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#FFF9F5] font-medium">
                Personalized Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF9F5]/80 leading-relaxed">
                Not sure which service suits your style best? We offer thorough consultations before every color or cut service to discuss your routine, face shape, and desired finish.
              </p>
              <div className="text-xs text-[#C9A66B] font-medium">
                ✦ Tailored advice for length, texture & maintenance
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#C9A66B]/30">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn-rose-gradient w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-blush"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Info Box: Call to Book & Pricing */}
        <div className="bg-[#FFF9F5] border-2 border-[#C9A66B]/50 rounded-3xl p-8 sm:p-10 shadow-blush mb-20 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6D6D8] text-xs font-semibold text-[#B4506A] uppercase tracking-wider">
            Booking & Custom Quotes
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#3A1F2B]">
            Appointments & Pricing: Call {SITE_CONFIG.displayPhone}
          </h3>
          <p className="text-sm text-[#2A2025]/80 max-w-xl mx-auto">
            Every guest's hair history, length, and goal is unique. We provide customized quotes and schedule dedicated appointments over the phone so we can give your hair the exact time and attention it deserves.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn-rose-gradient px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase inline-flex items-center justify-center gap-2.5 shadow-blush-lg"
              aria-label="Call +1 229-938-7291 for appointments and pricing"
            >
              <Phone className="w-4 h-4" />
              <span>Call +1 229-938-7291 Now</span>
            </a>
          </div>
        </div>

        {/* "How It Works" Mini Stepper */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C9A66B]/30 shadow-blush">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] mb-1">
              Simple & Stress-Free
            </p>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#3A1F2B]">
              How Your Salon Visit Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {SITE_CONFIG.howItWorksSteps.map((step, idx) => (
              <div key={idx} className="relative text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F6D6D8] border border-[#C9A66B]/40 flex items-center justify-center mx-auto text-xl font-serif font-bold text-[#B4506A] shadow-xs">
                  {step.step}
                </div>
                <h4 className="font-serif-luxury text-xl font-semibold text-[#3A1F2B]">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#2A2025]/75 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
