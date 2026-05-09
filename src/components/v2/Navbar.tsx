"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Primitives";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl py-4 border-neutral-200 dark:border-neutral-800"
          : "bg-transparent py-8 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-xl text-white transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 dark:text-white">
            Surya Academy
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all hover:text-primary relative group",
                pathname === link.href
                  ? "text-primary"
                  : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/contact" passHref legacyBehavior>
            <Button variant="premium" size="sm" className="rounded-full shadow-xl hover:shadow-primary/20">
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 transition-all active:scale-90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-2xl font-black tracking-tight flex items-center justify-between group",
                      pathname === link.href ? "text-primary" : "text-neutral-900 dark:text-white"
                    )}
                  >
                    {link.name}
                    <ArrowRight className={cn("w-6 h-6 transition-transform group-hover:translate-x-2", pathname === link.href ? "opacity-100" : "opacity-0")} />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-neutral-100 dark:border-neutral-800"
              >
                <Link href="/admissions" passHref legacyBehavior>
                  <Button variant="premium" className="w-full h-14 text-lg">
                    Apply Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
