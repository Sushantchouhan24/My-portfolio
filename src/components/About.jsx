import React from "react";
import {
  Brain,
  Code2,
  Zap,
  BookOpen,
  MapPin,
  CheckCircle2,
  Laptop,
  Lightbulb,
} from "lucide-react";
import { personalData } from "../data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      description:
        "Fascinated by the power of machine intelligence. Actively learning generative AI, prompt engineering, and how to embed smart models into web applications.",
    },
    {
      icon: Code2,
      title: "Modern Web Development",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      description:
        "Building fast, user-centric web applications using modern technologies like React, JavaScript, and Tailwind CSS. Focused on clean code and great UX.",
    },
    {
      icon: Zap,
      title: "Digital Productivity",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description:
        "Passionate about efficient workflows, automation, and building productivity tools that streamline everyday student and developer tasks.",
    },
  ];

  const quickFacts = [
    "Pursuing B.Tech at JECRC University (Batch of 2026)",
    "Based in Jaipur, Rajasthan, India",
    "Hands-on project-based engineering approach",
    "Committed to continuous learning and tech experimentation",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Laptop className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate About Technology,{" "}
            <span className="text-gradient">Driven by Curiosity</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Get to know my journey as a student developer, what motivates me, and the fields I'm excited about.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-9 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </span>
              My Background & Mindset
            </h3>

            <p className="text-slate-300 leading-relaxed text-base">
              {personalData.aboutMe}
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              As a student at <strong className="text-white">JECRC University</strong>, I spend my time
              bridging academic theory with practical implementation. Whether it's training an AI model,
              refactoring a frontend component, or testing productivity workflows, I believe in
              hands-on building as the best way to master modern technology.
            </p>

            {/* Quick Facts List */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Quick Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">
                      {fact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Stats / Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5">
              <h4 className="text-base font-semibold text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                Snapshot Information
              </h4>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">Current Role</span>
                  <span className="text-white font-medium text-right">
                    B.Tech Student (Graduation 2026)
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">University</span>
                  <span className="text-cyan-300 font-medium text-right">
                    JECRC University
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">Location</span>
                  <span className="text-white font-medium text-right flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 inline" />
                    Jaipur, India
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-400">Primary Interests</span>
                  <span className="text-indigo-300 font-medium text-right">
                    AI, Web Dev, Productivity
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Open For</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-right text-xs bg-emerald-500/10 px-2.5 py-1 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Internships & Collaborations
                  </span>
                </div>
              </div>
            </div>

            {/* Student Motivation Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-900/40 via-slate-900/60 to-cyan-950/40 border border-indigo-500/20 p-5 backdrop-blur-md">
              <p className="text-xs text-indigo-300 uppercase font-semibold tracking-wider mb-1">
                Philosophy
              </p>
              <p className="text-sm text-slate-200 italic">
                "Learn by building, optimize through iteration, and embrace the future of intelligent systems."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${pillar.color} group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
