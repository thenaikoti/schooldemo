"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { 
  BarChart3, 
  MessageSquare, 
  Target, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  Globe,
  Bot
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Inquiry Prioritization",
    desc: "Automatically identifies high-intent parents using behavioral data.",
    icon: Target,
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
    size: "lg"
  },
  {
    title: "Automated Follow-Ups",
    desc: "Nurtures leads across WhatsApp and Email without human intervention.",
    icon: MessageSquare,
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-500",
    size: "md"
  },
  {
    title: "Real-Time Dashboard",
    desc: "Visualizes every stage of the admission funnel in real-time.",
    icon: BarChart3,
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500",
    size: "md"
  },
  {
    title: "AI Communication",
    desc: "Personalized communication assistant for admission staff.",
    icon: Bot,
    color: "from-primary/20 to-primary/30",
    iconColor: "text-primary",
    size: "lg"
  },
  {
    title: "Secure Data Vault",
    desc: "Enterprise-grade security for student and parent information.",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
    size: "md"
  },
  {
    title: "Mobile-First Experience",
    desc: "Fully operational dashboard and management from any mobile device.",
    icon: Smartphone,
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-500",
    size: "md"
  }
];

export function AIFeatures() {
  return (
    <SectionWrapper id="features" className="bg-neutral-50 dark:bg-neutral-900/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-12 h-1 bg-primary mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight tracking-tight">
            Infrastructure for <br />
            <span className="text-primary italic">Elite Institutions.</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            Replace fragmented systems with a unified, AI-first platform designed for modern school operations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full group relative overflow-hidden p-10 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full -mr-16 -mt-16 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center ${feature.iconColor} mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:scale-110 border border-neutral-100 dark:border-neutral-800`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                {feature.desc}
              </p>
              
              <div className="pt-4 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-500">
                Learn more <Zap className="w-4 h-4 fill-current" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
