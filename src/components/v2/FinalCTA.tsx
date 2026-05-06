"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Button } from "./Primitives";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <SectionWrapper className="bg-white">
      <div className="relative p-12 md:p-24 rounded-[4rem] bg-neutral-900 text-white overflow-hidden text-center shadow-2xl">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight"
          >
            Shape Your Child’s <br />
            <span className="text-primary italic">Future With Confidence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-400 mb-16 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Combine modern education with future-ready systems in a nurturing environment designed for excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" className="w-full sm:w-auto h-20 px-14 text-xl font-black group rounded-3xl shadow-2xl shadow-primary/30">
              Apply for 2026-27
              <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-20 px-14 text-xl font-black border-white/10 hover:bg-white hover:text-neutral-900 group rounded-3xl">
              <Calendar className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
              Book Campus Visit
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-sm font-bold text-neutral-600 uppercase tracking-[0.3em]"
          >
            Admissions closing soon for the current intake
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
