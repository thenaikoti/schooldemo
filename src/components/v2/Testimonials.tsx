"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Ananya Iyer",
    role: "Parent of Grade 8 Student",
    text: "The transition from our previous school was seamless. What impressed me most was the personalized attention and the way they integrated modern technology without losing the human touch.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Parent of Pre-Primary Student",
    text: "Surya Academy's early childhood program is exceptional. My child looks forward to school every day. The communication through their app is instant and transparent.",
    rating: 5
  },
  {
    name: "Sonia Fernandez",
    role: "Parent of Grade 11 Student",
    text: "Preparing for international universities seemed daunting, but the counseling team here provided clear direction. The future-ready curriculum truly prepares them for reality.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight tracking-tight">
          Voices of our <br />
          <span className="text-primary italic">Community.</span>
        </h2>
        <p className="text-xl text-neutral-600 font-medium leading-relaxed">
          Hear from the parents who have entrusted their children's education and future to us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, i) => (
          <motion.div
            key={test.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full p-6 sm:p-10 bg-neutral-50 border-neutral-100 flex flex-col hover:bg-white transition-all duration-500">
              <div className="flex gap-1 mb-8">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <p className="text-lg text-neutral-600 font-medium leading-relaxed mb-10 italic flex-1">
                "{test.text}"
              </p>
              <div>
                <h4 className="text-xl font-black text-neutral-900 leading-none mb-1">{test.name}</h4>
                <p className="text-xs font-black uppercase text-neutral-400 tracking-widest">{test.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
