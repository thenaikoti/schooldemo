"use client";

import React from "react";
import { PageLayout } from "@/components/v2/PageLayout";
import { Programs } from "@/components/v2/Programs";
import { SectionWrapper } from "@/components/v2/SectionWrapper";
import { Card, Button } from "@/components/v2/Primitives";
import { BookOpen, Lightbulb, Trophy, Globe, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProgramsPage() {
  return (
    <PageLayout
      title="Our Academic Ecosystem."
      subtitle="Comprehensive educational programs aligned with global standards, designed to nurture future-ready graduates."
    >
      {/* Primary Programs Grid */}
      <Programs />

      {/* Curriculum Highlights */}
      <SectionWrapper className="bg-white dark:bg-neutral-950">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-12 h-1 bg-primary mb-8"
            />
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              A 360° Learning <br />
              <span className="text-primary italic">Philosophy.</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 font-medium leading-relaxed">
              We go beyond classrooms to ensure our students excel in every aspect of life, combining rigorous academics with character development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Academic Rigor", icon: BookOpen, desc: "Focused on conceptual clarity." },
                { title: "Physical Health", icon: Trophy, desc: "Olympic-grade sports facilities." },
                { title: "Creative Arts", icon: Lightbulb, desc: "Dedicated music & design studios." },
                { title: "Global Awareness", icon: Globe, desc: "International exchange programs." }
              ].map((item, i) => (
                <div key={item.title} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white tracking-tight">{item.title}</h4>
                  <p className="text-neutral-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
            {[
              "/images/pre_primary_kids_1776796536863.png",
              "/images/primary_education_students_1776796553414.png",
              "/images/secondary_science_lab_1776796589067.png",
              "/images/higher_secondary_students_1776796605835.png"
            ].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-2 sm:border-4 border-white dark:border-neutral-900 shadow-xl",
                  i % 2 === 1 ? "sm:mt-12" : ""
                )}
              >
                <Image src={img} alt="program" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pedagogical Features */}
      <SectionWrapper className="bg-neutral-900 text-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Pedagogical Highlights</h2>
          <p className="text-xl text-neutral-400 font-medium">Innovative methods that define our educational excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Experiential Learning",
            "STEAM Integration",
            "Personalized Mentorship",
            "Skill-based Assessment",
            "Digital Literacy",
            "Character Building",
            "Project-based Learning",
            "Global Perspectives"
          ].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <span className="font-bold tracking-tight">{feature}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}

import { cn } from "@/lib/utils";
