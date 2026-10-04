import React, { useState, useEffect } from "react";
import {
  Trophy,
  Award,
  Scroll,
  BookOpen,
  PlusCircle,
  CheckCircle2,
  Calendar,
  Building,
  Sparkles,
  X,
  Plus,
  Check,
  Copy,
} from "lucide-react";
import { achievementsData } from "../data/portfolioData";

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [achievementsList, setAchievementsList] = useState(achievementsData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  // New Achievement Form State
  const [newForm, setNewForm] = useState({
    title: "",
    category: "Certifications",
    organization: "",
    year: new Date().getFullYear().toString(),
    status: "Completed",
    badge: "Credential",
    description: "",
  });

  const categories = [
    "All",
    "Certifications",
    "Hackathons",
    "Courses",
    "Awards",
    "Other Achievements",
  ];

  // Modal keyboard listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsAddModalOpen(false);
    };
    if (isAddModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAddModalOpen]);

  const filteredAchievements =
    activeCategory === "All"
      ? achievementsList
      : achievementsList.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Certifications":
        return <Scroll className="w-5 h-5 text-indigo-400" />;
      case "Hackathons":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "Courses":
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case "Awards":
        return <Award className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newForm.title || !newForm.organization) return;

    const newItem = {
      id: Date.now(),
      category: newForm.category,
      title: newForm.title,
      organization: newForm.organization,
      year: newForm.year || "2024",
      status: newForm.status || "Completed",
      description: newForm.description || "Added to personal portfolio records.",
      badge: newForm.badge || newForm.category,
    };

    setAchievementsList([newItem, ...achievementsList]);
    setIsAddModalOpen(false);
    setNewForm({
      title: "",
      category: "Certifications",
      organization: "",
      year: new Date().getFullYear().toString(),
      status: "Completed",
      badge: "Credential",
      description: "",
    });
  };

  const handleCopySnippet = () => {
    const jsonString = JSON.stringify(newForm, null, 2);
    navigator.clipboard.writeText(jsonString);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#070A12] scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Certifications, hackathons, courses, awards, and milestones earned throughout my academic and technical journey.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 text-white shadow-lg shadow-indigo-500/20 scale-105"
                    : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-300">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                {/* Meta details */}
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}

          {/* Interactive Add New Achievement Card */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="rounded-2xl border-2 border-dashed border-white/15 p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-indigo-500/50 hover:bg-white/[0.02] transition-all duration-300 group min-h-[220px] focus:outline-none"
          >
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-center gap-1.5">
                <span>Add New Achievement</span>
                <Plus className="w-3.5 h-3.5 text-cyan-400" />
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mt-1.5 leading-relaxed">
                Click here to add certifications, hackathons, courses, awards, or custom milestones easily.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Add Achievement Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#0F172A] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Add New Achievement</h3>
                  <p className="text-xs text-slate-400">
                    Add new credentials or awards to your portfolio.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Category</label>
                <select
                  value={newForm.category}
                  onChange={(e) =>
                    setNewForm({ ...newForm, category: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  <option value="Certifications">Certifications</option>
                  <option value="Hackathons">Hackathons</option>
                  <option value="Courses">Courses</option>
                  <option value="Awards">Awards</option>
                  <option value="Other Achievements">Other Achievements</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">
                  Achievement / Course / Award Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Python for AI & Data Science"
                  value={newForm.title}
                  onChange={(e) =>
                    setNewForm({ ...newForm, title: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">
                    Organization / Issuer
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., JECRC University / Coursera"
                    value={newForm.organization}
                    onChange={(e) =>
                      setNewForm({ ...newForm, organization: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Year</label>
                  <input
                    type="text"
                    required
                    placeholder="2024"
                    value={newForm.year}
                    onChange={(e) =>
                      setNewForm({ ...newForm, year: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">
                  Description / Milestone Detail
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe what you built, earned, or learned..."
                  value={newForm.description}
                  onChange={(e) =>
                    setNewForm({ ...newForm, description: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedJson ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  )}
                  <span>{copiedJson ? "Copied JSON!" : "Copy JSON"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all shadow-md"
                  >
                    Add to Portfolio
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
