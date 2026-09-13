"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative bg-cream overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="container-center">
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "clamp(2.5rem, 3.5vw, 3.5rem)", overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2rem, 6vw, 6.375rem)", lineHeight: 1, fontWeight: 500, letterSpacing: "-0.025em", color: "#2c180f" }}
            >
              Let&apos;s{" "}
              <span className="font-serif italic" style={{ position: "relative", display: "inline-block" }}>
                make
                <span style={{ position: "absolute", left: 0, right: 0, bottom: "clamp(3px, 0.9vw, 16px)", height: "max(2px, 0.06em)", backgroundColor: "#2c180f", transformOrigin: "left" }} />
              </span>{" "}
              something
            </motion.h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2rem, 6vw, 6.375rem)", lineHeight: 1, fontWeight: 500, letterSpacing: "-0.025em", color: "#2c180f" }}
            >
              worth{" "}
              <span className="font-serif italic" style={{ position: "relative", display: "inline-block" }}>
                coming back to.
                <span style={{ position: "absolute", left: 0, right: 0, bottom: "clamp(3px, 0.9vw, 16px)", height: "max(2px, 0.06em)", backgroundColor: "#fe3d06", transformOrigin: "left" }} />
              </span>
            </motion.h2>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center", marginTop: "clamp(2rem, 3vw, 4rem)", marginBottom: "clamp(2rem, 3vw, 4rem)" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-dark text-cream-light rounded-full text-[17px] font-medium tracking-[-0.3px] hover:bg-[#fe3d06] transition-all duration-300 group"
            style={{ padding: '1.25rem 2.5rem' }}
          >
            Your next project starts{" "}
            <span className="font-serif italic underline decoration-solid underline-offset-4">here</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ maxWidth: 768, marginLeft: "auto", marginRight: "auto", backgroundColor: "#2c180f", borderRadius: 16, padding: "clamp(1.5rem, 2vw, 2rem)" }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="text-cream-light text-lg lg:text-xl font-medium mb-1">
              Get the best of HOMESICK delivered to your inbox.
            </h3>
            <p className="text-cream-light/40 text-sm">Insights on design, development and automation.</p>
          </div>
          <div 
            className="relative flex items-center w-full lg:w-[460px] bg-white/5 border border-cream-light/10 rounded-full transition-all focus-within:bg-white/10 focus-within:border-cream-light/20"
            style={{ height: '64px', padding: '6px' }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent text-cream-light h-full focus:outline-none min-w-0"
              style={{ padding: '0 24px', fontSize: '15px' }}
            />
            <button 
              className="h-full bg-[#fe3d06] text-white rounded-full hover:bg-[#e03605] hover:shadow-lg transition-all duration-300 shrink-0 flex items-center justify-center"
              style={{ padding: '0 32px', fontSize: '15px', fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
