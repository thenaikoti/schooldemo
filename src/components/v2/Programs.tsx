"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { motion } from "framer-motion";
import { Microscope, Palette, Trophy, Users, Laptop, Globe } from "lucide-react";

const programs = [
  {
    title: "STEM Innovation",
    desc: "A hands-on approach to Science, Technology, Engineering, and Math, fostering analytical thinking.",
    icon: Microscope,
    tags: ["Robotics", "Coding", "Research"]
  },
  {
    title: "Arts & Humanities",
    desc: "Developing creative expression and cultural awareness through visual arts, music, and literature.",
    icon: Palette,
    tags: ["Drama", "Fine Arts", "Music"]
  },
  {
    title: "Sports & Athletics",
    desc: "Promoting physical fitness, teamwork, and discipline through competitive and recreational sports.",
    icon: Trophy,
    tags: ["Swimming", "Football", "Yoga"]
  },
  {
    title: "Leadership & Civic",
    desc: "Empowering students to lead with empathy and contribute meaningfully to the community.",
    icon: Users,
    tags: ["MUN", "E-Cell", "Volunteer"]
  },
  {
    title: "Digital Literacy",
    desc: "Equipping students with essential digital skills for the future-ready professional world.",
    icon: Laptop,
    tags: ["AI Basics", "Design", "Safety"]
  },
  {
    title: "Global Languages",
    desc: "Mastering multiple languages to communicate effectively in a multicultural global society.",
    icon: Globe,
    tags: ["French", "Spanish", "Mandarin"]
  }
];

export function Programs() {
  return (
    <SectionWrapper id="academics" className="bg-neutral-50">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight tracking-tight">
          Academic <br />
          <span className="text-primary italic">Excellence.</span>
        </h2>
        <p className="text-xl text-neutral-600 font-medium leading-relaxed">
          Our diverse curriculum is designed to challenge students while nurturing their unique talents and interests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full p-6 sm:p-10 bg-white border-neutral-100 group">
              <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <prog.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4">{prog.title}</h3>
              <p className="text-neutral-500 font-medium leading-relaxed mb-8">
                {prog.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {prog.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
