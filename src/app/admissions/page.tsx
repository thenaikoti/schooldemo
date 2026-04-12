"use client";

import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ClipboardCheck, Calendar, UserCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
  "Birth Certificate of the child (Original & Copy)",
  "Previous 2 years' Academic Progress Reports",
  "Transfer Certificate (TC) from the previous school",
  "6 Passport size photographs of the child",
  "Aadhar Card of the child and parents",
  "Vaccination records & Medical Fitness Certificate",
];

const dates = [
  { event: "Registration Commences", date: "October 1st, 2025" },
  { event: "Interactive Sessions", date: "Starts November 15th, 2025" },
  { event: "First Selection List", date: "December 10th, 2025" },
  { event: "New Session Starts", date: "April 5th, 2026" },
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Join Our Community"
        subtitle="Embark on a journey of discovery and excellence. Admissions are now open for the Academic Session 2026-27."
      />

      {/* Urgency Banner */}
      <div className="bg-orange-500 text-white py-4 shadow-inner relative z-10">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <AlertCircle className="w-5 h-5 animate-pulse" />
          <span className="font-bold tracking-wide text-sm md:text-base uppercase underline-offset-4 decoration-2">
            Seats filling fast for 2026–27 batch • Limited Vacancies
          </span>
        </div>
      </div>

      {/* Guide Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Guidance</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Admission Process</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We seek to enroll students who will benefit most from our rigorous academic program and who will contribute to our vibrant school community.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { step: "Step 1: Initial Enquiry", desc: "Submit an online enquiry or visit the school campus for a prospectus.", icon: <FileText /> },
                  { step: "Step 2: Documentation", desc: "Submit the registration form along with all the required documents.", icon: <ClipboardCheck /> },
                  { step: "Step 3: Assessment", desc: "Evaluation of academic proficiency and a friendly interaction session.", icon: <UserCheck /> },
                  { step: "Step 4: Admission Grant", desc: "Payment of fees and completion of admission formalities.", icon: <CheckCircle2 /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.step}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              {/* Requirements */}
              <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                  <ClipboardCheck className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <AlertCircle className="text-accent" />
                  Required Documents
                </h3>
                <ul className="space-y-4">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Dates */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">Important Dates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dates.map((item) => (
                    <div key={item.event} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                       <Calendar className="text-primary w-5 h-5" />
                       <p className="text-xs uppercase tracking-wider font-bold text-slate-400">{item.event}</p>
                       <p className="text-lg font-bold text-slate-800">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Integration */}
      <EnquiryForm />
      
      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg py-6">What is the age criteria for Pre-Primary admission?</AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">
                For Nursery, the child should be 3 years of age as on 31st March of the year of admission. Correspondingly for KG I and KG II.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg py-6">Do you provide school transport?</AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">
                Yes, we have a fleet of Air-Conditioned, GPS-enabled buses covering most parts of the city with dedicated attendants in every bus.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg py-6">What is the teacher-student ratio?</AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">
                For Pre-Primary, we maintain a 1:15 ratio, and for higher classes, it's 1:25 to ensure personalized attention for every student.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg py-6">Are there scholarships for meritorious students?</AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">
                Yes, we offer partial and full scholarships to students who excel in academics, sports, or creative arts at the state or national level.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
