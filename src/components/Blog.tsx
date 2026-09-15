"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const posts = [
  {
    id: 1,
    title: "Why most websites don't convert",
    titleItalic: "convert",
    category: "Design",
    date: "2026",
    excerpt: "The gap between a beautiful site and one that actually drives business results.",
    image: "/images/blog/1.jpg",
  },
  {
    id: 2,
    title: "AI automation for small businesses",
    titleItalic: "businesses",
    category: "Automation",
    date: "2026",
    excerpt: "How intelligent workflows save hours of manual work every week.",
    image: "/images/blog/2.jpg",
  },
  {
    id: 3,
    title: "Building faster with modern tools",
    titleItalic: "tools",
    category: "Development",
    date: "2026",
    excerpt: "Our stack and process for shipping digital products in weeks, not months.",
    image: "/images/blog/3.jpg",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-cream">
      <div className="max-w-[1440px] mx-auto px-[28px] lg:px-8">
        <div className="flex items-end justify-between mb-12 lg:mb-20">
          <div>
            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-black/30 block mb-4">
              From the studio
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.02em] text-text-dark">
              Blog <span className="font-serif italic text-[#fe3d06]">Loop</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-text-muted text-sm font-medium hover:text-text-dark transition-colors duration-300 hidden lg:inline-flex items-center gap-1 group"
          >
            View all
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

        
        <div className="flex gap-6 mb-8">
          <button className="text-[13px] font-medium text-text-dark border-b-2 border-text-dark pb-1">Pinned</button>
          <button className="text-[13px] text-text-muted hover:text-text-dark transition-colors pb-1">Articles</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-dark rounded-xl mb-5 overflow-hidden relative">
                {!imgErrors[i] ? (
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
                  />
                ) : (
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#fe3d06]/40" />
                      <div className="w-2 h-2 rounded-full bg-[#bfbef5]/40" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                    <div>
                      <div className="h-1.5 bg-white/8 rounded-full w-2/3 mb-1.5" />
                      <div className="h-1.5 bg-white/5 rounded-full w-1/2" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#fe3d06]/0 group-hover:bg-[#fe3d06]/10 transition-colors duration-500" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">{post.category}</span>
                <div className="w-1 h-1 rounded-full bg-black/15" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">{post.date}</span>
              </div>

              <h3 className="text-lg lg:text-xl font-medium text-text-dark leading-snug mb-3 group-hover:text-[#fe3d06] transition-colors duration-300">
                {post.title.split(post.titleItalic).map((part, j) => (
                  <span key={j}>
                    {part}
                    {j === 0 && <span className="font-serif italic">{post.titleItalic}</span>}
                  </span>
                ))}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        <a
          href="#"
          className="lg:hidden inline-flex items-center gap-1 mt-8 text-text-muted text-sm font-medium hover:text-text-dark transition-colors"
        >
          View all posts <span>→</span>
        </a>
      </div>
    </section>
  );
}
