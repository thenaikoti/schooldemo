"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    name: "Total Students",
    value: 2500,
    suffix: "+",
    icon: Users,
    description: "Diverse student community",
  },
  {
    name: "Expert Faculty",
    value: 150,
    suffix: "+",
    icon: GraduationCap,
    description: "Highly qualified educators",
  },
  {
    name: "Years of Excellence",
    value: 25,
    suffix: "",
    icon: Award,
    description: "Legacy of quality education",
  },
  {
    name: "Courses Offered",
    value: 40,
    suffix: "+",
    icon: BookOpen,
    description: "Comprehensive curriculum",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hasStarted, setHasStarted] = useState(false);

  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView && !hasStarted) {
      spring.set(value);
      setHasStarted(true);
    }
  }, [inView, value, spring, hasStarted]);

  return (
    <span ref={ref} className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-neutral-900 dark:text-white">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 bg-neutral-50 dark:bg-neutral-900/50">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 dark:from-blue-500/20" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-center gap-4 rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-black/50 backdrop-blur-sm"
              >
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="font-semibold text-neutral-700 dark:text-neutral-300">{stat.name}</p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.description}</p>
                
                {/* Hover gradient border effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
