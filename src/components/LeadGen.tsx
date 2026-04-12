"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function LeadGen() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    // Check session storage to see if modal has been shown
    const sessionShown = sessionStorage.getItem("lead_gen_shown");
    if (sessionShown) {
      setHasShownModal(true);
      return;
    }

    // Timer trigger: 6 seconds
    const timer = setTimeout(() => {
      triggerModal();
    }, 6000);

    // Scroll trigger: 30%
    const handleScroll = () => {
      if (hasShownModal) return;
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30) {
        triggerModal();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShownModal]);

  const triggerModal = () => {
    if (hasShownModal) return;
    setShowModal(true);
    setHasShownModal(true);
    sessionStorage.setItem("lead_gen_shown", "true");
  };

  const handleManualEnquiry = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Persistent Floating Button */}
      <motion.button
        onClick={handleManualEnquiry}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-40 bg-accent text-white p-4 rounded-full shadow-2xl transition-all flex items-center justify-center group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MessageSquare className="w-6 h-6 relative z-10" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap relative z-10">
          Enquire Now
        </span>
      </motion.button>

      {/* Enquiry Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px] rounded-3xl p-8 border-none shadow-2xl">
          <DialogHeader className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
              <MessageSquare className="text-primary w-6 h-6" />
            </div>
            <DialogTitle className="text-2xl font-bold">Fast-Track Admissions</DialogTitle>
            <DialogDescription className="text-slate-500">
              Admissions are closing soon for 2026-27. Leave your details and we'll call you back.
            </DialogDescription>
          </DialogHeader>
          
          <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); alert("Enquiry Sent!"); setShowModal(false); }}>
            <div className="space-y-2">
              <Label htmlFor="modal-name">Parent Name</Label>
              <Input id="modal-name" placeholder="Full Name" required className="bg-slate-50 border-slate-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-phone">Phone Number</Label>
              <Input id="modal-phone" type="tel" placeholder="+91 00000 00000" required className="bg-slate-50 border-slate-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-grade">Grade for Admission</Label>
              <select id="modal-grade" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option>Pre-Primary</option>
                <option>Grade 1-5</option>
                <option>Grade 6-10</option>
                <option>Grade 11-12</option>
              </select>
            </div>
            <Button type="submit" className="w-full h-12 text-lg font-semibold group shadow-lg mt-4">
              Send Enquiry
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
