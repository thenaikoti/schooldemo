"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/constants/site";

const images = [
  {
    src: "/images/annual_sports_day_event_1776796621655.png",
    title: "Annual Sports Day",
    category: "Events & Athletics",
  },
  {
    src: "/images/smart_classroom_1776796474806.png",
    title: "InnoVenture Fair",
    category: "STEM & Activities",
  },
  {
    src: "/images/about_school_campus_1776796440311.png",
    title: "Infinite Knowledge Hub",
    category: "Campus Facilities",
  },
  {
    src: "/images/primary_education_students_1776796553414.png",
    title: "Digital Horizon",
    category: "Smart Classrooms",
  },
  {
    src: "/images/pre_primary_kids_1776796536863.png",
    title: "Artistic Expressions",
    category: "Cultural Arts",
  },
  {
    src: "/images/programs_stem_1776796289895.png",
    title: "Robo-Future Workshop",
    category: "Modern Technology",
  },
];

export function GalleryPreview() {
  return (
      <section className="relative overflow-hidden py-24 bg-white dark:bg-neutral-900 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <SectionHeader
            subtitle="Campus Life"
            title={`A Glimpse into the ${SITE_CONFIG.shortName} Experience.`}
            description="Beyond classrooms, discover the vibrant world of our students as they explore, innovate, and excel every single day."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link href="/gallery">
            <Button variant="ghost" size="lg" className="hidden md:flex hover:scale-105 transition-all font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white rounded-xl px-8 h-12">
              View Full Gallery
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 bg-neutral-100 dark:bg-black border border-black/5 dark:border-white/10"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 flex flex-col justify-end p-8">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold mb-3 uppercase tracking-wider rounded-full border border-white/20">
                    {img.category}
                  </span>
                  <h4 className="text-white text-2xl font-bold mb-2 tracking-tight">{img.title}</h4>
                  <div className="h-1 w-0 bg-white/50 group-hover:w-12 transition-all duration-700 rounded-full mt-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="w-full h-16 rounded-2xl border-2 font-bold text-primary">
              Explore Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
