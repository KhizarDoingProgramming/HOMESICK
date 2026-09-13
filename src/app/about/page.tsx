"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  { cx: 150, cy: 350, r: 4, delay: 0.75 },
  { cx: 400, cy: 380, r: 6, delay: 0.3 },
  { cx: 900, cy: 360, r: 3, delay: 0.5 },
  { cx: 1200, cy: 340, r: 5, delay: 0.6 },
];

const aboutPhotos = [
  { src: "/images/about/1.jpg", left: "3%", top: "8%", w: 280, h: 360, rotation: -10, delay: 0.3 },
  { src: "/images/about/2.jpg", left: "72%", top: "5%", w: 240, h: 320, rotation: 6, delay: 0.5 },
  { src: "/images/about/3.jpg", left: "80%", top: "55%", w: 220, h: 300, rotation: -14, delay: 0.7 },
  { src: "/images/about/1.jpg", left: "5%", top: "60%", w: 200, h: 260, rotation: 8, delay: 0.4 },
];

export default function AboutPage() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen bg-cream">
      <div className="relative min-h-screen overflow-hidden" style={{ paddingTop: '11rem' }}>
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 800" fill="none">
          {dots.map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#fe3d06"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: dot.delay, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
            />
          ))}
        </svg>

        
        {aboutPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: photo.delay, ease: [0.22, 1, 0.36, 1] }}
            className="absolute rounded-xl overflow-hidden shadow-xl hidden lg:block"
            style={{
              left: photo.left,
              top: photo.top,
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
                <span className="text-[#2c180f]/15 text-[10px] tracking-wider">HOMESICK</span>
              </div>
            )}
          </motion.div>
        ))}

        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-[28px] lg:px-8 mt-[8rem]">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-medium tracking-[-0.03em] text-text-dark text-center"
          >
            who we{" "}
            <span className="font-serif italic text-[#fe3d06]">are</span>
          </motion.h1>
        </div>

        
        <div className="lg:hidden absolute inset-0 pointer-events-none">
          {aboutPhotos.slice(0, 3).map((photo, i) => (
            <div
              key={i}
              className="absolute rounded-lg overflow-hidden"
              style={{
                left: `${10 + i * 25}%`,
                top: `${15 + i * 20}%`,
                width: "30%",
                aspectRatio: "3/4",
                transform: `rotate(${photo.rotation * 0.5}deg)`,
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
                <div className="w-full h-full bg-[#E8E4DC]" />
              )}
            </div>
          ))}
        </div>
      </div>

      
      <div className="container-center py-24 lg:py-36">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(1.2rem,2.5vw,1.8rem)] leading-[1.4] text-text-dark font-normal"
          >
            A multi-craft studio with one goal: being responsive to everyday{" "}
            <span className="font-serif font-bold italic">creative needs</span>. By merging{" "}
            <span className="font-serif font-bold italic">design</span>,{" "}
            <span className="font-serif font-bold italic">development</span>, and{" "}
            <span className="font-serif font-bold italic">automation</span>{" "}
            in every delivery, we prove that creativity plus technology are a powerful{" "}
            <span className="font-serif font-bold italic">problem solver</span>.
          </motion.p>
        </div>
      </div>

      
      <div className="container-center pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Web", italic: "Development" },
            { num: "02", title: "AI", italic: "Automation" },
            { num: "03", title: "Business", italic: "Systems" },
            { num: "04", title: "Digital", italic: "Experiences" },
          ].map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-black/30 text-[11px] tracking-wider font-bold uppercase block mb-2">{service.num}</span>
              <h3 className="text-xl font-medium text-text-dark">
                {service.title} <span className="font-serif italic">{service.italic}</span>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
