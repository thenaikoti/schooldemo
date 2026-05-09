"use client";
import Link from "next/link";

import { SectionWrapper } from "./SectionWrapper";
import { Card, Button } from "./Primitives";
import { Sparkles, MessageSquare, Calendar, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function SmartAdmissions() {
  return (
    <SectionWrapper id="admissions" className="bg-neutral-900 text-white rounded-[2rem] sm:rounded-[4rem] mx-2 sm:mx-4 my-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-xs font-black text-primary mb-8 backdrop-blur-md uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3" />
            Modern Digital Experience
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            A Nurturing <br />
            <span className="text-primary italic">Admissions Experience.</span>
          </h2>
          <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-12">
            We have simplified the admission journey to ensure you spend less time on paperwork and more time planning your child's future.
          </p>

          <div className="space-y-8 mb-12">
            {[
              { icon: MessageSquare, title: "Instant Support", desc: "Get immediate answers to common admissions queries anytime." },
              { icon: Calendar, title: "Campus Visits", desc: "Easily schedule a tour to experience our vibrant community." },
              { icon: ClipboardCheck, title: "Clear Milestones", desc: "Follow your child's application progress with transparency." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0 border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-neutral-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/admissions" passHref legacyBehavior>
              <Button size="lg" className="h-16 px-10 text-lg shadow-2xl shadow-primary/20">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-white/10 hover:bg-white hover:text-neutral-900">
                Inquire via WhatsApp
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Subtle Visual of a Chat interface or a modern app */}
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square xl:aspect-[4/5] bg-neutral-800 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
             {/* Mock AI Chat Interface */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
             <div className="p-6 sm:p-10 h-full flex flex-col">
               <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                 <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                   <Sparkles className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <p className="font-black text-sm uppercase tracking-widest">Admissions Guide</p>
                   <p className="text-xs text-emerald-500 font-bold">Online Now</p>
                 </div>
               </div>

               <div className="space-y-6 flex-1">
                 <div className="bg-white/5 p-4 sm:p-6 rounded-[2rem] rounded-tl-none border border-white/5 max-w-[85%]">
                    <p className="text-sm font-medium leading-relaxed">"Hello! I can help you with fee structures, admission dates, or booking a campus visit. What would you like to know?"</p>
                 </div>
                 <div className="bg-primary p-4 sm:p-6 rounded-[2rem] rounded-tr-none ml-auto max-w-[85%]">
                    <p className="text-sm font-medium leading-relaxed text-white">"What are the documents required for Grade 1?"</p>
                 </div>
                 <div className="bg-white/5 p-4 sm:p-6 rounded-[2rem] rounded-tl-none border border-white/5 max-w-[85%]">
                    <p className="text-sm font-medium leading-relaxed">"For Grade 1, we require: 1. Birth Certificate, 2. Transfer Certificate, 3. Previous 2 years academic records. Would you like me to email a checklist?"</p>
                 </div>
               </div>

               <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                 <p className="text-xs text-neutral-600 font-black uppercase tracking-widest">Nurturing connection with smart technology</p>
                 <ArrowRight className="w-5 h-5 text-neutral-600" />
               </div>
             </div>
          </div>

          {/* Decorative floating element */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-primary text-white shadow-2xl border border-white/10 hidden xl:block"
          >
            <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-1">Avg Response Time</p>
            <p className="text-2xl font-black">2.4 Seconds</p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
