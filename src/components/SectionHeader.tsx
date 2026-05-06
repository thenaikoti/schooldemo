"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {subtitle && (
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/5 rounded-full border border-primary/10">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
          {title}
        </h2>
        {description && (
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
