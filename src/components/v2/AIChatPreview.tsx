"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card, Button } from "./Primitives";
import { Bot, User, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const mockMessages = [
  { role: "assistant", text: "Hello! Welcome to Surya Academy. How can I assist you with your child's enrollment today?", delay: 500 },
  { role: "user", text: "What is the admission process for Grade 6?", delay: 2000 },
  { role: "assistant", text: "For Grade 6, we've made it simple: 1. Fill our online inquiry form, 2. Share previous school reports, and 3. Visit us for a campus interaction. Shall I help you schedule a visit?", delay: 4000 },
  { role: "user", text: "Yes, that would be great!", delay: 6000 },
  { role: "assistant", text: "Wonderful! I've sent the available visit slots to your WhatsApp. We look forward to meeting you soon.", delay: 8000 },
];

export function AIChatPreview() {
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);

  useEffect(() => {
    mockMessages.forEach((msg, i) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg]);
      }, msg.delay);
    });
  }, []);

  return (
    <SectionWrapper id="ai-assistant" className="bg-neutral-50 dark:bg-neutral-900/50">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Support for Every Parent
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-8 leading-tight">
            Instant Assistance, <br />
            <span className="text-primary">Anytime You Need It.</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed font-medium">
            Our smart assistant is here to help with your questions, from fee structures to campus visits, providing immediate support for your family's needs.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "Immediate answers to your questions",
              "Easy tour and interview scheduling",
              "Inclusive support for our community",
              "Connect with our admissions team effortlessly"
            ].map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-bold"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <Button size="lg" className="h-16 px-10 shadow-2xl shadow-primary/20">
            Experience Our Support
          </Button>
        </div>

        <div className="lg:w-1/2 w-full">
          <Card variant="glass" className="p-0 overflow-hidden border-neutral-200 dark:border-neutral-800 shadow-2xl">
            {/* Chat Header */}
            <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-neutral-900" />
                </div>
                <div>
                  <h4 className="font-black text-neutral-900 dark:text-white">Admissions Guide</h4>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-widest">Always Here to Help</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[350px] sm:h-[450px] overflow-y-auto p-4 sm:p-8 space-y-6 flex flex-col bg-neutral-50/30 dark:bg-neutral-950/30">
              <AnimatePresence>
                {visibleMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={cn(
                      "flex items-end gap-3 max-w-[85%]",
                      msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm",
                      msg.role === "user" ? "bg-neutral-900 text-white" : "bg-primary text-white"
                    )}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={cn(
                      "p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                      msg.role === "user" 
                        ? "bg-neutral-900 text-white rounded-br-none" 
                        : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-none border border-neutral-100 dark:border-neutral-700"
                    )}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Input Placeholder */}
            <div className="p-6 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl p-2 pl-4 border border-neutral-200 dark:border-neutral-800">
                <input 
                  type="text" 
                  placeholder="Type your question..." 
                  className="bg-transparent border-none outline-none text-sm w-full font-medium"
                  disabled
                />
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white opacity-50">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
