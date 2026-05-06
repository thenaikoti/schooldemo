"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { Sparkles, ShieldCheck, Globe, Clock, Heart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Safety First",
    desc: "A secure, CCTV-monitored campus with verified staff and GPS-tracked transport.",
    icon: ShieldCheck,
    color: "text-emerald-500",
  },
  {
    title: "Global Standards",
    desc: "Curriculum aligned with international benchmarks for competitive edge.",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    title: "Holistic Care",
    desc: "Focusing on emotional well-being and character building alongside academics.",
    icon: Heart,
    color: "text-rose-500",
  },
  {
    title: "Modern Facilities",
    desc: "Smart classrooms, digital libraries, and advanced research laboratories.",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    title: "Expert Mentorship",
    desc: "Learning from highly qualified educators dedicated to student growth.",
    icon: Sparkles,
    color: "text-purple-500",
  },
  {
    title: "Flexible Learning",
    desc: "Personalized attention and support for every student's unique learning pace.",
    icon: Clock,
    color: "text-indigo-500",
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-white dark:bg-neutral-950">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-primary mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Why Parents Trust <br />
            <span className="text-primary italic">Surya Academy.</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed font-medium">
            We provide an elite environment that combines global standards with deep-rooted values to prepare your child for life.
          </p>
          <div className="space-y-6">
            {[
              "ISO 9001:2015 Certified Excellence",
              "Awarded Best Innovative School 2025",
              "100% University Placement Record"
            ].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-white" />
                </div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-12 border-none bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <Icon className={cn("w-12 h-12 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", feature.color)} />
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
