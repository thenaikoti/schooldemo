"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Lightbulb, Microscope, Palette, Music, Trophy, Calculator, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

const courseData = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    years: "Age 3 to 6",
    desc: "A nurturing foundation built on play-way and Montessori methodologies.",
    subjects: ["Basic Numeracy", "Phonics & Language", "Art & Craft", "Physical Play", "Music & Rhythm"],
    features: [
      "No formal examinations",
      "Experiential, theme-based learning",
      "Focus on social and motor skills",
      "Safe, colorful and child-friendly environment"
    ],
    icon: <Palette className="w-12 h-12 text-orange-500" />,
    bg: "bg-orange-50",
  },
  {
    id: "primary",
    title: "Primary (Grade 1-5)",
    years: "Age 6 to 11",
    desc: "Developing core competencies and sparking a curiosity for independent learning.",
    subjects: ["Mathematics", "English & EVS", "Second Language (Hindi/Regional)", "Computers", "Life Skills"],
    features: [
      "Personalized attention in small batches",
      "Integrated STEAM approach",
      "Reading programs and library sessions",
      "Introduction to extracurricular activities"
    ],
    icon: <Calculator className="w-12 h-12 text-blue-500" />,
    bg: "bg-blue-50",
  },
  {
    id: "middle",
    title: "Secondary (Grade 6-10)",
    years: "Age 11 to 16",
    desc: "Rigorous academic curriculum balanced with competitive skill development.",
    subjects: ["Integrated Sciences", "Advanced Mathematics", "Social Studies", "Coding & AI", "Third Language"],
    features: [
      "CBSE board preparation",
      "Laboratory-based practical learning",
      "Competitive exam guidance (Olympiads)",
      "Leadership and personality development"
    ],
    icon: <Microscope className="w-12 h-12 text-indigo-500" />,
    bg: "bg-indigo-50",
  },
  {
    id: "senior",
    title: "Higher Secondary",
    years: "Grade 11 & 12",
    desc: "Specialized streams with a focus on university entrance and career readiness.",
    subjects: ["Physics/Chemistry/Maths", "Accounts/Economics/B.St", "History/Pol. Science", "Psychology", "Computer Science"],
    features: [
      "Stream specialization (Science/Commerce/Humanities)",
      "Intensive career counseling",
      "Integrated competitive coaching support",
      "Internship and project-based exposure"
    ],
    icon: <Globe className="w-12 h-12 text-emerald-500" />,
    bg: "bg-emerald-50",
  },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Our Curriculum"
        subtitle="Comprehensive educational programs aligned with CBSE standards, designed to nurture future-ready graduates."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pre-primary" className="space-y-16">
            <div className="flex justify-center">
              <TabsList className="bg-slate-100 p-1 rounded-full h-auto flex flex-wrap justify-center sm:flex-nowrap gap-2">
                {courseData.map((course) => (
                  <TabsTrigger
                    key={course.id}
                    value={course.id}
                    className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all text-sm font-semibold uppercase tracking-wider"
                  >
                    {course.title.split(" (")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {courseData.map((course) => (
              <TabsContent key={course.id} value={course.id} className="mt-0 outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5 space-y-8">
                    <div className={`w-24 h-24 rounded-3xl ${course.bg} flex items-center justify-center`}>
                      {course.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-slate-900 mb-4">{course.title}</h2>
                      <p className="text-xl font-medium text-primary mb-6">{course.years}</p>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {course.desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 border-l-4 border-primary pl-4">Key Pedagogical Highlights</h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {course.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-slate-600">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-none bg-slate-50 shadow-sm overflow-hidden group">
                      <CardHeader className="bg-primary text-white">
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          Core Subjects
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2">
                          {course.subjects.map((subject) => (
                            <span key={subject} className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 shadow-sm">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none bg-slate-50 shadow-sm overflow-hidden group">
                      <CardHeader className="bg-accent text-white">
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="w-5 h-5" />
                          Co-Curriculars
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <Palette className="w-4 h-4 text-accent" /> Visual Arts & Design
                          </li>
                          <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <Music className="w-4 h-4 text-accent" /> Performing Arts (Music/Dance)
                          </li>
                          <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <Trophy className="w-4 h-4 text-accent" /> Physical Education & Sports
                          </li>
                          <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <Microscope className="w-4 h-4 text-accent" /> Science & Coding Clubs
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="md:col-span-2 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mt-4 group">
                      <img
                        src={`https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&sig=${course.id}`}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                        <p className="text-white font-bold text-lg">Empowering learners with practical skills and core values.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our 360° Learning Approach</h2>
            <p className="text-lg text-primary-foreground/80">
              We go beyond classrooms to ensure our students excel in every aspect of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Academic Rigor", desc: "Well-structured curriculum focused on conceptual clarity.", icon: <BookOpen className="w-8 h-8" /> },
              { title: "Physical Health", desc: "Extensive sports facilities and professional coaching.", icon: <Trophy className="w-8 h-8" /> },
              { title: "Creative Arts", desc: "Dedicated spaces for music, dance, and visual expression.", icon: <Palette className="w-8 h-8" /> },
              { title: "Social Awareness", desc: "Community service projects and environmental initiatives.", icon: <Globe className="w-8 h-8" /> },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
