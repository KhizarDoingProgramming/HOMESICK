"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        
        <svg className="absolute right-[10%] top-[20%] w-48 h-48 opacity-15 pointer-events-none hidden lg:block" viewBox="0 0 200 200" fill="none">
          <path d="M40,160 Q60,40 100,100 Q140,160 160,60 Q180,100 140,140" stroke="#2c180f" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="80" cy="120" r="8" fill="#fe3d06" opacity="0.3"/>
        </svg>

        <div className="relative" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-medium tracking-[-0.03em] text-text-dark"
          >
            Start a{" "}
            <span className="font-serif italic text-[#fe3d06]">project</span>
          </motion.h1>
        </div>
      </div>

      
      <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 32px', paddingBottom: '8rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-muted text-base lg:text-lg leading-relaxed mb-12 max-w-md"
            >
              Have a project in mind? We&apos;d love to hear about it. Drop us a line and
              we&apos;ll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <a href="mailto:gmkhizar9@gmail.com" className="flex items-center gap-4 text-text-dark hover:text-[#fe3d06] transition-colors group">
                <Mail size={20} className="text-text-muted group-hover:text-[#fe3d06] transition-colors" />
                <span className="text-lg">gmkhizar9@gmail.com</span>
              </a>
              <a href="tel:+923209609931" className="flex items-center gap-4 text-text-dark hover:text-[#fe3d06] transition-colors group">
                <Phone size={20} className="text-text-muted group-hover:text-[#fe3d06] transition-colors" />
                <span className="text-lg">+92 320 9609931</span>
              </a>
            </motion.div>
          </div>

          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="text-[12px] font-medium uppercase tracking-wider text-text-muted block" style={{ marginBottom: '12px' }}>First name</label>
                <input
                  type="text"
                  className="w-full border border-black/10 rounded-xl text-text-dark bg-white/50 focus:bg-white focus:outline-none focus:border-[#fe3d06] focus:ring-1 focus:ring-[#fe3d06] transition-all placeholder:text-text-muted/40"
                  placeholder="First name"
                  style={{ padding: '16px 18px' }}
                />
              </div>
              <div>
                <label className="text-[12px] font-medium uppercase tracking-wider text-text-muted block" style={{ marginBottom: '12px' }}>Last name</label>
                <input
                  type="text"
                  className="w-full border border-black/10 rounded-xl text-text-dark bg-white/50 focus:bg-white focus:outline-none focus:border-[#fe3d06] focus:ring-1 focus:ring-[#fe3d06] transition-all placeholder:text-text-muted/40"
                  placeholder="Last name"
                  style={{ padding: '16px 18px' }}
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] font-medium uppercase tracking-wider text-text-muted block" style={{ marginBottom: '12px' }}>Email</label>
              <input
                  type="email"
                  className="w-full border border-black/10 rounded-xl text-text-dark bg-white/50 focus:bg-white focus:outline-none focus:border-[#fe3d06] focus:ring-1 focus:ring-[#fe3d06] transition-all placeholder:text-text-muted/40"
                  placeholder="your@email.com"
                  style={{ padding: '16px 18px' }}
                />
            </div>

            <div>
              <label className="text-[12px] font-medium uppercase tracking-wider text-text-muted block" style={{ marginBottom: '12px' }}>Tell us about your project</label>
              <textarea
                rows={4}
                className="w-full border border-black/10 rounded-xl text-text-dark bg-white/50 focus:bg-white focus:outline-none focus:border-[#fe3d06] focus:ring-1 focus:ring-[#fe3d06] transition-all placeholder:text-text-muted/40 resize-none"
                placeholder="What are you building?"
                style={{ padding: '16px 18px' }}
                />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-3 bg-dark text-cream-light rounded-full text-[15px] font-medium tracking-wide hover:bg-[#fe3d06] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#fe3d06]/20 transition-all duration-300 group"
              style={{ height: '56px', padding: '0 32px' }}
            >
              Send message
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
