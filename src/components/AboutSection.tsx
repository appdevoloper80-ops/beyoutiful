import { Sparkles, Heart, Users, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/siteConfig';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Curated Style',
      desc: 'Hand-selected apparel and gifts that celebrate individuality, body positivity, and effortless grace.',
      icon: <Sparkles className="w-5 h-5 text-[#C9A66B]" />,
    },
    {
      title: 'Expert Care',
      desc: 'Attentive, skilled hair stylists who listen to your vision and preserve the healthy glow of your hair.',
      icon: <Heart className="w-5 h-5 text-[#B4506A]" />,
    },
    {
      title: 'Welcoming Community',
      desc: 'A warm, uplifting sanctuary where women of all ages in Americus and Sumter County feel cherished.',
      icon: <Users className="w-5 h-5 text-[#C9A66B]" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Arch Collage with Champagne Offset Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Offset Gold Border Frame */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A66B]/60 rounded-[120px] pointer-events-none transform -rotate-1"
              />

              {/* Arch Image Card */}
              <div className="relative z-10 overflow-hidden shadow-blush-lg rounded-[110px] aspect-[4/5] bg-white border-2 border-[#FFF9F5]">
                <img
                  src={SITE_CONFIG.images.interior}
                  alt="Interior sanctuary of Beyoutiful Boutique and Salon in Americus, GA"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F2B]/50 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FFF9F5]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#C9A66B]/40 shadow-sm text-center">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#3A1F2B]">
                    Boutique + Salon · Americus, GA
                  </span>
                </div>
              </div>

              {/* Mini Accompanying Detail Card */}
              <div className="absolute -bottom-6 -right-6 z-20 w-36 h-36 rounded-2xl bg-[#F6D6D8] border-2 border-[#FFF9F5] shadow-lg p-3 flex flex-col justify-center text-center">
                <span className="font-serif-luxury text-2xl font-bold text-[#3A1F2B]">100%</span>
                <span className="text-[10px] uppercase font-semibold text-[#B4506A] tracking-wider mt-0.5">
                  Pampering Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy & Three Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
                Our Story
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3A1F2B] font-normal tracking-tight">
                More Than a Boutique.{' '}
                <br className="hidden sm:inline" />
                <span className="italic text-[#B4506A]">More Than a Salon.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#2A2025]/85 leading-relaxed font-normal">
              At Beyoutiful Boutique and Salon, our passion is simple: helping every woman who walks through our doors feel radiant, confident, and genuinely celebrated. Located right on S MLK Jr Blvd in Americus, we created an inviting haven where big-city fashion and salon elegance meet warm, hometown southern hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#2A2025]/75 leading-relaxed">
              Why spend your day running across town to multiple appointments? We believe your time is precious and your pampering should be seamless. Here, you can refresh your haircut or color, consult with our friendly personal stylists, and find an ensemble that turns heads—all in one uplifting stop.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#C9A66B]/30 shadow-xs space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F6D6D8]/40 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="font-serif-luxury text-xl font-medium text-[#3A1F2B]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#2A2025]/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-[#C9A66B] font-serif italic">
              *Sample story placeholder for client presentation. Client's founder biography and history can be inserted here.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
