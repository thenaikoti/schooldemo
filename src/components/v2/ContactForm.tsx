"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card, Button, FormInput } from "./Primitives";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-600 mb-8"
          >
            <Clock className="w-4 h-4" />
            Limited Seats for 2026-27 Intake
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-[1.1]">
            Secure Your Child's <br />
            <span className="text-primary italic">Global Future.</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-lg font-medium">
            Join the most trusted educational institution in the region. Our admissions counselors are ready to guide you.
          </p>

          <div className="space-y-10 mb-12">
            {[
              { icon: Phone, label: "Immediate Assistance", val: "+91 98765 43210", action: "Call Now" },
              { icon: Mail, label: "Detailed Enquiries", val: "admissions@suryaacademy.edu.in", action: "Email Us" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-neutral-50 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:rotate-6">
                  <item.icon className="w-7 h-7 text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-neutral-900 mb-1">{item.val}</p>
                  <button className="text-sm font-bold text-primary hover:underline">{item.action} →</button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-[2rem] bg-neutral-50 border border-neutral-100 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-neutral-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="parent" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-neutral-600">
              Joined by <span className="text-neutral-900 font-black">120+ parents</span> this week
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 w-full">
          <Card className="p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-none bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            
            <h3 className="text-3xl font-black text-neutral-900 mb-2">Request Prospectus</h3>
            <p className="text-neutral-500 mb-10 font-medium">Fill in the details below to receive our 2026 brochure.</p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormInput label="Parent's Full Name" placeholder="John Doe" required />
                <FormInput label="WhatsApp Number" type="tel" placeholder="+91 00000 00000" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormInput label="Email Address" type="email" placeholder="john@example.com" required />
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 ml-1">Grade Applying For</label>
                  <select className="flex h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10">
                    <option>Select Grade</option>
                    <option>Pre-Primary</option>
                    <option>Grade 1-5</option>
                    <option>Grade 6-10</option>
                    <option>Grade 11-12</option>
                  </select>
                </div>
              </div>
              
              <Button size="lg" className="w-full h-16 text-lg shadow-2xl shadow-primary/30 group">
                Send Prospectus via WhatsApp
                <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              
              <p className="text-center text-xs text-neutral-400 font-medium">
                🔒 Your data is secure and will only be used for admission purposes.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
