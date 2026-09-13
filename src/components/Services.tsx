"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Web",
    titleItalic: "Development",
    color: "#bfbef5",
    desc: "From immersive marketing sites to complex web applications. We build digital spaces that captivate and convert.",
  },
  {
    number: "02",
    title: "AI",
    titleItalic: "Automation",
    color: "#fe3d06",
    desc: "Intelligent workflows that save hours of manual work every week. We turn repetitive tasks into automated systems.",
  },
  {
    number: "03",
    title: "Business",
    titleItalic: " Systems",
    color: "#2c180f",
    desc: "Custom-built internal tools and infrastructure designed to scale with your operations and streamline your business.",
  },
  {
    number: "04",
    title: "Digital",
    titleItalic: "Experiences",
    color: "#bfbef5",
    desc: "Interactive, 3D, and highly motion-driven web experiences that leave a lasting impression on your audience.",
  },
];

const dots = [
  { left: "15%", top: "20%", delay: 0.1, color: "#c7c6ff" },
  { left: "25%", top: "65%", delay: 0.2, color: "#fe3d06" },
  { left: "35%", top: "30%", delay: 0.3, color: "#2c180f" },
  { left: "55%", top: "75%", delay: 0.4, color: "#c7c6ff" },
  { left: "75%", top: "25%", delay: 0.5, color: "#fe3d06" },
  { left: "85%", top: "60%", delay: 0.6, color: "#2c180f" },
];

export default function Services() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative w-full bg-[#eeebe3] overflow-hidden">
      
      <div ref={heroRef} className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex flex-col items-center justify-center pb-16 lg:pb-24" style={{ paddingTop: '10rem' }}>
        
        
        <div className="absolute inset-0 pointer-events-none">
          {dots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full w-4 h-4 lg:w-6 lg:h-6"
              style={{
                left: dot.left,
                top: dot.top,
                backgroundColor: dot.color,
                opacity: 0.6,
              }}
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: dot.delay, type: "spring", bounce: 0.4 }}
            />
          ))}
        </div>

        
        <div className="relative z-10 text-center w-full px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.5rem,15vw,13rem)] leading-[0.84] tracking-[-0.03em] font-medium text-[#2c180f] whitespace-nowrap"
          >
            Servic<span className="font-serif italic">e</span>s
          </motion.h2>
        </div>

        
        <div className="relative z-10 mt-16 lg:mt-24 w-full max-w-7xl mx-auto px-6 lg:px-8 flex justify-end">
          <div className="w-full lg:max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[13px] lg:text-[15px] font-medium tracking-[0.1em] uppercase text-[#2c180f]/55 mb-4"
            >
              [ What we do ]
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[16px] lg:text-[18px] font-light leading-[1.4] text-[#2c180f]/75"
            >
              A multi-craft studio with one goal: being responsive to everyday creative needs. By merging development, design, and automation, we build powerful digital systems.
            </motion.p>
          </div>
        </div>
      </div>

      
      <div ref={gridRef} className="relative w-full bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10">
          
          
          <div className="lg:col-span-4">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="font-sans leading-[0.84] tracking-[-0.02em] text-[#2c180f] text-[clamp(2rem,4vw,3.5rem)] sticky top-32"
            >
              Expertise
            </motion.h3>
          </div>

          
          <div className="lg:col-span-8 lg:col-start-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group relative rounded-2xl bg-white/40 border border-[#2c180f]/10 hover:bg-white hover:border-[#fe3d06] transition-all duration-500 overflow-hidden"
                style={{ padding: '2.5rem' }}
              >
                
                <div className="absolute inset-0 bg-[#fe3d06]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between" style={{ marginBottom: '4rem' }}>
                    <span className="text-[12px] font-bold tracking-widest text-[#2c180f]/30 group-hover:text-[#fe3d06] transition-colors duration-300">
                      ({service.number})
                    </span>
                    <div
                      className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="text-[24px] lg:text-[28px] font-medium leading-tight text-[#2c180f] mb-3 group-hover:text-[#fe3d06] transition-colors duration-300">
                      {service.title} <span className="font-serif italic">{service.titleItalic}</span>
                    </h4>
                    <p className="text-[14px] leading-relaxed text-[#2c180f]/60 group-hover:text-[#2c180f]/80 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
