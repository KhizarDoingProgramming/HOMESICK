"use client";

const techLogos = [
  { name: "React", width: 90 },
  { name: "Next.js", width: 100 },
  { name: "TypeScript", width: 120 },
  { name: "Node.js", width: 100 },
  { name: "Python", width: 90 },
  { name: "PostgreSQL", width: 120 },
  { name: "MongoDB", width: 110 },
  { name: "AWS", width: 70 },
  { name: "Vercel", width: 80 },
  { name: "Stripe", width: 70 },
];

export default function Marquee() {
  return (
    <section className="relative pt-16 lg:pt-20 pb-12 bg-cream overflow-hidden">
      <div className="mb-6 text-center">
        <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-black/30">
          Technologies we work with
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-cream to-transparent z-10" />

        <div className="flex items-center gap-[56px] lg:gap-[100px] pr-[56px] lg:pr-[100px] opacity-[0.38] animate-marquee whitespace-nowrap">
          {[...techLogos, ...techLogos].map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className="shrink-0 text-text-dark text-lg lg:text-xl font-medium tracking-[-0.5px] cursor-default hover:opacity-70 transition-opacity"
              style={{ minWidth: logo.width }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
