"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageLayout({ children, title, subtitle, className }: PageLayoutProps) {
  return (
    <main className={cn("min-h-screen pt-24", className)}>
      {/* Header Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-1 bg-primary mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight leading-[0.95]"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Page Content */}
      <div className="relative">
        {children}
      </div>
    </main>
  );
}
