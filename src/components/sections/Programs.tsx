"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Baby, GraduationCap, School, BookOpenCheck, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Pre-Primary",
    age: "Age 3-6 Years",
    icon: <Baby className="w-8 h-8" />,
    description: "A playful and nurturing environment focused on early cognitive development and social skills.",
    features: ["Montessori Methods", "Experiential Learning", "Creative Arts"],
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Primary",
    age: "Grade 1-5",
    icon: <School className="w-8 h-8" />,
    description: "Building a strong foundation in core subjects while encouraging curiosity and critical thinking.",
    features: ["Integrated Curriculum", "Project Based Learning", "Language Proficiency"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Secondary",
    age: "Grade 6-10",
    icon: <BookOpenCheck className="w-8 h-8" />,
    description: "Nurturing analytical minds and preparing students for competitive challenges ahead.",
    features: ["CBSE Curriculum", "STEM Education", "Sports & Arts"],
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Higher Secondary",
    age: "Grade 11-12",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Specialized streams providing career-oriented education with professional guidance.",
    features: ["Science & Commerce", "Career Counseling", "University Prep"],
    color: "bg-emerald-100 text-emerald-600",
  },
];

export function Programs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Programs</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Excellence Across Every Grade</h3>
            <p className="text-lg text-slate-600">
              We offer a comprehensive educational journey designed to nurture every child's unique potential from their first day of school to graduation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {program.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{program.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary/70">{program.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/courses">
                    <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/5 group/btn">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
