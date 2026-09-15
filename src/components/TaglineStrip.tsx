"use client";

interface TaglineStripProps {
  variant?: "dark" | "light";
}

export default function TaglineStrip({ variant = "dark" }: TaglineStripProps) {
  const isDark = variant === "dark";

  return (
    <div className={`relative py-7 overflow-hidden ${isDark ? "bg-dark" : "bg-cream"}`}>
      <div className="relative container-center flex items-center justify-center gap-4 md:gap-8">
        <span className="text-[12px] lg:text-[13px] uppercase tracking-[0.18em] whitespace-nowrap text-cream-light/50">
          HOMESICK
        </span>
        <div className="w-8 md:w-10 h-px bg-cream-light/15" />
        <span className="text-[12px] lg:text-[13px] uppercase tracking-[0.18em] whitespace-nowrap text-cream-light/50">
          Design &middot; Development &middot; Automation
        </span>
        <div className="w-8 md:w-10 h-px hidden sm:block bg-cream-light/15" />
        <span className="text-[12px] lg:text-[13px] uppercase tracking-[0.18em] whitespace-nowrap hidden sm:inline font-serif italic text-cream-light/50">
          [ from concept to everywhere ]
        </span>
        <div className="w-8 md:w-10 h-px hidden md:block bg-cream-light/15" />
        <span className="text-[12px] lg:text-[13px] uppercase tracking-[0.18em] whitespace-nowrap hidden md:inline text-cream-light/50">
          2026
        </span>
      </div>
    </div>
  );
}
