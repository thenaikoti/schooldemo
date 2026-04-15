import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Flag, Rocket, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About Our School"
        subtitle="Discover our history, mission, and the leadership that shapes our educational excellence."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Legacy of Excellence Since 1998</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Green Valley International School was founded with a mission to provide high-quality education that prepares students for the challenges of the future. What started as a small institution with a handful of students has grown into one of the region's most respected educational hubs.
                </p>
                <p>
                  Our curriculum is designed to balance academic rigor with creative expression, physical education, and social responsibility. We believe in nurturing the "whole child," ensuring they graduate as confident, compassionate, and capable global citizens.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Accredited CBSE Curriculum",
                    "International Teaching Standards",
                    "State-of-the-art Infrastructure",
                    "Strong Alumni Network",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000"
                  alt="School Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">25+</p>
                <p className="text-sm font-medium uppercase tracking-wider opacity-80">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 p-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Flag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To inspire, educate and empower our students through a comprehensive and innovative curriculum that develops their unique potentials.
              </p>
            </Card>
            <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be a leading global educational institution that fosters a culture of excellence, integrity and life-long learning.
              </p>
            </Card>
            <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 p-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                We value integrity, respect, collaboration, and a dedication to innovation in everything we do for our students.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative">
            <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
              <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.866 6.86599 22 3 22H1V21Z" />
              </svg>
            </div>
            
            <div className="lg:w-1/3 relative z-10">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                  alt="Principal Dr. Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-white relative z-10">
              <h2 className="text-sm font-bold tracking-widest text-primary-foreground/70 uppercase mb-4">Message from the Principal</h2>
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-tight italic">
                {SITE_CONFIG.name} is more than just a school; it's a vibrant community where curiosity is celebrated and every child's voice matters."
              </blockquote>
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed mb-8">
                <p>
                  Education today is not just about imparting knowledge; it's about building characters and preparing global citizens who can think critically and act with empathy. Our teachers are not just mentors but companions in our students' journey of discovery.
                </p>
                <p>
                  I invite you all to visit our campus and witness the joy of learning that permeates every corner of our institution.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Dr. Sarah Johnson</p>
                <p className="text-primary-foreground/60">Principal, GVIS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Campus Life</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">State-of-the-Art Environment</h3>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Smart Classrooms", desc: "Interactive digital learning tools in every room.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800" },
            { title: "Robotics Lab", desc: "Advanced STEM kits and coding resources.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
            { title: "Olympic Pool", desc: "Professional aquatic training and recreation.", img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=800" },
          ].map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-3xl shadow-lg">
              <img src={item.img} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8">
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
