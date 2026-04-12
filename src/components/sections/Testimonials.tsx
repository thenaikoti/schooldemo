"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mr. Rajesh Sharma",
    role: "Parent of Grade 4 Student",
    content: "The holistic development focus at Green Valley is truly remarkable. My son has not only improved academically but has also become more confident and socially aware.",
    avatar: "https://i.pravatar.cc/150?u=parent1",
  },
  {
    name: "Ms. Priya Kulkarni",
    role: "Parent of Grade 8 Student",
    content: "The teaching faculty is exceptional. They go beyond the textbooks to ensure every child understands the concepts. The smart classrooms and labs are world-class.",
    avatar: "https://i.pravatar.cc/150?u=parent2",
  },
  {
    name: "Dr. Ananya Reddy",
    role: "Parent of Grade 2 Student",
    content: "I am highly impressed with the school's focus on safety and individual attention. The communication between teachers and parents is very transparent.",
    avatar: "https://i.pravatar.cc/150?u=parent3",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6Leading-tight">What Our Parents Say</h3>
            <p className="text-lg text-slate-600">
              Hear from the families who have trusted us with their child's education and future.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
