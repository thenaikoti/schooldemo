"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, BookOpen, Clock, Building2 } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    label: "Happy Students",
    value: "2500+",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Years of Excellence",
    value: "25+",
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: "CBSE Affiliated",
    value: "Grade A+",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    label: "Parent Satisfaction",
    value: "100%",
  },
];

export function Stats() {
  return (
    <section className="relative z-20 -mt-16 container mx-auto px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1 leading-none">{stat.value}</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
