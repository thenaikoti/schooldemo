"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "./Primitives";
import { ArrowRight, Play, Heart, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-white">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-[10px] sm:text-xs font-bold text-primary mb-8 border border-primary/10 tracking-[0.1em] uppercase"
            >
              <Star className="w-3 h-3 fill-current" />
              Excellence in Global Education
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-neutral-900 mb-8 leading-[1.1] md:leading-[0.95]"
            >
              Nurturing <br />
              <span className="text-primary italic">Young Minds</span> <br />
              for a Brighter Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-xl leading-relaxed font-medium"
            >
              We believe in a holistic approach to education, nurturing every child's unique talents and character to prepare them for a bright, purposeful future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <Link href="/admissions" passHref legacyBehavior>
                <Button size="lg" className="w-full sm:w-auto text-lg h-16 px-10 group rounded-2xl">
                  Start Admission
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/gallery" passHref legacyBehavior>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-16 px-10 group rounded-2xl border-neutral-200">
                  <Play className="w-4 h-4 fill-current mr-2" />
                  Campus Tour
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex flex-wrap items-center gap-8 md:gap-12"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Environment</p>
                  <p className="text-sm font-bold text-neutral-900">Safe & Secure</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Community</p>
                  <p className="text-sm font-bold text-neutral-900">Parent Trusted</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white bg-neutral-100">
              <Image
                src="/images/hero_campus_1776796274174.png"
                alt="Students collaborating"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Info Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 p-8 rounded-[2.5rem] bg-white shadow-2xl border border-neutral-100 hidden md:block max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-2xl font-black text-neutral-900 leading-none">98%</p>
                  <p className="text-[10px] font-black uppercase text-neutral-400 tracking-widest mt-1">Success Rate</p>
                </div>
              </div>
              <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                Empowering students to achieve their highest academic potential.
              </p>
            </motion.div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
