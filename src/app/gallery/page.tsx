"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Campus", "Events", "Sports", "Activities"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800", category: "Events", title: "Annual Gathering 2024" },
  { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", category: "Activities", title: "Chemistry Lab Session" },
  { id: 3, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800", category: "Campus", title: "Main Campus Entrance" },
  { id: 4, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", category: "Activities", title: "Digital Literacy Class" },
  { id: 5, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800", category: "Events", title: "Grand Concert" },
  { id: 6, src: "https://images.unsplash.com/photo-1577896851231-70ef14697593?q=80&w=800", category: "Activities", title: "Coding Club" },
  { id: 7, src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=800", category: "Sports", title: "Swimming Championship" },
  { id: 8, src: "https://images.unsplash.com/photo-1627556704302-624286460c6f?q=80&w=800", category: "Campus", title: "Assembly Area" },
  { id: 9, src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800", category: "Campus", title: "University Block" },
  { id: 10, src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800", category: "Sports", title: "Football Training" },
  { id: 11, src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800", category: "Activities", title: "Art & Craft Workshop" },
  { id: 12, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800", category: "Events", title: "Graduation Ceremony" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col">
      <PageHeader
        title="School Gallery"
        subtitle="A visual journey through the vibrant life, events, and achievements at our campus."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <div className="flex items-center gap-2 mr-4 text-slate-400">
              <Filter className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wider">Filter By:</span>
            </div>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={cn(
                  "rounded-full px-8 py-2 transition-all duration-300",
                  activeCategory === cat ? "shadow-lg scale-105" : "hover:border-primary hover:text-primary"
                )}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-100"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-accent text-sm font-bold mb-1 uppercase tracking-wider">{img.category}</span>
                    <h4 className="text-white text-lg font-bold mb-4">{img.title}</h4>
                    <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center transition-transform hover:scale-110">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to see our campus in person?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Book a personalized tour and see our state-of-the-art facilities and vibrant learning environment for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/admissions">
               <Button size="lg" className="h-14 px-10 shadow-xl">Apply for Admission</Button>
             </Link>
             <Link href="/contact">
               <Button size="lg" variant="outline" className="h-14 px-10">Contact Admissions</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
