"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, UserCheck, Award, MessageCircle, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Holistic Safety",
    desc: "A secure campus with 24/7 surveillance and a dedicated child protection policy.",
    icon: ShieldCheck,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    title: "Expert Faculty",
    desc: "Highly qualified educators dedicated to personalized student development.",
    icon: UserCheck,
    color: "bg-primary/5",
    iconColor: "text-primary"
  },
  {
    title: "Nurturing Environment",
    desc: "A warm and inclusive culture where every student feels seen and supported.",
    icon: Heart,
    color: "bg-rose-50",
    iconColor: "text-rose-600"
  },
  {
    title: "Global Standards",
    desc: "An international curriculum that prepares students for global universities.",
    icon: Award,
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Open Communication",
    desc: "Regular updates and transparent parent-teacher collaboration platforms.",
    icon: MessageCircle,
    color: "bg-primary/5",
    iconColor: "text-primary"
  },
  {
    title: "Proven Outcomes",
    desc: "Consistently high academic results and placements in top institutions.",
    icon: TrendingUp,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  }
];

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="bg-neutral-50">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-primary mb-8"
          />
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 leading-tight tracking-tight">
            Why Parents <br />
            <span className="text-primary italic">Trust Surya.</span>
          </h2>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed mb-10">
            We understand that choosing a school is one of the most important decisions for your family. Here is why parents choose us.
          </p>
          <div className="p-6 sm:p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-xl shadow-neutral-200/50">
             <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Satisfaction Rate</p>
             <p className="text-5xl font-black text-neutral-900 mb-2">99.2%</p>
             <p className="text-sm text-neutral-500 font-medium">Of our parents would recommend us to their friends and family.</p>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-10 rounded-[2.5rem] bg-white border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center ${reason.iconColor} mb-8`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-neutral-900 mb-4">{reason.title}</h4>
              <p className="text-neutral-500 font-medium leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
