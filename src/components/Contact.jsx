import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { personalData } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief client submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const contactCards = [
    {
      id: "email",
      label: "Email Address",
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      icon: Mail,
      accent: "from-indigo-500 to-cyan-500",
      isEmail: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      value: "linkedin.com/in/Sushantsingh",
      href: personalData.linkedinUrl,
      icon: Linkedin,
      accent: "from-blue-600 to-cyan-500",
      external: true,
    },
    {
      id: "github",
      label: "GitHub Profile",
      value: "github.com/Sushantsingh",
      href: personalData.githubUrl,
      icon: Github,
      accent: "from-purple-500 to-indigo-600",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/70 scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-gradient">Connect & Collaborate</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Whether you have a question, internship opportunity, or project collaboration in mind, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Direct channels to get in touch with me quickly.
                </p>
              </div>

              {/* Contact Link Cards */}
              <div className="space-y-3.5">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      className="group p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/40 transition-all duration-200 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} p-[1px] shrink-0`}
                        >
                          <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-400 font-medium">
                            {card.label}
                          </p>
                          <a
                            href={card.href}
                            target={card.external ? "_blank" : undefined}
                            rel={card.external ? "noreferrer" : undefined}
                            className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                          >
                            {card.value}
                          </a>
                        </div>
                      </div>

                      {/* Action trigger: Copy button for email or external icon for socials */}
                      {card.isEmail ? (
                        <button
                          onClick={handleCopyEmail}
                          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                          title="Copy Email to Clipboard"
                          aria-label="Copy Email"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      ) : (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                          aria-label={`Open ${card.label}`}
                        >
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Location & Academic Note */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>
                    Location: <strong className="text-slate-200">{personalData.location}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    University: <strong className="text-slate-200">{personalData.college}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span>
                Usually responds within 24 hours. Open to academic, project, or career conversations.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the details below and I'll get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out, Sushant has received your notification and will reply shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project collaboration / Internship inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello Sushant, I'd like to discuss..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
