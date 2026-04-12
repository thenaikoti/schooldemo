"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SITE_CONFIG } from "@/constants/site";

export function EnquiryForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your enquiry! Our admissions team will contact you shortly.");
  };

  return (
    <section className="py-24 bg-slate-50 scroll-mt-20" id="enquiry">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Enquire Now</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6Leading-tight">Take the First Step Toward Your Child's Bright Future</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions about our curriculum, admissions, or campus? Fill out the form, and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-500">{SITE_CONFIG.contact.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-500">{SITE_CONFIG.contact.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500">{SITE_CONFIG.contact.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-none p-4 md:p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">Admission Enquiry</CardTitle>
                <CardDescription>Enter your details below and we'll reach out to you.</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent Name</Label>
                      <Input id="parentName" placeholder="Your Full Name" required className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 00000 00000" required className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child Name</Label>
                      <Input id="childName" placeholder="Candidate's Name" required className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade/Class</Label>
                      <select id="grade" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>Pre-Primary</option>
                        <option>Grade 1-5</option>
                        <option>Grade 6-10</option>
                        <option>Grade 11-12 (Science)</option>
                        <option>Grade 11-12 (Commerce)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Any Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] bg-slate-50 border-slate-200" />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg font-semibold group shadow-lg">
                    Submit Enquiry
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
