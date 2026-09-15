"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-dark flex items-start"
          >
            
              <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-[28px] lg:hidden text-cream-light p-2"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            <div className="flex flex-col gap-8 px-[28px] pt-24 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-[clamp(2rem,8vw,4rem)] tracking-[-0.02em] text-cream-light/70 hover:text-cream-light transition-opacity duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-[100] mix-blend-difference pointer-events-none pt-4 pb-4">
        <nav className="container-center h-12 lg:h-16 flex items-center justify-between">
          
          <Link href="/" className="pointer-events-auto shrink-0 transition-opacity hover:opacity-70 flex items-center h-full py-2">
            <img 
              src="/logo.png" 
              alt="HOMESICK" 
              className="h-12 lg:h-16 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          
          <div className="hidden lg:flex items-center gap-8 pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          
          <div className="hidden lg:block pointer-events-auto shrink-0">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center text-dark-alt transition-transform hover:scale-105 whitespace-nowrap group"
              style={{ height: '56px', padding: '0 32px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              
              <svg className="absolute inset-0 w-full h-full text-cream-light pointer-events-none -z-10 group-hover:text-white transition-colors" preserveAspectRatio="none" viewBox="0 0 200 60">
                <path fill="currentColor" d="M10,30 C15,12 40,8 80,15 C130,22 170,10 185,25 C200,40 160,55 120,50 C70,45 5,50 10,30 Z" />
                
                <circle cx="15" cy="15" r="2.5" fill="currentColor" />
                <circle cx="185" cy="45" r="3" fill="currentColor" />
                <circle cx="100" cy="5" r="1.5" fill="currentColor" />
                <circle cx="160" cy="55" r="2" fill="currentColor" />
                <circle cx="30" cy="48" r="2" fill="currentColor" />
                <circle cx="175" cy="12" r="1.5" fill="currentColor" />
                <path fill="currentColor" d="M190,30 Q195,35 192,40 Q188,35 190,30" />
                <path fill="currentColor" d="M12,40 Q8,45 10,48 Q15,45 12,40" />
              </svg>
              <span className="relative z-10">Start a project</span>
            </Link>
          </div>

          
          {!mobileOpen && (
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 pointer-events-auto"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          )}
        </nav>
      </header>
    </>
  );
}
