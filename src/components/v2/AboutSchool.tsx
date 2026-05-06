"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap, Target, Users, BookOpen } from "lucide-react";

export function AboutSchool() {
  const pillars = [
    {
      title: "Global Vision",
      desc: "Preparing students for a connected world with a curriculum that transcends borders.",
      icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Future Ready",
      desc: "Integrating technology and innovation into every aspect of our learning environment.",
      icon: Target,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Holistic Growth",
      desc: "Focusing on character building, arts, and athletics alongside academic rigor.",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-primary mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight tracking-tight">
            Education for a <br />
            <span className="text-primary italic">Better Tomorrow.</span>
          </h2>
          <div className="space-y-6 max-w-xl">
            <p className="text-xl text-neutral-600 font-medium leading-relaxed">
              Founded on the principles of excellence and integrity, Surya Academy is more than just a school. It is a vibrant community where curiosity is celebrated and potential is realized.
            </p>
            <p className="text-lg text-neutral-500 leading-relaxed">
              We believe that education should be an inspiring journey. Our approach combines traditional values with modern methodology, ensuring that every child is equipped with the tools they need to succeed in the 21st century.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-100 pt-12">
            <div>
              <p className="text-4xl font-black text-neutral-900 mb-1">15+</p>
              <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Years of Legacy</p>
            </div>
            <div>
              <p className="text-4xl font-black text-neutral-900 mb-1">2000+</p>
              <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Global Alumni</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl ${pillar.bg} flex items-center justify-center ${pillar.color} flex-shrink-0 transition-transform duration-500 group-hover:rotate-6`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-neutral-900 mb-2">{pillar.title}</h4>
                  <p className="text-neutral-500 font-medium leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
