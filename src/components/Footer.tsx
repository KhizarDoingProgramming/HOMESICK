"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const scatteredPhotos = [
  { left: "-5%", yOffset: 120, rotation: -25, delay: 0.1, color: "#2c180f" },
  { left: "15%", yOffset: 60, rotation: -12, delay: 0.2, color: "#f3f053" }, 
  { left: "35%", yOffset: 0, rotation: 0, delay: 0.3, color: "#4a3020" },
  { left: "55%", yOffset: 30, rotation: 12, delay: 0.4, color: "#f5f3ee" }, 
  { left: "75%", yOffset: 90, rotation: 25, delay: 0.5, color: "#63544b" },
];

const photoSrcs = ["/images/footer/1.jpg", "", "/images/footer/3.jpg", "", "/images/footer/5.jpg"];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="relative bg-[#251811] overflow-hidden pt-12 pb-10 min-h-[90vh] flex flex-col justify-between">
      
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03] select-none z-0">
        <h2 className="text-[clamp(10rem,30vw,25rem)] font-bold text-white whitespace-nowrap leading-none tracking-tighter">
          HOMESICK
        </h2>
      </div>

      
      <div className="w-full px-[28px] lg:px-8 z-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-4 mb-4 gap-4">
          <div className="text-[#a48873] uppercase tracking-widest text-[11px] lg:text-[13px] flex items-center gap-4">
            <span>HOMESICK</span>
            <span className="font-serif italic text-[#c3a48e] text-[15px] lg:text-[17px]">/ stories. systems.internet</span>
          </div>
          <div className="text-[#c3a48e] uppercase tracking-widest text-[11px] lg:text-[13px]">
            [ from concept to everywhere ]
          </div>
          <div className="text-[#a48873] text-[11px] lg:text-[13px]">
            2026
          </div>
        </div>
      </div>

      
      <div className="relative w-full flex-grow flex items-center justify-center my-10 min-h-[500px] lg:min-h-[600px] z-10">
        <div className="relative w-full max-w-[1400px] h-[400px] lg:h-[550px]">
          {scatteredPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: photo.yOffset + 100, rotate: 0 }}
              animate={isInView ? { opacity: 1, scale: 1, y: photo.yOffset, rotate: photo.rotation } : {}}
              whileHover={{ 
                scale: 1.08, 
                y: photo.yOffset - 30, 
                rotate: photo.rotation === 0 ? 0 : photo.rotation > 0 ? photo.rotation + 5 : photo.rotation - 5,
                zIndex: 50 
              }}
              transition={{ 
                duration: 0.9, 
                delay: isInView ? photo.delay : 0, 
                ease: [0.22, 1, 0.36, 1],
                scale: { duration: 0.3 },
                y: { duration: 0.3 },
                rotate: { duration: 0.3 }
              }}
              className="absolute top-0 w-[240px] lg:w-[360px] xl:w-[420px] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
              style={{
                left: photo.left,
                aspectRatio: "3/4",
                backgroundColor: photo.color,
                boxShadow: "-15px 30px 60px rgba(0,0,0,0.6)",
                transformOrigin: "bottom center",
              }}
            >
              
              {photoSrcs[i] ? (
                <PhotoImg src={photoSrcs[i]} alt="" />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 text-center text-black/80 font-serif italic text-2xl lg:text-3xl leading-snug">
                  {i === 1 ? "Oh, I just had a homesick loop." : "stories. systems. internet."}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="w-full px-[28px] lg:px-8 flex justify-end z-20">
        <div className="flex gap-8 text-[#a48873] text-[11px] lg:text-[13px] uppercase tracking-wider">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

function PhotoImg({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      onError={() => setError(true)}
    />
  );
}
