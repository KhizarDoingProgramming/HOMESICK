"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projects = [
  { id: 1, title: "Luminary", titleItalic: "Studio", category: "E-commerce", year: "2026", color: "#2c180f", image: "/images/work/1.jpg" },
  { id: 2, title: "Synapse", titleItalic: "AI", category: "SaaS Platform", year: "2026", color: "#2a1a10", image: "/images/work/2.jpg" },
  { id: 3, title: "Orbital", titleItalic: "Ops", category: "Automation", year: "2025", color: "#281c14", image: "/images/work/3.jpg" },
  { id: 4, title: "Verdant", titleItalic: "Health", category: "Web Development", year: "2025", color: "#2c1f15", image: "/images/work/4.jpg" },
  { id: 5, title: "Forma", titleItalic: "Architects", category: "Web Design", year: "2025", color: "#261820", image: "/images/work/5.jpg" },
  { id: 6, title: "Nexus", titleItalic: "Labs", category: "AI Platform", year: "2025", color: "#1e2a1f", image: "/images/work/1.jpg" },
];

export default function WorkPage() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen bg-cream">
      
      <div className="relative pt-28 lg:pt-36 pb-12 lg:pb-20 overflow-hidden">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 400" fill="none">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={100 + (i * 70) % 1340}
              cy={50 + (i * 47) % 300}
              r={3 + (i % 4)}
              fill="#fe3d06"
              opacity={0.15 + (i % 3) * 0.1}
            />
          ))}
        </svg>

        <div className="relative w-full max-w-[1440px] mx-auto px-[28px] lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-medium tracking-[-0.03em] text-text-dark"
          >
            Selected{" "}
            <span className="font-serif italic">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-muted text-sm lg:text-base mt-8 max-w-md"
          >
            A selection of projects that moved businesses forward. Each one crafted with care, strategy and technology.
          </motion.p>
        </div>
      </div>

      
      <div className="w-full max-w-[1440px] mx-auto px-[28px] lg:px-8 pb-24 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link href="#" className="group block">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5" style={{ backgroundColor: project.color }}>
                  {!imgErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => setImgErrors(prev => ({ ...prev, [project.id]: true }))}
                    />
                  ) : (
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#fe3d06]/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#bfbef5]/40" />
                      </div>
                      <div className="font-serif italic text-white/15 text-3xl">{project.title}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="flex items-start justify-between mt-3">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-medium text-text-dark group-hover:text-[#fe3d06] transition-colors">
                      {project.title}{" "}
                      <span className="font-serif italic">{project.titleItalic}</span>
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted mt-1 block">{project.category}</span>
                  </div>
                  <span className="text-[11px] text-text-muted">{project.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
