"use client";
import Link from "next/link";

import { SectionWrapper } from "./SectionWrapper";
import { Button } from "./Primitives";
import { ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/annual_sports_day_event_1776796621655.png", title: "Sports Excellence", category: "Athletics" },
  { src: "/images/smart_classroom_1776796474806.png", title: "Digital Discovery", category: "STEM" },
  { src: "/images/about_school_campus_1776796440311.png", title: "Campus Horizon", category: "Infrastructure" },
  { src: "/images/primary_education_students_1776796553414.png", title: "Collaborative Learning", category: "Academic" },
  { src: "/images/pre_primary_kids_1776796536863.png", title: "Early Explorers", category: "Foundation" },
  { src: "/images/programs_stem_1776796289895.png", title: "Robo-Lab Insights", category: "Innovation" },
];

export function Gallery() {
  return (
    <SectionWrapper className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-primary mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight tracking-tight">
            Capturing Life at <br />
            <span className="text-primary italic">Surya Academy.</span>
          </h2>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            A visual journey through our vibrant campus, celebrating student achievements and daily academic excellence.
          </p>
        </div>
        <Link href="/gallery" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="hidden md:flex h-16 px-10 font-bold group">
            Explore All Media
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, i) => (
          <motion.div
            key={image.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-neutral-100"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  {image.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
