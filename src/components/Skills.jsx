import React, { useState } from "react";
import {
  Code2,
  Palette,
  FileCode2,
  Terminal,
  Cpu,
  Sparkles,
  Globe,
  Zap,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

// Icon mapping dictionary
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  FileCode2: FileCode2,
  Terminal: Terminal,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Globe: Globe,
  Zap: Zap,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Development", "Core & AI", "Productivity"];

  const filteredSkills =
    activeFilter === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070A12] scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Core Technologies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A comprehensive set of modern technologies, artificial intelligence concepts, and digital tools I use to build practical, scalable software.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20 scale-105"
                    : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={skill.id}
                className="group relative rounded-2xl glass-card p-6 border border-white/10 hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Glowing Gradient Accent */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
                />

                <div>
                  {/* Icon & Level Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} p-[1px] shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Category Indicator */}
                  <p className="text-xs font-semibold text-cyan-400 mb-3 tracking-wide">
                    {skill.category}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Visual Progress / Competency Bar */}
                <div className="pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span>Proficiency</span>
                    <span className="text-slate-300 font-semibold">
                      {skill.level === "Advanced" ? "90%" : "80%"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-700`}
                      style={{ width: skill.level === "Advanced" ? "90%" : "80%" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Always Learning & Expanding Tech Stack
              </h4>
              <p className="text-xs text-slate-400">
                Currently exploring advanced LLM integration, agentic frameworks, and high-performance React architectures.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors whitespace-nowrap"
          >
            See Skills in Action →
          </a>
        </div>
      </div>
    </section>
  );
}
