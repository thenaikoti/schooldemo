"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SITE_CONFIG } from "@/constants/site";

import { SectionHeader } from "@/components/SectionHeader";

export function EnquiryForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your enquiry! Our admissions team will contact you shortly.");
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden scroll-mt-20" id="enquiry">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <SectionHeader
              subtitle="Get in Touch"
              title="Take the First Step Toward Your Child's Future"
              description="Have questions about our curriculum, admissions, or campus life? Our dedicated team is here to guide you through every step."
              align="left"
              className="mb-12"
            />

            <div className="space-y-10">
              {[
                { icon: <MapPin className="w-7 h-7" />, title: "Visit Our Campus", details: SITE_CONFIG.contact.address },
                { icon: <Phone className="w-7 h-7" />, title: "Call for Inquiry", details: SITE_CONFIG.contact.phone },
                { icon: <Mail className="w-7 h-7" />, title: "Email Admissions", details: SITE_CONFIG.contact.email },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <div className="text-primary group-hover:text-white transition-colors">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 -z-10 rounded-full"></div>
            <Card className="shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 p-6 md:p-12 rounded-[2.5rem] bg-white lg:hover:skew-x-1 transition-all duration-700">
              <CardHeader className="px-0 pt-0 mb-8 border-b border-slate-100 pb-8">
                <CardTitle className="text-3xl font-black tracking-tight text-slate-900 leading-none mb-3">Admission Enquiry</CardTitle>
                <CardDescription className="text-slate-500 text-lg">Enter your details and our team will reach out within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="parentName" className="font-bold text-slate-700 ml-1">Parent Name</Label>
                      <Input id="parentName" placeholder="John Doe" required className="h-14 bg-slate-50/50 border-slate-200 rounded-xl focus:bg-white transition-all text-lg font-medium px-6" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="font-bold text-slate-700 ml-1">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="h-14 bg-slate-50/50 border-slate-200 rounded-xl focus:bg-white transition-all text-lg font-medium px-6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="childName" className="font-bold text-slate-700 ml-1">Candidate's Name</Label>
                      <Input id="childName" placeholder="Alex Doe" required className="h-14 bg-slate-50/50 border-slate-200 rounded-xl focus:bg-white transition-all text-lg font-medium px-6" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="grade" className="font-bold text-slate-700 ml-1">Proposed Grade</Label>
                      <select id="grade" className="flex h-14 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-6 py-2 text-lg font-medium focus:bg-white ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all">
                        <option>Pre-Primary</option>
                        <option>Primary (Grade 1-5)</option>
                        <option>Middle (Grade 6-10)</option>
                        <option>Senior (Grade 11-12)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="font-bold text-slate-700 ml-1">Your Message (Optional)</Label>
                    <Textarea id="message" placeholder="Ask us anything..." className="min-h-[140px] bg-slate-50/50 border-slate-200 rounded-xl focus:bg-white transition-all text-lg font-medium px-6 py-4 resize-none" />
                  </div>
                  <Button type="submit" className="w-full h-16 text-xl font-black group shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),_0.3)] bg-primary hover:bg-primary/90 transition-all active:scale-[0.98] rounded-2xl md:mt-4">
                    Send Enquiry Now
                    <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

