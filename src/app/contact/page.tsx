"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/v2/SectionWrapper";
import { Button, Card, FormInput } from "@/components/v2/Primitives";
import { cn } from "@/lib/utils";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  HeartHandshake,
  ArrowRight,
  Send
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-white dark:bg-neutral-950">
      {/* 1. HERO SECTION (CONVERSATION-FOCUSED) */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[100px] rounded-full -ml-48 -mb-48" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-600 mb-8 border border-emerald-500/20 shadow-sm shadow-emerald-500/5"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Admissions Team Available Now
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-black text-neutral-900 dark:text-white mb-8 leading-[0.95] tracking-tight"
              >
                Let's Build Your <br />
                <span className="text-primary italic">Child's Future.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-12 max-w-2xl"
              >
                We're more than just a school; we're a community dedicated to excellence. Reach out today for personal guidance on your child's educational journey.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="h-16 px-10 text-lg shadow-2xl shadow-primary/30 group" asChild>
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {SITE_CONFIG.contact.phone}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg bg-white/50 backdrop-blur-sm" asChild>
                  <a href="#inquiry-form">Fill Inquiry Form</a>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:w-2/5 relative"
            >
              <div className="aspect-square rounded-[4rem] bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden shadow-2xl border-8 border-white dark:border-neutral-800">
                <img 
                  src="/images/principal_portrait_1776796457936.png" 
                  alt="Contact Person" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-2xl font-black mb-1">Dr. Sarah Johnson</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Head of Admissions</p>
                </div>
              </div>
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white dark:bg-neutral-900 p-8 rounded-[2.5rem] shadow-2xl border border-neutral-100 dark:border-neutral-800 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-neutral-400 uppercase tracking-widest">Typical Response</p>
                    <p className="text-xl font-black text-neutral-900 dark:text-white">Under 5 Mins</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS (INTERACTIVE BLOCKS) */}
      <SectionWrapper className="bg-neutral-50 dark:bg-neutral-900/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Call Now", 
              desc: SITE_CONFIG.contact.phone, 
              icon: Phone, 
              color: "bg-primary",
              highlight: true 
            },
            { 
              title: "WhatsApp", 
              desc: "Instant Chat Support", 
              icon: MessageCircle, 
              color: "bg-emerald-500",
              highlight: false 
            },
            { 
              title: "Visit Campus", 
              desc: "Personal Tour", 
              icon: MapPin, 
              color: "bg-orange-500",
              highlight: false 
            },
            { 
              title: "Email Us", 
              desc: SITE_CONFIG.contact.email, 
              icon: Mail, 
              color: "bg-purple-500",
              highlight: false 
            },
          ].map((item, i) => {
            const Icon = item.icon;
            const href = item.title === "Call Now" ? `tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}` : 
                         item.title === "WhatsApp" ? `https://wa.me/${SITE_CONFIG.contact.whatsapp}` :
                         item.title === "Email Us" ? `mailto:${SITE_CONFIG.contact.email}` : "#inquiry-form";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={href} className="block group">
                  <div className={cn(
                    "w-full text-left p-10 rounded-[3rem] transition-all duration-500 border relative overflow-hidden",
                    item.highlight 
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-2xl shadow-black/20 group-hover:-translate-y-2" 
                      : "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-neutral-100 dark:border-neutral-800 group-hover:shadow-2xl group-hover:-translate-y-2"
                  )}>
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                      item.highlight ? "bg-primary text-white" : "bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight">{item.title}</h3>
                    <p className={cn(
                      "text-lg font-medium transition-colors break-words relative z-10",
                      item.highlight ? "text-neutral-300" : "text-neutral-600 dark:text-neutral-300"
                    )}>
                      {item.desc}
                    </p>
                    <div className={cn(
                      "mt-8 inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest text-primary"
                    )}>
                      Connect Now <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 3. TRUST SECTION (NEW) */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight tracking-tight">
              Why Parents <br />
              <span className="text-primary italic">Reach Out to Us.</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium">
              We understand that choosing a school is a significant decision. We're here to make it transparent and easy.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <p className="text-3xl font-black text-primary">98%</p>
              <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Satisfaction</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <p className="text-3xl font-black text-primary">24h</p>
              <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Response Time</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: "Quick Response", 
              desc: "Get answers to your queries within minutes, not days.", 
              icon: Zap,
              color: "text-amber-500"
            },
            { 
              title: "Personal Guidance", 
              desc: "One-on-one sessions with our expert admissions counselors.", 
              icon: HeartHandshake,
              color: "text-rose-500"
            },
            { 
              title: "Transparent Process", 
              desc: "No hidden fees or complex procedures. Everything is clear.", 
              icon: ShieldCheck,
              color: "text-emerald-500"
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 group"
            >
              <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center transition-all duration-500 group-hover:bg-white dark:group-hover:bg-neutral-800 group-hover:shadow-xl">
                <item.icon className={cn("w-8 h-8", item.color)} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-neutral-900 dark:text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. LOCATION SECTION (RESTRUCTURED) */}
      <SectionWrapper className="bg-neutral-50 dark:bg-neutral-900/30">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight">
              Visit Our <br />
              <span className="text-primary italic">Global Campus.</span>
            </h2>
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-black text-neutral-400 uppercase tracking-widest mb-2">Primary Address</p>
                  <p className="text-2xl font-black text-neutral-900 dark:text-white mb-2 leading-tight">
                    {SITE_CONFIG.contact.address}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-black text-primary hover:bg-transparent">
                    Get Directions on Google Maps →
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-black text-neutral-400 uppercase tracking-widest mb-2">Visiting Hours</p>
                  <p className="text-2xl font-black text-neutral-900 dark:text-white">Mon – Sat: 8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* 5. IMMEDIATE ASSISTANCE BLOCK */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[3rem] bg-neutral-950 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32 transition-all duration-700 group-hover:scale-150" />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                <div>
                  <p className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Admissions Helpline Active
                  </p>
                  <h3 className="text-3xl font-black mb-2 tracking-tight">Need Help Now?</h3>
                  <p className="text-neutral-400 font-medium">Available for urgent enrollment queries.</p>
                </div>
                <Button size="lg" className="h-16 px-10 text-lg shadow-xl shadow-primary/20" asChild>
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 w-full h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-neutral-900 bg-white dark:bg-neutral-900"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.921876523992!2d77.5936!3d12.9724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzIwLjEiTiA3N8KwMzUnMzcuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="School Location Map"
              className="grayscale-[0.1] contrast-[1.1]"
            ></iframe>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 6. FINAL CTA + FORM (CONVERSION FOCUS) */}
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              Request Your <br />
              <span className="text-primary italic">2026 Prospectus.</span>
            </h2>
            <div className="p-8 rounded-[2.5rem] bg-amber-500/10 border border-amber-500/20 mb-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-amber-500 flex items-center justify-center text-white shrink-0">
                <Zap className="w-8 h-8 fill-current" />
              </div>
              <div>
                <p className="text-amber-600 font-black uppercase tracking-widest text-sm mb-1">Limited Intake</p>
                <p className="text-xl font-black text-neutral-900 dark:text-white tracking-tight">Seats filling fast for 2026–27 intake.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {[
                "Instant Digital Prospectus via WhatsApp",
                "Direct Access to Admissions Counselors",
                "Priority Invite to Campus Open Days",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full" id="inquiry-form">
            <Card className="p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-primary/5 border-none bg-white dark:bg-neutral-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              
              <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-2">Get Personal Guidance</h3>
              <p className="text-neutral-500 mb-10 font-medium text-lg">Fill in the details below to start your journey.</p>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormInput label="Parent's Name" placeholder="John Doe" required />
                  <FormInput label="WhatsApp Number" type="tel" placeholder="+91 00000 00000" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormInput label="Email Address" type="email" placeholder="john@example.com" required />
                  <div className="space-y-2">
                    <label className="text-sm font-black text-neutral-700 dark:text-neutral-300 ml-1">Grade Applying For</label>
                    <select className="flex h-14 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:border-primary font-bold">
                      <option>Select Grade</option>
                      <option>Pre-Primary</option>
                      <option>Primary School</option>
                      <option>Secondary School</option>
                      <option>Higher Secondary</option>
                    </select>
                  </div>
                </div>
                
                <Button size="lg" className="w-full h-20 text-xl shadow-2xl shadow-primary/30 group bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100">
                  Connect via WhatsApp
                  <Send className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                
                <p className="text-center text-xs text-neutral-400 font-bold uppercase tracking-widest">
                  🔒 Data secure • 100% Privacy guaranteed
                </p>
              </form>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
