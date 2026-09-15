"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const projects = [
  { id: 1, title: "Luminary", titleItalic: "Studio", category: "E-commerce", color: "#2c180f", image: "/images/work/1.jpg" },
  { id: 2, title: "Synapse", titleItalic: "AI", category: "SaaS Platform", color: "#2a1a10", image: "/images/work/2.jpg" },
  { id: 3, title: "Orbital", titleItalic: "Ops", category: "Automation", color: "#281c14", image: "/images/work/3.jpg" },
  { id: 4, title: "Verdant", titleItalic: "Health", category: "Web Development", color: "#2c1f15", image: "/images/work/4.jpg" },
  { id: 5, title: "Forma", titleItalic: "Architects", category: "Web Design", color: "#261820", image: "/images/work/5.jpg" },
];

function ProjectVisual({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  const patterns = [
    <div key="d" className="p-6 lg:p-8 flex flex-col justify-between h-full">
      <div>
        <div className="flex gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#fe3d06]/50" />
          <div className="w-2 h-2 rounded-full bg-[#bfbef5]/50" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
        </div>
        <div className="text-lg font-medium text-white/70 mb-2">Dashboard</div>
        <div className="h-1 bg-white/10 rounded-full w-1/3" />
      </div>
      <div className="flex gap-1.5 items-end h-16">
        {[35, 55, 42, 70, 48, 65, 82, 58, 72, 45, 68, 52].map((h, idx) => (
          <div key={idx} className="flex-1 bg-[#fe3d06]/20 rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>,
    <div key="m" className="p-6 lg:p-8 flex items-center justify-center h-full">
      <div className="w-32 lg:w-40 h-56 lg:h-72 bg-black/30 border border-white/10 rounded-2xl p-3">
        <div className="h-3 bg-white/10 rounded-full w-1/2 mb-3" />
        <div className="space-y-2">
          <div className="h-14 bg-[#fe3d06]/8 rounded-lg" />
          <div className="h-1.5 bg-white/10 rounded-full w-full" />
          <div className="h-1.5 bg-white/6 rounded-full w-3/4" />
        </div>
      </div>
    </div>,
    <div key="a" className="p-6 lg:p-8 flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        {["Lead", "Process", "Action", "Done"].map((step) => (
          <div key={step} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#fe3d06]/60" />
            <span className="text-[10px] text-white/40 uppercase tracking-wider">{step}</span>
          </div>
        ))}
      </div>
    </div>,
    <div key="c" className="p-6 lg:p-8 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-white/40 mb-1">Revenue</div>
          <div className="text-2xl font-medium text-white/70">$2.4M</div>
        </div>
        <div className="text-xs text-[#fe3d06]/60 bg-[#fe3d06]/10 px-2 py-1 rounded">+34%</div>
      </div>
      <svg viewBox="0 0 200 80" className="w-full h-16 mt-4">
        <polyline fill="none" stroke="currentColor" className="text-[#fe3d06]/30" strokeWidth="2" points="0,70 30,55 60,60 90,35 120,42 150,20 180,28 200,15" />
      </svg>
    </div>,
    <div key="g" className="p-6 lg:p-8 flex items-center justify-center h-full">
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`aspect-square rounded-lg border border-white/10 ${i === 4 ? "bg-[#fe3d06]/15" : "bg-white/5"}`} />
        ))}
      </div>
    </div>,
  ];

  return (
    <div className="w-full h-full relative" style={{ backgroundColor: project.color }}>
      {!imgError ? (
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        patterns[index % patterns.length]
      )}
    </div>
  );
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 70}%`]);

  return (
    <section id="work" ref={sectionRef} className="relative bg-cream">
      <div className="max-w-[1440px] mx-auto px-[28px] lg:px-8 pt-16 lg:pt-24 pb-12">
        <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.02em] mb-4 text-text-dark">
          Selected work
        </h2>
        <p className="text-text-muted text-sm lg:text-base mb-12 max-w-md">
          A selection of projects that moved businesses forward.
        </p>
      </div>

      
      <div ref={containerRef} className="hidden lg:block h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-[56px] pl-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="w-[70vw] shrink-0"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10 group cursor-pointer">
                  <ProjectVisual project={project} index={i} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] block mb-1">{project.category}</span>
                        <h3 className="text-lg font-medium text-white">
                          {project.title}{" "}
                          <span className="font-serif italic">{project.titleItalic}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      
      <div className="lg:hidden px-[28px] pb-24 space-y-6">
        {projects.map((project, i) => (
          <div key={project.id} className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10">
            <ProjectVisual project={project} index={i} />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <span className="text-[9px] text-white/40 uppercase tracking-[0.15em] block mb-1">{project.category}</span>
              <h3 className="text-base font-medium text-white">
                {project.title}{" "}
                <span className="font-serif italic">{project.titleItalic}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
