"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Maximize2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800",
    title: "Annual Sports Day",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    title: "Science Exhibition",
    category: "Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    title: "Smart Library",
    category: "Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    title: "Digital Learning",
    category: "Smart Classes",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800",
    title: "Music & Arts",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef14697593?q=80&w=800",
    title: "Robotics Workshop",
    category: "Activities",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Campus Life</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">A glimpse into everyday learning, growth, and joy at GVIS.</h3>
              <p className="text-lg text-slate-600">
                Beyond classrooms, discover the vibrant world of our students as they explore, innovate, and excel.
              </p>
            </motion.div>
          </div>
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="hidden md:flex hover:scale-105 transition-transform">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-accent text-xs font-bold mb-1 uppercase tracking-widest">{img.category}</span>
                  <h4 className="text-white text-xl font-bold mb-4">{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="w-full">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { SITE_CONFIG } from "@/constants/site";
