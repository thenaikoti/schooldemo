"use client";

import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Globe2, HeartHandshake, Laptop, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Future-Ready Curriculum",
    description: "Integrating AI, coding, and robotics from early years to prepare students for tomorrow's challenges.",
    icon: BrainCircuit,
    color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  },
  {
    title: "Global Perspective",
    description: "International exchange programs and globally recognized certifications built into the core framework.",
    icon: Globe2,
    color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  {
    title: "Holistic Development",
    description: "Equal emphasis on academics, sports, arts, and emotional intelligence for well-rounded growth.",
    icon: HeartHandshake,
    color: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  },
  {
    title: "Digital Ecosystem",
    description: "Smart classrooms and a comprehensive parent-teacher connect app for real-time progress tracking.",
    icon: Laptop,
    color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
  {
    title: "Safe Environment",
    description: "24/7 security, GPS-enabled transport, and strict zero-tolerance anti-bullying policies.",
    icon: ShieldCheck,
    color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
  },
  {
    title: "Individual Attention",
    description: "Optimal student-teacher ratio ensures personalized learning paths for every child's unique needs.",
    icon: Sparkles,
    color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-medium dark:border-white/10 dark:bg-white/5"
          >
            <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
            <span className="text-neutral-800 dark:text-neutral-200">The Surya Advantage</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white max-w-2xl"
          >
            Why Parents Choose Us for Their Child's Future
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-neutral-50 p-8 transition-colors hover:bg-white dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-900/80"
              >
                <div className={`mb-6 inline-flex rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
                
                {/* Decorative background element */}
                <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-black/[0.02] transition-transform duration-500 group-hover:scale-150 dark:bg-white/[0.02]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
