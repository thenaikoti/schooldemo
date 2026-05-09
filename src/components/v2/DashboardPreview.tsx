"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Primitives";
import { 
  Users, 
  TrendingUp, 
  MessageSquare, 
  PieChart as PieChartIcon, 
  ArrowUpRight, 
  Calendar,
  MoreHorizontal,
  Plus
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Inquiries", value: "1,284", change: "+12.5%", icon: MessageSquare, color: "text-primary", bg: "bg-primary/10" },
  { label: "Admission Rate", value: "64.2%", change: "+4.3%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Parent Engagement", value: "89%", change: "+2.1%", icon: Users, color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Inquiry Sources", value: "5 Unique", change: "Stable", icon: PieChartIcon, color: "text-purple-500", bg: "bg-purple-500/10" },
];

const recentInquiries = [
  { name: "Rahul Sharma", grade: "Grade 6", time: "2m ago", status: "Hot", color: "bg-orange-500" },
  { name: "Priya Patel", grade: "Pre-Primary", time: "15m ago", status: "Contacted", color: "bg-primary" },
  { name: "Anita Desai", grade: "Grade 11", time: "1h ago", status: "Follow-up", color: "bg-emerald-500" },
];

export function DashboardPreview() {
  return (
    <SectionWrapper id="dashboard-preview" className="bg-neutral-950 text-white rounded-[4rem] mx-4 my-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80 mb-6 backdrop-blur-md border border-white/10"
        >
          <PieChartIcon className="w-4 h-4" />
          School Operating System v2.0
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
          Total Visibility for <br />
          <span className="text-primary italic">Modern Leadership.</span>
        </h2>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed">
          The Principal's Dashboard provides real-time insights into your institution's growth, engagement, and operational health.
        </p>
      </div>

      <div className="relative group">
        {/* Decorative Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-purple-500/30 to-indigo-500/30 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />
        
        <Card className="bg-neutral-900 border-neutral-800 p-0 overflow-hidden shadow-2xl relative z-10" hover={false}>
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-xl">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-black tracking-tight">Analytics Overview</h3>
              <p className="text-neutral-500 text-sm font-medium">Real-time performance metrics across all departments.</p>
            </div>
            <div className="flex gap-4">
              <button className="h-12 px-6 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors text-sm font-bold border border-neutral-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last 30 Days
              </button>
              <button className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 transition-all text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Entry
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                  <h4 className="text-3xl font-black">{stat.value}</h4>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Chart Area Placeholder */}
              <div className="lg:col-span-2 p-8 rounded-[2rem] bg-neutral-950 border border-neutral-800">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-xl font-bold">Admission Funnel</h4>
                  <MoreHorizontal className="text-neutral-500 w-6 h-6" />
                </div>
                {/* Visual Representation of Chart */}
                <div className="flex items-end gap-3 h-[250px] w-full px-4">
                  {[40, 65, 45, 90, 55, 80, 70, 85, 60, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-lg group relative"
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 text-neutral-600 text-xs font-bold uppercase tracking-widest">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>

              {/* Sidebar: Recent Activity */}
              <div className="p-8 rounded-[2rem] bg-neutral-950 border border-neutral-800">
                <h4 className="text-xl font-bold mb-8">Live Inquiries</h4>
                <div className="space-y-6">
                  {recentInquiries.map((inquiry, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl ${inquiry.color} flex items-center justify-center text-white font-black text-xs shadow-lg shadow-white/5`}>
                        {inquiry.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-bold text-sm">{inquiry.name}</h5>
                          <span className="text-[10px] font-black uppercase text-neutral-500 tracking-tighter">{inquiry.time}</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-medium">{inquiry.grade}</p>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-4 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors text-xs font-black uppercase tracking-widest text-neutral-400">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
