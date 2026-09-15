"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const dots = [
  { cx: 120, cy: 80, r: 6, delay: 0.2 },
  { cx: 280, cy: 140, r: 4, delay: 0.4 },
  { cx: 450, cy: 60, r: 5, delay: 0.6 },
  { cx: 620, cy: 180, r: 7, delay: 0.3 },
  { cx: 780, cy: 100, r: 4, delay: 0.5 },
  { cx: 950, cy: 160, r: 6, delay: 0.7 },
  { cx: 1100, cy: 70, r: 5, delay: 0.1 },
  { cx: 1250, cy: 130, r: 4, delay: 0.8 },
  { cx: 200, cy: 220, r: 3, delay: 0.9 },
  { cx: 500, cy: 250, r: 5, delay: 0.35 },
  { cx: 800, cy: 240, r: 4, delay: 0.55 },
  { cx: 1050, cy: 230, r: 6, delay: 0.15 },
  { cx: 350, cy: 300, r: 3, delay: 0.45 },
  { cx: 700, cy: 320, r: 5, delay: 0.65 },
  { cx: 1150, cy: 290, r: 4, delay: 0.25 },
];

const aboutPhotos = [
  { src: "/images/about/1.jpg", x: "5%", y: "15%", w: 220, h: 280, rotation: -8, delay: 0.3 },
  { src: "/images/about/2.jpg", x: "78%", y: "10%", w: 200, h: 260, rotation: 5, delay: 0.5 },
  { src: "/images/about/3.jpg", x: "85%", y: "55%", w: 180, h: 240, rotation: -12, delay: 0.7 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="about" ref={ref} className="relative bg-cream overflow-hidden">
      
      <div className="hidden lg:block relative w-full" style={{ aspectRatio: "1401 / 750" }}>
        
        <svg viewBox="0 0 1401 750" className="absolute inset-0 w-full h-full" fill="none">
          {dots.map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#fe3d06"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.8 } : {}}
              transition={{ duration: 0.5, delay: dot.delay, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
            />
          ))}
        </svg>

        
        {aboutPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: photo.rotation } : {}}
            transition={{ duration: 0.8, delay: photo.delay, ease: [0.22, 1, 0.36, 1] }}
            className="absolute rounded-lg overflow-hidden shadow-lg"
            style={{
              left: photo.x,
              top: photo.y,
              width: photo.w,
              height: photo.h,
              transform: `rotate(${photo.rotation}deg)`,
            }}
          >
            {!imgErrors[i] ? (
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
                onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
              />
            ) : (
              <div className="w-full h-full bg-[#E8E4DC] flex items-center justify-center">
                <div className="text-[#2c180f]/20 text-[10px] tracking-wider">HOMESICK</div>
              </div>
            )}
          </motion.div>
        ))}

        
        <div className="absolute" style={{ left: "18%", top: "32%", width: "58.67%" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[40px] leading-[65px] text-text-dark font-normal"
          >
            A multi-craft studio with one goal: being responsive to everyday{" "}
            <span className="font-serif font-bold italic">creative needs</span>. By merging{" "}
            <span className="font-serif font-bold italic">design</span>,{" "}
            <span className="font-serif font-bold italic">development</span>, and{" "}
            <span className="font-serif font-bold italic">automation</span>{" "}
            in every delivery, we prove that creativity plus technology are a powerful{" "}
            <span className="font-serif font-bold italic">problem solver</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-text-dark text-[14px] font-medium tracking-[0.02em] group"
            >
              <span className="relative">
                See our work
                <span className="absolute bottom-0 left-0 w-full h-px bg-text-dark/30 group-hover:bg-text-dark transition-all duration-300 origin-right group-hover:origin-left group-hover:scale-x-100 scale-x-0" />
              </span>
              <span className="text-text-dark/40 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      
      <div className="lg:hidden px-[28px] py-24">
        <div className="mb-8">
          <svg viewBox="0 0 300 150" className="w-full h-32" fill="none">
            {dots.slice(0, 8).map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx / 5}
                cy={dot.cy / 2.5}
                r={dot.r}
                fill="#fe3d06"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: dot.delay }}
                style={{ transformOrigin: `${dot.cx / 5}px ${dot.cy / 2.5}px` }}
              />
            ))}
          </svg>
        </div>

        
        <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
          {aboutPhotos.map((photo, i) => (
            <div
              key={i}
              className="shrink-0 w-40 h-52 rounded-lg overflow-hidden"
              style={{ transform: `rotate(${photo.rotation * 0.5}deg)` }}
            >
              {!imgErrors[i] ? (
                <img
                  src={photo.src}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
                />
              ) : (
                <div className="w-full h-full bg-[#E8E4DC] flex items-center justify-center">
                  <div className="text-[#2c180f]/20 text-[10px]">HOMESICK</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-[22px] leading-[1.35] text-text-dark font-normal">
          A multi-craft studio with one goal: being responsive to everyday{" "}
          <span className="font-serif font-bold italic">creative needs</span>. By merging{" "}
          <span className="font-serif font-bold italic">design</span>,{" "}
          <span className="font-serif font-bold italic">development</span>, and{" "}
          <span className="font-serif font-bold italic">automation</span>{" "}
          in every delivery, we prove that creativity plus technology are a powerful{" "}
          <span className="font-serif font-bold italic">problem solver</span>.
        </p>

        <a href="#work" className="inline-flex items-center gap-2 mt-16 text-text-dark text-[14px] font-medium">
          See our work <span className="text-text-dark/40">→</span>
        </a>
      </div>
    </section>
  );
}
