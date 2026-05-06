"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

import { SectionHeader } from "@/components/SectionHeader";

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <SectionHeader
                subtitle="Our Presence"
                title="Visit Our Campus Today"
                description="We are located in a peaceful, green environment that is ideal for learning and growth. Our campus is easily accessible from all parts of the city."
                align="left"
                className="mb-12"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 mb-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <MapPin className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 tracking-tight text-xl mb-1">Main Campus</h4>
                      <p className="text-base text-slate-500 font-medium">{SITE_CONFIG.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <Phone className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 tracking-tight text-xl mb-1">Direct Line</h4>
                      <p className="text-base text-slate-500 font-medium">{SITE_CONFIG.contact.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <Mail className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 tracking-tight text-xl mb-1">Official Email</h4>
                      <p className="text-base text-slate-500 font-medium">{SITE_CONFIG.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <Clock className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 tracking-tight text-xl mb-1">Office Hours</h4>
                      <p className="text-base text-slate-500 font-medium">Mon - Sat: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-[500px] lg:h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.921876523992!2d77.5936!3d12.9724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzIwLjEiTiA3N8KwMzUnMzcuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="School Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

