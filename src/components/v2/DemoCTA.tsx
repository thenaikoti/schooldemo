"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Button } from "./Primitives";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function DemoCTA() {
  return (
    <SectionWrapper className="relative">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 p-12 md:p-24 rounded-[4rem] bg-neutral-950 text-white overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-6 py-2 text-sm font-black text-primary mb-12 backdrop-blur-xl uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4" />
            Join Our Community
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tight"
          >
            Experience the Spirit of <br />
            <span className="text-primary italic">Surya Academy.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 mb-16 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Join us for a personalized campus tour and discover how we are nurturing the next generation of global leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" className="w-full sm:w-auto h-20 px-14 text-xl font-black group shadow-2xl shadow-primary/40">
              Schedule a Visit
              <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-20 px-14 text-xl font-black border-white/20 hover:bg-white hover:text-neutral-900 group">
              <Play className="w-6 h-6 mr-2 fill-current transition-transform group-hover:scale-110" />
              Watch Campus Life
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-40 group-hover:opacity-100 transition-all"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em]">Our Foundations:</span>
            <span className="text-sm font-bold">Legacy of Excellence</span>
            <span className="text-sm font-bold">Global Standards</span>
            <span className="text-sm font-bold">Nurturing Community</span>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
