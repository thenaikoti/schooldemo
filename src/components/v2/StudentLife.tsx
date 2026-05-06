"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Music, Trophy, Users } from "lucide-react";

const activities = [
  { id: 1, src: "/images/annual_sports_day_event_1776796621655.png", title: "Sports Day", span: "row-span-2 col-span-2" },
  { id: 2, src: "/images/smart_classroom_1776796474806.png", title: "Digital Arts", span: "row-span-1 col-span-1" },
  { id: 3, src: "/images/pre_primary_kids_1776796536863.png", title: "Early Learning", span: "row-span-1 col-span-1" },
  { id: 4, src: "/images/secondary_science_lab_1776796589067.png", title: "Science Expo", span: "row-span-1 col-span-2" },
];

export function StudentLife() {
  return (
    <SectionWrapper id="student-life" className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight tracking-tight">
            Vibrant <br />
            <span className="text-primary italic">Campus Life.</span>
          </h2>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            Beyond academics, our students engage in a rich array of activities that foster teamwork, creativity, and lasting friendships.
          </p>
        </div>
        
        <div className="flex gap-10">
          {[
            { label: "Clubs", val: "25+", icon: Users },
            { label: "Events", val: "50+", icon: Trophy },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary mb-3 mx-auto">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-black text-neutral-900 leading-none">{item.val}</p>
              <p className="text-[10px] font-black uppercase text-neutral-400 tracking-widest mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
        {activities.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-[2.5rem] overflow-hidden group bg-neutral-100 ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <h4 className="text-2xl font-black text-white tracking-tight">{item.title}</h4>
              <p className="text-white/70 font-medium text-sm mt-2">Discover more →</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
