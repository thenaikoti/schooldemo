import React from "react";
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Globe, Share2, Users } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                {SITE_CONFIG.shortName}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering students with a holistic education that blends academic excellence with character building and modern skills.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Users className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {SITE_CONFIG.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admissions" className="text-slate-400 hover:text-white transition-colors">
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  School Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Admissions Open</h3>
            <p className="text-slate-400 mb-6">
              Join Green Valley International School for the upcoming session. Schedule a campus visit today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all active:scale-95 text-center w-full"
            >
              Book a Campus Visit
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p className="text-accent font-bold mb-4 tracking-wider uppercase text-sm">
            Admissions Open • Academic Year 2026–27
          </p>
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved. CBSE Affiliation No: 1234567</p>
        </div>
      </div>
    </footer>
  );
}
