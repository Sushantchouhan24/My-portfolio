import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { personalData, navigationLinks } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#06080F] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background ambient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[9px] flex items-center justify-center">
                  <span className="font-extrabold text-base text-gradient">S</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {personalData.name}
                <span className="text-cyan-400">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              B.Tech Student at {personalData.college}, exploring Artificial Intelligence, modern frontend engineering, and student productivity.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm">
              {navigationLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-0.5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Technology Info & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white">
                Tech Stack
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with React 18, Vite, Tailwind CSS, Lucide Icons, and optimized for Vercel deployment.
              </p>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all shadow-md group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with passion & precision for continuous learning</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
