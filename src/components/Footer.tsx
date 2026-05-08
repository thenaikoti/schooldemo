"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, ArrowRight, Camera, Play, Users, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { Button } from "./v2/Primitives";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-xl text-white">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                {SITE_CONFIG.shortName}
              </span>
            </Link>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed">
              Cultivating an elite learning environment where global innovation meets traditional values to shape the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              {[Camera, Play, Users, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-10">Academics</h3>
            <ul className="space-y-6">
              {[
                { name: "Our Programs", href: "/courses" },
                { name: "Admission Policy", href: "/admissions" },
                { name: "School Calendar", href: "/gallery" },
                { name: "Student Life", href: "/about" },
                { name: "Faculty Directory", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white font-bold transition-all hover:translate-x-2 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-10">Contact Us</h3>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <span className="text-neutral-400 font-medium leading-relaxed">
                  {SITE_CONFIG.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <span className="text-neutral-400 font-medium">{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center gap-5">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span className="text-neutral-400 font-medium">{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10">
            <h3 className="text-2xl font-black mb-6 tracking-tight">Experience Our Campus</h3>
            <p className="text-neutral-400 font-medium mb-10 leading-relaxed">
              Book a personalized tour and see our state-of-the-art facilities.
            </p>
            <Link href="/contact" className="block">
              <Button size="lg" className="w-full h-16 shadow-xl shadow-primary/20 group">
                Book Visit
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500 text-sm font-bold uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <div className="flex h-2 w-2 rounded-full bg-primary" />
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}</p>
          </div>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
