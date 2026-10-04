import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  GraduationCap,
  Download,
  Terminal,
  Brain,
  Code,
  FileText,
} from "lucide-react";
import { personalData } from "../data/portfolioData";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-glow"
    >
      {/* Ambient background light spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs font-medium text-indigo-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalData.status}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalData.location}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-cyan-400">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm{" "}
                <span className="text-gradient hover:opacity-95 transition-opacity">
                  {personalData.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-indigo-400">{personalData.role.split("|")[0]?.trim()}</span>
                <span className="text-slate-500 font-light">|</span>
                <span className="text-cyan-300 font-medium">
                  {personalData.role.split("|")[1]?.trim() || "AI & Tech Enthusiast"}
                </span>
              </h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalData.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 hover:text-white backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={() => setShowResume(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Profile Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Connect With Me:
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-600/10 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Modern Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 opacity-30 blur-lg animate-pulse-slow"></div>

              <div className="relative rounded-2xl bg-[#0C1222]/90 border border-white/10 p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>student_profile.py</span>
                  </div>
                </div>

                {/* Profile Card Content */}
                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="text-slate-400">
                    <span className="text-indigo-400">class</span>{" "}
                    <span className="text-cyan-300">StudentEngineer</span>:
                  </div>

                  <div className="pl-4 space-y-2 border-l border-indigo-500/20">
                    <div>
                      <span className="text-indigo-300">name</span> ={" "}
                      <span className="text-amber-300">"{personalData.name}"</span>
                    </div>
                    <div>
                      <span className="text-indigo-300">college</span> ={" "}
                      <span className="text-amber-300">"{personalData.college}"</span>
                    </div>
                    <div>
                      <span className="text-indigo-300">graduation</span> ={" "}
                      <span className="text-emerald-300">{personalData.graduationYear}</span>
                    </div>
                    <div>
                      <span className="text-indigo-300">focus</span> = [
                      <div className="pl-4 text-emerald-300">
                        "Artificial Intelligence",<br />
                        "Generative AI",<br />
                        "Web Development",<br />
                        "Digital Productivity"
                      </div>
                      ]
                    </div>
                  </div>

                  <div className="text-slate-400 pt-1">
                    <span className="text-indigo-400">def</span>{" "}
                    <span className="text-cyan-300">goal</span>(self):
                    <div className="pl-4 text-slate-300">
                      return <span className="text-amber-300">"Build innovative software & learn continuously"</span>
                    </div>
                  </div>
                </div>

                {/* Quick stats ribbon */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Degree</p>
                      <p className="text-xs font-semibold text-slate-200">B.Tech 2026</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-white/5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Domain</p>
                      <p className="text-xs font-semibold text-slate-200">AI & Web</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}
