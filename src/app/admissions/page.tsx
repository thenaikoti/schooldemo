"use client"; 

import React from "react";
import { PageLayout } from "@/components/v2/PageLayout";
import { Admissions as AdmissionsProcess } from "@/components/v2/Admissions";
import { ContactForm } from "@/components/v2/ContactForm";
import { SectionWrapper } from "@/components/v2/SectionWrapper";
import { Card } from "@/components/v2/Primitives";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Calendar, FileText, ClipboardCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AdmissionsPage() {
  return (
    <PageLayout
      title="Join Our Elite Community."
      subtitle="Embark on a journey of discovery and excellence. Admissions are now open for the Academic Session 2026-27."
    >
      {/* Process Section */}
      <AdmissionsProcess />

      {/* Requirements & Dates */}
      <SectionWrapper className="bg-white dark:bg-neutral-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Requirements */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-12 h-1 bg-primary mb-8"
            />
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight">
              Registration <br />
              <span className="text-primary italic">Requirements.</span>
            </h2>
            <div className="space-y-4">
              {[
                "Birth Certificate of the child (Original & Copy)",
                "Previous 2 years' Academic Progress Reports",
                "Transfer Certificate (TC) from the previous school",
                "6 Passport size photographs of the child",
                "Aadhar Card of the child and parents",
                "Vaccination records & Medical Fitness Certificate",
              ].map((req, i) => (
                <motion.div
                  key={req}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">{req}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-8 border-l-4 border-primary pl-4 tracking-tight">Academic Year 2026-27</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { event: "Registration Commences", date: "October 1st, 2025", icon: ClipboardCheck },
                  { event: "Interactive Sessions", date: "Starts Nov 15th, 2025", icon: Calendar },
                  { event: "First Selection List", date: "Dec 10th, 2025", icon: FileText },
                  { event: "New Session Starts", date: "April 5th, 2026", icon: CheckCircle2 },
                ].map((item, i) => (
                  <Card key={item.event} className="p-6 sm:p-8 border-none bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500">
                     <item.icon className="text-primary w-6 h-6 mb-4" />
                     <p className="text-xs uppercase tracking-widest font-black text-neutral-400 mb-2">{item.event}</p>
                     <p className="text-xl font-black text-neutral-900 dark:text-white tracking-tight">{item.date}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[2.5rem] bg-amber-500 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
                 <AlertCircle className="w-24 h-24" />
               </div>
               <h4 className="text-xl font-black mb-2 tracking-tight">Important Notice</h4>
               <p className="font-bold opacity-90 leading-relaxed">
                 Seats are filling rapidly for the upcoming session. We recommend early registration to secure your child's placement.
               </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper className="bg-neutral-50 dark:bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">Admission FAQs</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium">Common questions answered for prospective parents.</p>
          </div>
          <Accordion className="w-full space-y-4">
            {[
              { q: "What is the age criteria for Pre-Primary admission?", a: "For Nursery, the child should be 3 years of age as on 31st March of the year of admission." },
              { q: "Do you provide school transport?", a: "Yes, we have a fleet of Air-Conditioned, GPS-enabled buses covering most parts of the city." },
              { q: "What is the teacher-student ratio?", a: "For Pre-Primary, we maintain a 1:15 ratio, and for higher classes, it's 1:25." },
              { q: "Are there scholarships for meritorious students?", a: "Yes, we offer partial and full scholarships to students who excel in academics or sports." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none px-4 sm:px-8 py-2 rounded-[1.5rem] bg-white dark:bg-neutral-900 shadow-sm">
                <AccordionTrigger className="text-left font-black text-lg sm:text-xl py-6 hover:no-underline tracking-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400 text-lg font-medium leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Form Integration */}
      <ContactForm />
    </PageLayout>
  );
}
