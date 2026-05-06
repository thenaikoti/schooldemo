"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { Users, GraduationCap, Award, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/,/g, ""));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + (value.includes("+") ? "+" : ""));
  const spring = useSpring(count, { stiffness: 50, damping: 20 });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      spring.set(numericValue);
    }
  }, [inView, numericValue, spring]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { label: "Students Enrolled", subtext: "Across all campuses", value: "2,500+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Expert Educators", subtext: "Ph.D & Master qualified", value: "150+", icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-50" },
  { label: "Years of Legacy", subtext: "Est. since 2001", value: "25+", icon: Award, color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Global Partners", subtext: "University tie-ups", value: "40+", icon: Globe, color: "text-emerald-500", bg: "bg-emerald-50" },
];

export function Stats() {
  return (
    <SectionWrapper className="bg-white dark:bg-neutral-950 pt-0 md:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="flex flex-col items-center text-center p-10 border-none bg-neutral-50/50 dark:bg-neutral-900/50 group">
              <div className={cn("p-5 rounded-2xl mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", stat.bg, `dark:${stat.bg}/10`)}>
                <Icon className={cn("w-10 h-10", stat.color)} />
              </div>
              <h3 className="text-5xl font-black text-neutral-900 dark:text-white mb-2 tracking-tight">
                <Counter value={stat.value} />
              </h3>
              <p className="text-neutral-900 dark:text-neutral-100 font-bold text-lg mb-1">{stat.label}</p>
              <p className="text-neutral-500 text-sm font-medium">{stat.subtext}</p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
