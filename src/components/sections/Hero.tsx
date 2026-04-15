"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden py-16">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10 bg-slate-900">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="/hero-school.jpg"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay (NOT SOLID) for Depth & Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-white uppercase bg-orange-500 rounded-full shadow-lg">
              Admissions Open for 2026–27
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              Shaping Future <br /> 
              <span className="text-orange-400">Leaders</span> with Excellence
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed max-w-2xl font-medium">
              Join a community of excellence where your child's future is nurtured with care and global standards.
              <span className="text-sm opacity-90 mt-2 block font-normal text-slate-300">Trusted by 2000+ happy parents across the city</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <Link href="/admissions">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 h-16 px-10 text-xl font-bold group shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
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
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Get a call back within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
