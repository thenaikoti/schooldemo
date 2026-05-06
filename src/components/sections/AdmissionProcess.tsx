"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, UserCheck, School, CheckCircle2 } from "lucide-react";
import React, { useRef } from "react";

const steps = [
  {
    title: "Step 1: Registration",
    description: "Fill out the online enquiry form and submit the basic required documents (Aadhar, Birth Certificate, Previous Marks).",
    icon: FileText,
  },
  {
    title: "Step 2: Interaction",
    description: "Our admissions counselor will schedule a brief, friendly interaction with the child and parents.",
    icon: UserCheck,
  },
  {
    title: "Step 3: Campus Tour",
    description: "Visit our campus to experience our state-of-the-art facilities and meet the academic coordinators.",
    icon: School,
  },
  {
    title: "Step 4: Admission confirmation",
    description: "Upon selection, complete the fee payment and submit the final physical documents to secure the seat.",
    icon: CheckCircle2,
  },
];

export function AdmissionProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-24 bg-neutral-50 dark:bg-black" id="admissions">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl" ref={containerRef}>
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white">
            Simple <span className="text-primary text-blue-600 dark:text-blue-500">Admissions</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl px-4">
            We've made our admission process as transparent and straightforward as possible for parents.
          </p>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 -ml-px h-full w-[2px] bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
            />
          </div>

          <div className="relative flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.title} className={`relative flex items-center md:justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -ml-[20px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-100 dark:border-black dark:bg-blue-900/30 z-10">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-neutral-900/50 backdrop-blur-md hover:shadow-md transition-all`}
                  >
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
            <a href="#register" className="relative group overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 transition-colors">
              <span className="relative z-10 font-semibold tracking-wide">Register Now</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
        </div>
      </div>
    </section>
  );
}
