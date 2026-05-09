"use client";

import React from "react";
import { PageLayout } from "@/components/v2/PageLayout";
import { WhyChooseUs } from "@/components/v2/WhyChooseUs";
import { SectionWrapper } from "@/components/v2/SectionWrapper";
import { Card } from "@/components/v2/Primitives";
import { motion } from "framer-motion";
import { CheckCircle2, Flag, Target, Rocket } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <PageLayout
      title="A Legacy of Excellence."
      subtitle="Discover our history, mission, and the leadership that shapes our educational standards."
    >
      {/* Introduction */}
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-12 h-1 bg-primary mb-8"
            />
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              Educating Leaders <br />
              <span className="text-primary italic">Since 1998.</span>
            </h2>
            <div className="space-y-6 text-xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-10">
              <p>
                Surya Academy was founded with a mission to provide elite-grade education that prepares students for the challenges of a global future.
              </p>
              <p>
                We believe in balancing academic rigor with creative expression and social responsibility, ensuring our students graduate as confident global citizens.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Global Curriculum Standards",
                "Advanced STEM Integration",
                "State-of-the-art Research Labs",
                "Elite Sports Infrastructure",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="font-bold text-neutral-800 dark:text-neutral-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white dark:border-neutral-900"
            >
              <Image
                src="/images/about_school_campus_1776796440311.png"
                alt="School Campus"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 -left-10 bg-neutral-950 text-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl hidden md:block"
            >
              <p className="text-5xl font-black mb-2">25+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Years of Heritage</p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper className="bg-neutral-50 dark:bg-neutral-900/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              desc: "To nurture holistic development by fostering curiosity, character, and competence in every student.",
              icon: Flag,
              color: "text-rose-500",
              bg: "bg-rose-50"
            },
            {
              title: "Our Vision",
              desc: "To empower every child to become a compassionate, future-ready leader who makes a positive impact on the world.",
              icon: Target,
              color: "text-primary",
              bg: "bg-primary/5"
            },
            {
              title: "Our Values",
              desc: "Integrity, Respect, and Excellence form the foundation of our vibrant and inclusive educational community.",
              icon: Rocket,
              color: "text-purple-500",
              bg: "bg-purple-50"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 sm:p-10 border-none shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", item.bg, `dark:${item.bg}/10`)}>
                  <item.icon className={cn("w-8 h-8", item.color)} />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Principal's Message */}
      <SectionWrapper>
        <div className="bg-neutral-950 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3 relative z-10"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
              <Image
                src="/images/principal_portrait_1776796457936.png"
                alt="Principal"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <div className="lg:w-2/3 text-white relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-6">Message from the Principal</h2>
              <blockquote className="text-xl sm:text-3xl md:text-5xl font-medium mb-8 sm:mb-10 leading-[1.2] sm:leading-[1.1] italic tracking-tight">
                "We don't just teach subjects; we nurture souls. Every child at Surya Academy is a world of potential waiting to be discovered."
              </blockquote>
              <div className="space-y-6 text-xl text-neutral-400 font-medium leading-relaxed mb-10">
                <p>
                  In a rapidly changing world, our priority is to provide a safe, inspiring environment where students can build the confidence to lead with purpose and heart.
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">Dr. Sarah Johnson</p>
                <p className="text-neutral-500 font-bold uppercase tracking-widest text-sm">Principal, Surya Academy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us Integration */}
      <WhyChooseUs />
    </PageLayout>
  );
}
