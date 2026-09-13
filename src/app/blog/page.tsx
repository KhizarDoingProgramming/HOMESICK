"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Why most websites don't convert",
    titleItalic: "convert",
    category: "Design",
    date: "12 Aug",
    author: "By Studio Loop",
    excerpt: "The gap between a beautiful site and one that actually drives business results.",
    image: "/images/blog/1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "AI automation for small businesses",
    titleItalic: "businesses",
    category: "Automation",
    date: "10 Aug",
    author: "By Studio Loop",
    excerpt: "How intelligent workflows save hours of manual work every week.",
    image: "/images/blog/2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Building faster with modern tools",
    titleItalic: "tools",
    category: "Development",
    date: "08 Aug",
    author: "By Studio Loop",
    excerpt: "Our stack and process for shipping digital products in weeks, not months.",
    image: "/images/blog/3.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "The process behind great design",
    titleItalic: "design",
    category: "Design",
    date: "05 Aug",
    author: "By Studio Loop",
    excerpt: "How we approach every project with intention and craft.",
    image: "/images/blog/1.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Why TypeScript changes everything",
    titleItalic: "everything",
    category: "Development",
    date: "01 Aug",
    author: "By Studio Loop",
    excerpt: "Type safety isn't just about catching errors — it's about building with confidence.",
    image: "/images/blog/2.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "From concept to launch in 6 weeks",
    titleItalic: "weeks",
    category: "Process",
    date: "28 Jul",
    author: "By Studio Loop",
    excerpt: "A real timeline of how we shipped a complete digital product.",
    image: "/images/blog/3.jpg",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<"pinned" | "articles">("pinned");
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filteredPosts = activeTab === "pinned"
    ? posts.filter((p) => p.featured)
    : posts;

  return (
    <div className="min-h-screen bg-dark">
      <div className="relative bg-dark overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 400" fill="none">
          <path d="M0,200 Q360,100 720,200 Q1080,300 1440,200" stroke="#fe3d06" strokeWidth="1" fill="none" />
          <path d="M0,220 Q360,120 720,220 Q1080,320 1440,220" stroke="#fe3d06" strokeWidth="1" fill="none" />
          <path d="M0,240 Q360,140 720,240 Q1080,340 1440,240" stroke="#fe3d06" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,8vw,6rem)] leading-[1] font-medium tracking-[-0.03em] text-cream-light"
          >
            Blog <span className="font-serif italic text-[#fe3d06]">stuff</span>
          </motion.h1>
        </div>
      </div>

      
      <div className="bg-cream" style={{ paddingBottom: '8rem' }}>
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '5rem 32px' }}>
          
          <div className="flex gap-6 mb-10">
            <button
              onClick={() => setActiveTab("pinned")}
              className={`text-[13px] font-medium pb-1 transition-colors ${
                activeTab === "pinned"
                  ? "text-text-dark border-b-2 border-text-dark"
                  : "text-text-muted hover:text-text-dark"
              }`}
            >
              Pinned
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`text-[13px] font-medium pb-1 transition-colors ${
                activeTab === "articles"
                  ? "text-text-dark border-b-2 border-text-dark"
                  : "text-text-muted hover:text-text-dark"
              }`}
            >
              Articles
            </button>
          </div>

          
          {activeTab === "pinned" && filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link href="#" className="group block">
                <div className="relative aspect-[21/9] lg:aspect-[3/1] rounded-2xl overflow-hidden bg-dark mb-6">
                  {!imgErrors[filteredPosts[0].id] ? (
                    <img
                      src={filteredPosts[0].image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={() => setImgErrors(prev => ({ ...prev, [filteredPosts[0].id]: true }))}
                    />
                  ) : (
                    <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-br from-[#2c180f] to-[#1a0e08]">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#fe3d06]/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#bfbef5]/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                      </div>
                      <div className="font-serif italic text-white/20 text-4xl">HOMESICK</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{filteredPosts[0].category}</span>
                  <div className="w-1 h-1 rounded-full bg-text-muted/30" />
                  <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{filteredPosts[0].date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-medium text-text-dark leading-snug group-hover:text-[#fe3d06] transition-colors">
                  {filteredPosts[0].title.split(filteredPosts[0].titleItalic).map((part, j) => (
                    <span key={j}>
                      {part}
                      {j === 0 && <span className="font-serif italic">{filteredPosts[0].titleItalic}</span>}
                    </span>
                  ))}
                </h2>
              </Link>
            </motion.div>
          )}

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {(activeTab === "pinned" ? filteredPosts.slice(1) : filteredPosts).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group cursor-pointer"
              >
                <Link href="#">
                  <div className="aspect-[16/10] bg-dark rounded-xl mb-5 overflow-hidden relative">
                    {!imgErrors[post.id] ? (
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={() => setImgErrors(prev => ({ ...prev, [post.id]: true }))}
                      />
                    ) : (
                      <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-[#2c180f] to-[#1a0e08]">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#fe3d06]/40" />
                          <div className="w-2 h-2 rounded-full bg-[#bfbef5]/40" />
                        </div>
                        <div className="font-serif italic text-white/10 text-lg">HOMESICK</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{post.category}</span>
                    <div className="w-1 h-1 rounded-full bg-text-muted/30" />
                    <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{post.date}</span>
                  </div>

                  <h3 className="text-lg font-medium text-text-dark leading-snug mb-2 group-hover:text-[#fe3d06] transition-colors">
                    {post.title.split(post.titleItalic).map((part, j) => (
                      <span key={j}>
                        {part}
                        {j === 0 && <span className="font-serif italic">{post.titleItalic}</span>}
                      </span>
                    ))}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
