"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe, Share2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/constants/site";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        subtitle="We're here to answer your questions and welcome you to our campus. Reach out through any of the channels below."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: <MapPin className="w-8 h-8" />, title: "Our Campus", desc: SITE_CONFIG.contact.address, color: "bg-blue-50 text-blue-600" },
              { icon: <Phone className="w-8 h-8" />, title: "Call Us", desc: SITE_CONFIG.contact.phone, color: "bg-orange-50 text-orange-600" },
              { icon: <Mail className="w-8 h-8" />, title: "Email Us", desc: SITE_CONFIG.contact.email, color: "bg-emerald-50 text-emerald-600" },
              { icon: <Clock className="w-8 h-8" />, title: "Visit Hours", desc: "Mon - Sat: 8 AM - 4 PM", color: "bg-purple-50 text-purple-600" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 text-center p-8">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Connect With Us</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Stay updated with the latest news, events, and student achievements at {SITE_CONFIG.shortName} by following us on social media.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <Users />, name: "Community" },
                    { icon: <Globe />, name: "Connect" },
                    { icon: <Share2 />, name: "Share" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                  <Phone className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Immediate Assistance?</h3>
                <p className="text-primary-foreground/70 mb-8 max-w-sm">
                  Our admissions helpline is available during working hours for urgent queries.
                </p>
                <div className="flex flex-col gap-4">
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/ /g, '')}`} className="flex items-center gap-3 text-xl font-bold hover:text-accent transition-colors">
                    <Phone className="w-6 h-6" />
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noopener" className="flex items-center gap-3 text-xl font-bold hover:text-accent transition-colors">
                    <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center">
                       <span className="text-[10px] transform scale-75">WA</span>
                    </div>
                    WhatsApp Admissions
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.921876523992!2d77.5936!3d12.9724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzIwLjEiTiA3N8KwMzUnMzcuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="School Location Map"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reused Enquiry Form for comprehensive contact options */}
      <section id="enquiry">
        <EnquiryForm />
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-white text-center pb-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6Leading-tight tracking-tight">Still unsure? Visit our campus and experience it yourself.</h2>
            <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
              We host personalized campus tours every Saturday between 10 AM and 2 PM. Come see our students in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="#enquiry">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-16 px-10 text-xl font-bold shadow-2xl transition-all hover:scale-105">Book a Visit</Button>
              </Link>
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/ /g, '')}`}>
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all hover:scale-105">Call Now</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
