"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/v2/PageLayout";
import { SectionWrapper } from "@/components/v2/SectionWrapper";
import { Button } from "@/components/v2/Primitives";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Filter, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Campus", "Events", "Sports", "Activities"];

const galleryImages = [
  { id: 1, src: "/images/smart_classroom_1776796474806.png", category: "Campus", title: "Smart Learning Hub" },
  { id: 2, src: "/images/secondary_science_lab_1776796589067.png", category: "Activities", title: "Chemistry Excellence" },
  { id: 3, src: "/images/about_school_campus_1776796440311.png", category: "Campus", title: "Main Architecture" },
  { id: 4, src: "/images/programs_stem_1776796289895.png", category: "Activities", title: "Robotics Workshop" },
  { id: 5, src: "/images/olympic_pool_1776796520746.png", category: "Sports", title: "Aquatic Center" },
  { id: 6, src: "/images/pre_primary_kids_1776796536863.png", category: "Activities", title: "Early Exploration" },
  { id: 7, src: "/images/primary_education_students_1776796553414.png", category: "Activities", title: "Primary Learning" },
  { id: 8, src: "/images/higher_secondary_students_1776796605835.png", category: "Activities", title: "Senior Research" },
  { id: 9, src: "/images/annual_sports_day_event_1776796621655.png", category: "Events", title: "Annual Sports Day" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <PageLayout
      title="Our Visual Heritage."
      subtitle="A journey through the vibrant life, elite events, and academic achievements at our campus."
    >
      <SectionWrapper className="bg-white dark:bg-neutral-950">
        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
          <div className="flex items-center gap-3 mr-6 text-neutral-400">
            <Filter className="w-5 h-5" />
            <span className="font-black text-xs uppercase tracking-widest">Filter Media</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-10 py-3 text-sm font-black transition-all duration-500 tracking-tight",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-xl shadow-primary/30 scale-105" 
                  : "bg-neutral-50 dark:bg-neutral-900 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-primary text-xs font-black mb-2 uppercase tracking-[0.2em]">{img.category}</span>
                  <h4 className="text-white text-2xl font-black mb-6 tracking-tight">{img.title}</h4>
                  <button className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center transition-all hover:scale-110 hover:rotate-6">
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-40">
            <Camera className="w-16 h-16 text-neutral-200 mx-auto mb-6" />
            <p className="text-2xl font-black text-neutral-300">No media found in this category.</p>
          </div>
        )}
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-neutral-950 text-white text-center rounded-[4rem] mx-4 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Experience it in person.</h2>
          <p className="text-xl text-neutral-400 font-medium mb-12 leading-relaxed">
            Book a personalized campus tour and see our state-of-the-art facilities and vibrant learning environment first-hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Button size="lg" className="h-16 px-12 text-lg">Apply for Admission</Button>
             <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-white/20 hover:bg-white hover:text-neutral-900">Contact Admissions</Button>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
