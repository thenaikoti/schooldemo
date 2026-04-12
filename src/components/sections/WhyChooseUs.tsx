"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Cpu, Beaker, Trophy, Library, Bus, ShieldCheck, UserCheck } from "lucide-react";

const features = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Smart Classrooms",
    description: "Equipped with interactive boards and audio-visual tools for an engaging learning experience.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Robotics & STEM Lab",
    description: "Hands-on learning with modern kits to foster innovation and technological literacy.",
  },
  {
    icon: <Beaker className="w-6 h-6" />,
    title: "Advanced Science Labs",
    description: "State-of-the-art Physics, Chemistry, and Biology labs for practical exploration.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Sports Complex",
    description: "Extensive facilities for football, basketball, cricket, and professional coaching.",
  },
  {
    icon: <Library className="w-6 h-6" />,
    title: "Digital Library",
    description: "A vast collection of books and digital resources to inspire independent reading.",
  },
  {
    icon: <Bus className="w-6 h-6" />,
    title: "Safe Transport",
    description: "GPS-enabled bus fleet with trained staff ensuring safe commute for every child.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Safe & Secure",
    description: "CCTV surveillance and 24/7 security personnel across the entire campus.",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Expert Faculty",
    description: "Highly qualified and compassionate educators dedicated to student growth.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why {SITE_CONFIG.shortName}?</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6Leading-tight">World-Class Facilities for Holistic Growth</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that the right infrastructure plays a crucial role in a student's educational journey. Our campus is designed to provide global standards of learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-semibold text-slate-700">CBSE Affiliated Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-semibold text-slate-700">Student-Centric Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-semibold text-slate-700">Global Perspective, Local Values</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { SITE_CONFIG } from "@/constants/site";
