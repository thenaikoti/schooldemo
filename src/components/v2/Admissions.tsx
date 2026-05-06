"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { UserPlus, FileText, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Online Registration",
    desc: "Complete the initial enquiry and registration form on our website.",
    icon: UserPlus,
    color: "bg-blue-500"
  },
  {
    title: "Document Submission",
    desc: "Upload previous academic records and required identification papers.",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    title: "Interaction & Assessment",
    desc: "A friendly session with the child and a short academic evaluation.",
    icon: Calendar,
    color: "bg-orange-500"
  },
  {
    title: "Final Confirmation",
    desc: "Receive the admission offer and complete the fee formalities.",
    icon: CheckCircle2,
    color: "bg-emerald-500"
  }
];

import { cn } from "@/lib/utils";

export function Admissions() {
  return (
    <SectionWrapper className="bg-neutral-50 dark:bg-neutral-900/30">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          Simple Admission <span className="text-primary">Process</span>
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          We have streamlined our enrollment journey to be clear and stress-free for both parents and students.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line - Desktop Only */}
        <div className="absolute top-8 left-0 w-full h-1 bg-neutral-200 dark:bg-neutral-800 hidden lg:block" />
        {/* Connector Line - Mobile Only */}
        <div className="absolute top-0 left-8 w-1 h-full bg-neutral-200 dark:bg-neutral-800 lg:hidden" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col lg:items-center">
                <div className="flex flex-row lg:flex-col lg:items-center gap-6 lg:gap-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl mb-8 relative shrink-0", step.color)}
                  >
                    <Icon className="w-8 h-8" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-neutral-950 border-4 border-neutral-50 dark:border-neutral-900 flex items-center justify-center text-neutral-900 dark:text-white font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                  </motion.div>
                  
                  <Card className="text-left lg:text-center w-full">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
