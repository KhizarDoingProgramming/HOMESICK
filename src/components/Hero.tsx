"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const collageItems = [
  {
    src: "/images/hero/1.jpg",
    width: 440, height: 540, x: "2%", y: "10%", delay: 0, rotation: -8,
    gradient: "from-[#c4956a] to-[#a87d55]",
    label: "Branding",
  },
  {
    src: "/images/hero/2.jpg",
    width: 400, height: 420, x: "30%", y: "6%", delay: 0.1, rotation: 4,
    gradient: "from-[#fe3d06] to-[#cc3205]",
    label: "Design",
  },
  {
    src: "/images/hero/3.jpg",
    width: 360, height: 400, x: "56%", y: "8%", delay: 0.15, rotation: -3,
    gradient: "from-[#bfbef5] to-[#9992cc]",
    label: "Digital",
  },
  {
    src: "/images/hero/4.jpg",
    width: 380, height: 500, x: "62%", y: "40%", delay: 0.25, rotation: 7,
    gradient: "from-[#2c180f] to-[#1a0e08]",
    label: "Development",
  },
  {
    src: "/images/hero/5.jpg",
    width: 420, height: 520, x: "8%", y: "46%", delay: 0.35, rotation: -6,
    gradient: "from-[#3a3a3c] to-[#2a2a2c]",
    label: "Automation",
  },
  {
    src: "/images/hero/6.jpg",
    width: 320, height: 440, x: "40%", y: "44%", delay: 0.4, rotation: 3,
    gradient: "from-[#e8dcc8] to-[#c4b8a0]",
    label: "Strategy",
  },
];

function CollageImage({ item, onError }: { item: typeof collageItems[0]; onError: () => void }) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl">
      <img
        src={item.src}
        alt=""
        className="w-full h-full object-cover"
        onError={onError}
      />
    </div>
  );
}

function CollageFallback({ item }: { item: typeof collageItems[0] }) {
  return (
    <div className={`w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br ${item.gradient} shadow-2xl`}>
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">HOMESICK</div>
        <div>
          <div className="font-serif italic text-white/80 text-3xl leading-tight mb-2">{item.label}</div>
          <div className="w-12 h-px bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-dark">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[clamp(4rem,15vw,14rem)] font-serif italic text-[#fe3d06]/[0.07] select-none whitespace-nowrap">
          homesick
        </span>
      </motion.div>

      
      <div className="hidden lg:block absolute inset-0 overflow-hidden" aria-hidden="true">
        {collageItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 + item.delay, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${i % 3 === 0 ? "animate-drift" : i % 3 === 1 ? "animate-drift-alt" : "animate-drift-slow"}`}
            style={{
              left: item.x,
              top: item.y,
              width: item.width,
              height: item.height,
              transform: `rotate(${item.rotation}deg)`,
              willChange: "transform",
              filter: "drop-shadow(-12px 30px 60px rgba(0, 0, 0, 0.7))",
            }}
          >
            {!imgErrors[i] ? (
              <CollageImage item={item} onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))} />
            ) : (
              <CollageFallback item={item} />
            )}
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden absolute inset-0 overflow-hidden opacity-15 pointer-events-none" aria-hidden="true">
        {[collageItems[1], collageItems[4], collageItems[2]].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
            className="absolute"
            style={{
              left: `${5 + i * 32}%`,
              top: `${15 + i * 18}%`,
              width: "clamp(120px, 28vw, 260px)",
              height: "clamp(160px, 36vw, 340px)",
              transform: `rotate(${item.rotation * 0.4}deg)`,
              filter: "drop-shadow(-8px 20px 40px rgba(0, 0, 0, 0.5))",
            }}
          >
            {!imgErrors[i + 10] ? (
              <CollageImage item={item} onError={() => setImgErrors(prev => ({ ...prev, [i + 10]: true }))} />
            ) : (
              <CollageFallback item={item} />
            )}
          </motion.div>
        ))}
      </div>

      
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full px-[28px] lg:hidden">
        <div className="text-center max-w-md mx-auto w-full">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-cream-light/50 text-[11px] tracking-[0.25em] uppercase block mb-10"
          >
            Creative Technology Studio
          </motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.2rem,10vw,3.5rem)] leading-[1.15] font-medium tracking-[-0.03em] text-cream-light"
            >
              We make the
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.2rem,10vw,3.5rem)] leading-[1.15] font-medium tracking-[-0.03em] text-cream-light"
            >
              digital side{" "}
              <span className="font-serif italic text-[#fe3d06]">feel right.</span>
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-[28px] pb-6 lg:hidden">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-5"
          >
            <a href="/contact" className="bg-cream-light text-dark font-medium flex items-center justify-center transition-transform hover:scale-105" style={{ height: '52px', padding: '0 36px', borderRadius: '9999px', fontSize: '15px' }}>
              Start a project
            </a>
            <a href="#work" className="text-cream-light/40 hover:text-cream-light transition-colors" style={{ fontSize: '14px', padding: '14px' }}>
              Explore our work
            </a>
          </motion.div>
        </div>
      </div>

      
      <div className="relative z-10 mt-auto pb-8 pt-4 px-[28px] lg:px-8">
        <div className="flex items-end justify-between max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block"
          >
            <div className="font-serif italic text-cream-light/40 text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
              creative
            </div>
            <div className="font-serif italic text-cream-light/60 text-[clamp(2rem,4.5vw,4rem)] leading-none ml-4">
              studio
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center flex-1 lg:mx-0"
          >
            <div className="text-cream-light/30 text-[12px] lg:text-[13px] uppercase tracking-[0.2em]">
              Design &middot; Development &middot; Automation
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="hidden lg:block text-right"
          >
            <div className="text-cream-light/40 text-[clamp(1rem,2vw,1.5rem)]">
              <span className="font-serif italic">and</span>
            </div>
            <div className="font-serif italic text-cream-light/60 text-[clamp(1.8rem,4vw,3.5rem)]">
              technology.
            </div>
          </motion.div>
        </div>
      </div>

      
      <div className="relative z-10 w-full border-t border-cream-light/10 py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {["Web Development", "AI Automation", "Digital Experiences", "Business Systems", "Product Design", "E-commerce", "SaaS Platforms", "API Integration", "Web Development", "AI Automation", "Digital Experiences", "Business Systems", "Product Design", "E-commerce", "SaaS Platforms", "API Integration"].map((word, i) => (
            <span key={i} className="inline-flex items-center mx-6 lg:mx-10">
              <span className="text-cream-light/25 text-[13px] lg:text-[14.45px] uppercase tracking-[0.15em]">{word}</span>
              <span className="text-[#fe3d06]/40 ml-6 lg:ml-10">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
