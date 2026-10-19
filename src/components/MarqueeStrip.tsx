export default function MarqueeStrip() {
  const marqueeItems = [
    'Dresses',
    'Footwear',
    'Accessories',
    'Gifts',
    'Hair Color',
    'Cuts & Styling',
    'Highlights',
    'Treatments',
    'Personal Styling',
    'Balayage Glow',
  ];

  return (
    <div className="bg-[#F6D6D8] border-y border-[#C9A66B]/30 py-3.5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {/* Render repeated items for infinite smooth marquee */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 text-[#3A1F2B]">
            <span className="font-serif-luxury text-lg tracking-wide font-medium">
              {item}
            </span>
            <span className="text-[#C9A66B] text-xs" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
