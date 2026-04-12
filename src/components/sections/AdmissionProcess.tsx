"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileEdit, UserCheck, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "1. Inquiry",
    description: "Fill the online enquiry form or visit our campus to learn more about the school.",
  },
  {
    icon: <FileEdit className="w-6 h-6" />,
    title: "2. Registration",
    description: "Submit the registration form with required documents and academic records.",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "3. Interaction",
    description: "A friendly interaction with the child and parents to understand mutual expectations.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "4. Enrollment",
    description: "Complete the admission formalities and welcome your child to our school family.",
  },
];

export function AdmissionProcess() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary-foreground/70 uppercase mb-3">Admission Process</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Your Child's Journey Begins Here</h3>
            <p className="text-lg text-primary-foreground/80">
              We strive to make our admission process as simple and transparent as possible for parents and students.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-6 shadow-xl relative group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center border-4 border-primary">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
