import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpenCheck,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40 scroll-mt-20">
      {/* Background soft ambient radial light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Core Learning</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Building a strong theoretical foundation in computer science and mastering applied software engineering.
          </p>
        </div>

        {/* Education Timeline / Showcase */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-7 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400"></div>

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                      {edu.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Class of {edu.duration.split("-")[1]?.trim() || "2026"}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-200 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-cyan-300">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-2 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Learning Highlights */}
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Academic Highlights & Campus Engagement:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Relevant Coursework / Learning Areas */}
              <div className="pt-6 border-t border-white/10 space-y-3.5">
                <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-indigo-400">
                  <BookOpenCheck className="w-4 h-4" />
                  <span>Relevant Coursework & Core Learning Areas</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {edu.relevantCoursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
