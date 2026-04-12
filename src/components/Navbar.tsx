"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg transition-transform group-hover:scale-110">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              scrolled ? "text-primary" : "text-primary md:text-white"
            )}>
              {SITE_CONFIG.shortName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === link.href
                    ? "text-accent"
                    : scrolled ? "text-muted-foreground" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/admissions">
              <Button variant="outline" className={cn(
                "hidden lg:flex transition-all hover:scale-105",
                !scrolled && "bg-transparent text-white border-white hover:bg-white hover:text-primary"
              )}>
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" variant="accent" className="hidden sm:flex shadow-lg hover:scale-105">
                Enquiry Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-md",
              scrolled ? "text-primary" : "text-primary md:text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {SITE_CONFIG.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium px-2 py-1",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="/admissions" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Apply for Admission</Button>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Contact Support</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
