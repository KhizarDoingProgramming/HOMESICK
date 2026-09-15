"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "Understand the business, audience and problem. We ask the right questions before writing a single line of code." },
  { number: "02", title: "Design", description: "Turn the problem into a clear digital experience. Interfaces, systems and interactions shaped with purpose." },
  { number: "03", title: "Build", description: "Develop the product using modern technologies. Performance, quality and reliability from the start." },
  { number: "04", title: "Automate", description: "Remove repetitive processes and connect systems. Let technology handle the manual work." },
  { number: "05", title: "Launch", description: "Ship, measure and improve. The launch is just the beginning of making things work better." },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section id="process" ref={containerRef} className="relative py-24 lg:py-36 bg-cream">
      <div className="container-center">
        <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.02em] mb-16 lg:mb-24 text-text-dark text-center lg:text-left">
          How we work
        </h2>

        <div className="relative max-w-4xl mx-auto">
          
          <div className="absolute left-[19px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-black/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#fe3d06]/30 origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      
      <div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 z-10">
        <div className="w-[18px] h-[18px] rounded-full bg-cream border-2 border-black/15 flex items-center justify-center">
          <motion.div
            animate={isInView ? { borderColor: "#fe3d06" } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full h-full rounded-full border-2 border-transparent"
          />
        </div>
      </div>

      
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 pl-[50px]">
        {isEven ? (
          <>
            <div className="text-right pr-16">
              <span className="text-black/30 text-[13px] tracking-wider font-bold uppercase block mb-2">{step.number}</span>
              <h3 className="text-xl lg:text-2xl font-medium text-text-dark tracking-[-0.01em] mb-2">
                <span className="font-serif italic">{step.title}</span>
              </h3>
              <p className="text-text-muted text-sm lg:text-base leading-relaxed ml-auto max-w-md">{step.description}</p>
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="text-left pl-16">
              <span className="text-black/30 text-[13px] tracking-wider font-bold uppercase block mb-2">{step.number}</span>
              <h3 className="text-xl lg:text-2xl font-medium text-text-dark tracking-[-0.01em] mb-2">
                <span className="font-serif italic">{step.title}</span>
              </h3>
              <p className="text-text-muted text-sm lg:text-base leading-relaxed max-w-md">{step.description}</p>
            </div>
          </>
        )}
      </div>

      
      <div className="lg:hidden pl-12">
        <span className="text-black/30 text-[13px] tracking-wider font-bold uppercase block mb-3">{step.number}</span>
        <h3 className="text-xl font-medium text-text-dark tracking-[-0.01em] mb-3">
          <span className="font-serif italic">{step.title}</span>
        </h3>
        <p className="text-text-muted text-[15px] leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}
