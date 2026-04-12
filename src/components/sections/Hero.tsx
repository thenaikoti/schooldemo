"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000"
          alt="Premium School Campus"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-white uppercase bg-accent rounded-full shadow-lg">
              Admissions Open for 2026–27
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Shaping Future <br /> Leaders with <span className="text-accent italic">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-10 leading-relaxed max-w-2xl font-medium">
              Limited Seats Available • Holistic CBSE Curriculum <br />
              <span className="text-sm opacity-80 mt-2 block">Trusted by 2000+ happy parents across the city</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/admissions">
                <Button size="lg" className="h-16 px-10 text-xl font-bold group shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold text-white border-white/40 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95">
                  <Calendar className="mr-2 w-6 h-6" />
                  Book a Campus Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-primary/20 blur-[120px] rounded-full -mb-32 -mr-32"></div>
    </section>
  );
}
