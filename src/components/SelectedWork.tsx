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
];

export default function SelectedWork() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="work" className="relative bg-cream overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 600" fill="none">
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={80 + (i * 95) % 1360}
            cy={40 + (i * 37) % 520}
            r={4 + (i % 3) * 2}
            fill="#fe3d06"
            opacity={0.12 + (i % 4) * 0.05}
          />
        ))}
      </svg>

      <div className="relative container-center">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] font-medium tracking-[-0.03em] text-text-dark"
            >
              Selected{" "}
              <span className="font-serif italic">Work</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block max-w-xs"
          >
            <p className="text-text-muted text-sm leading-relaxed">
              A multi-craft studio with one goal: being responsive to everyday creative needs.
            </p>
          </motion.div>
        </div>

        
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-[28px] px-[28px] scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="shrink-0 w-[280px] lg:w-[340px]"
            >
              <Link href="/work" className="group block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5" style={{ backgroundColor: project.color }}>
                  {!imgErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => setImgErrors(prev => ({ ...prev, [project.id]: true }))}
                    />
                  ) : (
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#fe3d06]/40" />
                        <div className="w-2 h-2 rounded-full bg-[#bfbef5]/40" />
                      </div>
                      <div className="font-serif italic text-white/15 text-2xl">{project.title}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-base lg:text-lg font-medium text-text-dark group-hover:text-[#fe3d06] transition-colors">
                    {project.title}{" "}
                    <span className="font-serif italic">{project.titleItalic}</span>
                  </h3>
                  <span className="text-[10px] text-text-muted">{project.year}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted mt-0.5 block">{project.category}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
