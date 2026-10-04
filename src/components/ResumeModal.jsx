import React, { useEffect } from "react";
import { X, Printer, Mail, MapPin, Linkedin, Github, GraduationCap, Briefcase, Award, Code2 } from "lucide-react";
import { personalData, educationData, projectsData, achievementsData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0B0F19] border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            <h3 className="text-base font-semibold text-white">
              Resume Preview &middot; {personalData.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/15 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto text-slate-200 space-y-6 print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-3xl font-extrabold text-white print:text-black">
              {personalData.name}
            </h1>
            <p className="text-base font-medium text-indigo-400 print:text-indigo-700 mt-1">
              {personalData.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.linkedinHandle}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.githubUrl}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 print:text-cyan-800">
              Career Objective & Profile
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personalData.aboutMe}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 print:text-cyan-800 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Education
            </h4>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline flex-wrap">
                  <span className="font-bold text-sm text-white print:text-black">
                    {edu.institution}
                  </span>
                  <span className="text-xs text-slate-400 print:text-gray-600">
                    {edu.duration} | {edu.location}
                  </span>
                </div>
                <div className="text-xs font-semibold text-indigo-300 print:text-indigo-800">
                  {edu.degree}
                </div>
                <p className="text-xs text-slate-300 print:text-gray-700">
                  <strong>Relevant Coursework:</strong> {edu.relevantCoursework.join(", ")}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 print:text-cyan-800 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </h4>
            <div className="text-xs text-slate-300 print:text-gray-800 space-y-1.5">
              <div>
                <strong className="text-white print:text-black">Programming & Web:</strong> HTML, CSS, JavaScript, Python, Web Development
              </div>
              <div>
                <strong className="text-white print:text-black">AI & Specializations:</strong> Artificial Intelligence, Generative AI, Prompt Engineering
              </div>
              <div>
                <strong className="text-white print:text-black">Productivity & Tooling:</strong> Digital Productivity, Git, GitHub, Vite, Tailwind CSS, REST APIs
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 print:text-cyan-800 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Featured Projects
            </h4>
            <div className="space-y-3">
              {projectsData.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <span className="font-bold text-sm text-white print:text-black">
                      {p.title}
                    </span>
                    <span className="text-xs text-indigo-300 print:text-indigo-800 font-mono">
                      {p.technologies.join(" • ")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700">
                    {p.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 print:text-cyan-800 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Achievements & Certifications
            </h4>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-700 space-y-1">
              {achievementsData.slice(0, 4).map((ach) => (
                <li key={ach.id}>
                  <strong className="text-white print:text-black">{ach.title}</strong> &mdash; {ach.organization} ({ach.year})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Student Portfolio Resume &middot; JECRC University</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
