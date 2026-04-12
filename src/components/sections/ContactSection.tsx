"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Location</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8Leading-tight">Visit Our Campus Today</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We are located in a peaceful, green environment that is ideal for learning and growth. Our campus is easily accessible from all parts of the city.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900">Address</h4>
                      <p className="text-sm text-slate-500">{SITE_CONFIG.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-sm text-slate-500">{SITE_CONFIG.contact.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-sm text-slate-500">{SITE_CONFIG.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900">Office Hours</h4>
                      <p className="text-sm text-slate-500">Mon - Sat: 8:00 AM - 4:00 PM</p>
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
              viewport={{ once: true }}
              className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.921876523992!2d77.5936!3d12.9724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzIwLjEiTiA3N8KwMzUnMzcuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="School Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
