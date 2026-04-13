"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-campus.png"
            alt="Premium School Campus"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        
        {/* Optimized Overlay: 30-40% opacity for maximum image clarity */}
        <div className="absolute inset-0 bg-black/35"></div>
        
        {/* Depth: Left-side gradient for text readability while keeping right side clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[1px] md:backdrop-blur-none bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-white uppercase bg-accent rounded-full shadow-lg">
              Admissions Open for 2026–27
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Shaping Future <br /> Leaders with <span className="text-accent italic">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed max-w-2xl font-medium">
              Admissions Open for 2026–27 • Limited Seats Available
              <span className="text-sm opacity-90 mt-2 block font-normal">Trusted by 2000+ happy parents across the city</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-6">
              <Link href="/admissions">
                <Button size="lg" className="h-16 px-10 text-xl font-bold group shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold text-white border-white/50 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95">
                  <Calendar className="mr-2 w-6 h-6" />
                  Book a Campus Visit
                </Button>
              </Link>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-white/80 font-medium flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Get a call back within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-primary/20 blur-[120px] rounded-full -mb-32 -mr-32"></div>
    </section>
  );
}
