"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { 
  UserPlus, 
  Bot, 
  Zap, 
  MessageCircle, 
  CheckSquare,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { 
    id: 1, 
    label: "Parent Inquiry", 
    desc: "Online form submission", 
    icon: UserPlus, 
    color: "text-primary", 
    bg: "bg-primary/10" 
  },
  { 
    id: 2, 
    label: "Parent Support", 
    desc: "Personalized assistance", 
    icon: Bot, 
    color: "text-primary", 
    bg: "bg-primary/10" 
  },
  { 
    id: 3, 
    label: "Guided Steps", 
    desc: "Clear milestones", 
    icon: Zap, 
    color: "text-amber-500", 
    bg: "bg-amber-500/10" 
  },
  { 
    id: 4, 
    label: "Always Connected", 
    desc: "Timely updates", 
    icon: MessageCircle, 
    color: "text-emerald-500", 
    bg: "bg-emerald-500/10" 
  },
  { 
    id: 5, 
    label: "Warm Welcome", 
    desc: "Seamless enrollment", 
    icon: CheckSquare, 
    color: "text-purple-500", 
    bg: "bg-purple-500/10" 
  },
];

export function AutomationWorkflow() {
  return (
    <SectionWrapper id="workflow" className="bg-white dark:bg-neutral-950">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight">
          A Seamless Parent <br />
          <span className="text-primary italic">Journey.</span>
        </h2>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
          We provide a nurturing and efficient experience, ensuring every family receives personal attention from inquiry to enrollment.
        </p>
      </div>

      <div className="relative">
        {/* Animated Connector Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-100 dark:bg-neutral-800 -translate-y-1/2 hidden lg:block overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.id} className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-[2rem] ${step.bg} flex items-center justify-center ${step.color} shadow-xl shadow-black/5 dark:shadow-white/5 transition-all duration-500 hover:rotate-6 hover:scale-110 border border-white dark:border-neutral-800`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-black text-xs border-4 border-white dark:border-neutral-950">
                    {step.id}
                  </div>
                </div>
                
                <h4 className="text-lg font-black text-neutral-900 dark:text-white mb-2">{step.label}</h4>
                <p className="text-sm text-neutral-500 font-medium">{step.desc}</p>

                {/* Arrow for Mobile/Tablet */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-neutral-200 dark:text-neutral-800">
                    <ArrowRight className="w-8 h-8 rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 p-6 sm:p-10 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <Zap className="w-8 h-8 fill-current" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-neutral-900 dark:text-white">A Supportive Experience</h4>
            <p className="text-neutral-500 font-medium">Our smart systems ensure no query goes unanswered.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:gap-12 gap-8 w-full md:w-auto">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">2.5s</p>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Avg Response</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">100%</p>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Care Rate</p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <p className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">24/7</p>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Support Availability</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
