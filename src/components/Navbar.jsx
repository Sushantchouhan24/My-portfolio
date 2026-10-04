import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personalData, navigationLinks } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // If near top, set to hero
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      // If near the bottom of page, activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // Determine active section based on scroll position from bottom to top
      const sections = navigationLinks.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070A12]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="group flex items-center space-x-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-gradient">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                {personalData.name}
                <span className="text-cyan-400">.</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 -mt-1 tracking-wider uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-indigo-600/30 text-indigo-200 shadow-sm border border-indigo-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Socials */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[480px] opacity-100 border-b border-white/10 bg-[#0A0E1A]/95 backdrop-blur-xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          {/* Status pill in mobile menu */}
          <div className="flex items-center gap-2 py-2 px-3 mb-2 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{personalData.status}</span>
          </div>

          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-600/20 text-indigo-300 border-l-2 border-indigo-500"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={`mailto:${personalData.email}`}
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-medium shadow-md shadow-indigo-600/20"
            >
              Contact Me
            </a>
            <div className="flex items-center space-x-2 ml-3">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
