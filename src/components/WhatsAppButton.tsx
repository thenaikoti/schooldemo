"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group border-2 border-white/20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute -inset-1 bg-[#25D366] rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity animate-pulse"></div>
      <MessageCircle className="w-6 h-6 relative z-10" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap relative z-10">
        Chat with Admissions Team
      </span>
    </motion.a>
  );
}
