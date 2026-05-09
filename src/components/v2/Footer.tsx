"use client";

import { Globe, Camera, Play, Users, GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 sm:pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-16 mb-16 sm:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-4 text-white">
              <div className="bg-primary p-3 rounded-2xl shadow-xl shadow-primary/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tighter">Surya Academy</span>
            </Link>
            <p className="text-lg leading-relaxed max-w-sm">
              Shaping future-ready leaders through a unique blend of academic excellence and emotional intelligence.
            </p>
            <div className="flex gap-6">
              {[Camera, Play, Users, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="text-neutral-600 hover:text-primary transition-all transform hover:scale-110 hover:-translate-y-1">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Institution</h4>
            <ul className="space-y-6">
              {[
                { name: "Our Vision", href: "/about" },
                { name: "Leadership", href: "/about" },
                { name: "Admissions", href: "/admissions" },
                { name: "Academic Year", href: "/admissions" },
                { name: "Contact Us", href: "/contact" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Experience</h4>
            <ul className="space-y-6">
              {["Student Life", "Sports Academy", "Arts & Culture", "STEM Lab", "Global Alumni"].map(link => (
                <li key={link}>
                  <Link href="/courses" className="text-sm font-bold hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Get in Touch</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm font-medium leading-relaxed">123 Academic Pl, Education Hub, Bangalore, Karnataka 560001</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-bold">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-bold break-all sm:break-normal">admissions@suryaacademy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-600">
            © 2026 Surya Academy. Excellence in Education.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map(link => (
              <Link key={link} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">{link}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
