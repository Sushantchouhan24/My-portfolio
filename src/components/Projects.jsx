import React, { useState, useEffect } from "react";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  X,
  Laptop,
  Brain,
  CheckSquare,
  Play,
  Send,
  Plus,
  Trash2,
  RotateCcw,
  Zap,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState("overview");

  // AI Project Simulator State
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResult, setAiResult] = useState(
    "Hello! I am Sushant's AI Project demo agent. Ask me about AI concepts, web architecture, or student tips!"
  );
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Student Productivity Simulator State
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review DSA: Binary Search Trees & Graphs", done: true },
    { id: 2, text: "Prepare JECRC University AI Assignment 3", done: true },
    { id: 3, text: "Refactor React Portfolio components for Vercel", done: false },
    { id: 4, text: "Explore Generative AI Prompt Chains with Python", done: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  // Modal lifecycle: keyboard listener & scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setModalTab("overview");
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const getProjectIcon = (id) => {
    switch (id) {
      case "portfolio":
        return <Laptop className="w-6 h-6 text-indigo-400" />;
      case "ai-website":
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case "student-productivity":
        return <CheckSquare className="w-6 h-6 text-emerald-400" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  const handleRunAiPrompt = (presetText) => {
    const query = presetText || aiPrompt;
    if (!query.trim()) return;

    setIsAiLoading(true);
    setAiResult("Processing input through neural pipeline...");

    setTimeout(() => {
      setIsAiLoading(false);
      const lower = query.toLowerCase();
      if (lower.includes("llm") || lower.includes("ai") || lower.includes("intelligence")) {
        setAiResult(
          "🤖 Large Language Models (LLMs) utilize transformer architectures and multi-head self-attention mechanisms to predict the most contextually relevant next tokens, enabling conversational reasoning and autonomous synthesis."
        );
      } else if (lower.includes("web") || lower.includes("frontend") || lower.includes("react")) {
        setAiResult(
          "⚡ Frontend Architecture Tip: Combine component modularity, Tailwind utilities for zero-runtime CSS, and strict responsive flex/grid layouts to achieve sub-second load times and 100/100 Lighthouse scores."
        );
      } else if (lower.includes("productivity") || lower.includes("student") || lower.includes("study")) {
        setAiResult(
          "🎯 Student Productivity Protocol: Break complex semester goals into daily 25-minute Pomodoro sprints. Automate repetitive workflows and review code daily to retain deep concepts."
        );
      } else {
        setAiResult(
          `💡 Query Analysis for "${query}": Successful test execution! Modern applied AI bridges foundational algorithms with real-time web interactivity to solve user problems elegantly.`
        );
      }
    }, 650);
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTaskText.trim(), done: false },
    ]);
    setNewTaskText("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient">Innovations</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Practical applications built to explore artificial intelligence, frontend engineering, and student workflow efficiency.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Card Header & Preview Area */}
              <div>
                <div className="p-7 pb-5 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-b border-white/5 relative">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      {project.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Independent Student Engineering
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body: Short Description */}
                <div className="p-7 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-white/10 text-slate-300 group-hover:border-indigo-500/30 group-hover:text-cyan-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="p-7 pt-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setModalTab("overview");
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0F172A] border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Modal Header Bar */}
            <div className="p-6 pb-4 border-b border-white/10 bg-slate-900/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  {getProjectIcon(selectedProject.id)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      v1.0.0
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center px-6 border-b border-white/10 bg-slate-900/40 text-xs font-semibold">
              <button
                onClick={() => setModalTab("overview")}
                className={`py-3 px-4 border-b-2 transition-colors ${
                  modalTab === "overview"
                    ? "border-indigo-500 text-white"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                Overview & Architecture
              </button>
              <button
                onClick={() => setModalTab("demo")}
                className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-1.5 ${
                  modalTab === "demo"
                    ? "border-cyan-400 text-white"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Play className="w-3 h-3 text-cyan-400" />
                <span>Interactive Live Demo</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300">
              {modalTab === "overview" ? (
                <>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {selectedProject.shortDescription}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2.5">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                      Key Engineering Highlights:
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                      Technologies & Libraries:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Vercel Deployment Ready
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Zero-backend configuration, automated CI/CD pipeline compatibility.
                      </p>
                    </div>
                    <button
                      onClick={() => setModalTab("demo")}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-500 transition-colors shrink-0"
                    >
                      Try Demo
                    </button>
                  </div>
                </>
              ) : (
                /* Interactive Demo Tab */
                <div className="space-y-4">
                  {selectedProject.id === "portfolio" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-cyan-400">
                            Live Environment: Production
                          </span>
                          <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Online (Vercel)
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center pt-2">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="text-xl font-extrabold text-white">100%</div>
                            <div className="text-[10px] text-slate-400 uppercase mt-0.5">
                              Responsive
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="text-xl font-extrabold text-cyan-300">0 ms</div>
                            <div className="text-[10px] text-slate-400 uppercase mt-0.5">
                              Backend Delay
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="text-xl font-extrabold text-emerald-400">100</div>
                            <div className="text-[10px] text-slate-400 uppercase mt-0.5">
                              Lighthouse UX
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300">
                        You are currently exploring this exact portfolio website live! Test the smooth navigation, responsiveness, and interactive widgets.
                      </p>
                    </div>
                  )}

                  {selectedProject.id === "ai-website" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/30 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                            <Brain className="w-3.5 h-3.5" />
                            AI Assistant Simulator
                          </span>
                          <span className="text-[11px] font-mono">LLM Simulation</span>
                        </div>

                        {/* Quick Prompts */}
                        <div className="flex flex-wrap gap-1.5">
                          <button
                            onClick={() =>
                              handleRunAiPrompt("How do LLMs process prompts?")
                            }
                            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-cyan-300 transition-colors"
                          >
                            "How do LLMs work?"
                          </button>
                          <button
                            onClick={() =>
                              handleRunAiPrompt("Frontend architecture tip")
                            }
                            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-cyan-300 transition-colors"
                          >
                            "Frontend tip"
                          </button>
                          <button
                            onClick={() =>
                              handleRunAiPrompt("Student study productivity protocol")
                            }
                            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-cyan-300 transition-colors"
                          >
                            "Productivity tip"
                          </button>
                        </div>

                        {/* Prompt Input Form */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleRunAiPrompt();
                          }}
                          className="flex gap-2"
                        >
                          <input
                            type="text"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            placeholder="Ask the AI model a query..."
                            className="flex-1 px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                          />
                          <button
                            type="submit"
                            disabled={isAiLoading}
                            className="px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shrink-0 disabled:opacity-50"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </form>

                        {/* Response Output Box */}
                        <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-slate-200 min-h-[70px] leading-relaxed">
                          {isAiLoading ? (
                            <span className="text-cyan-400 animate-pulse">
                              Generating intelligent response...
                            </span>
                          ) : (
                            aiResult
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === "student-productivity" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <CheckSquare className="w-3.5 h-3.5" />
                            Interactive Student Task Board
                          </span>
                          <span className="text-[11px] font-mono">
                            {tasks.filter((t) => t.done).length}/{tasks.length} Completed
                          </span>
                        </div>

                        {/* Task List */}
                        <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                          {tasks.map((task) => (
                            <div
                              key={task.id}
                              className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 transition-colors ${
                                task.done
                                  ? "bg-white/[0.02] border-white/5 text-slate-500 line-through"
                                  : "bg-slate-800/80 border-white/10 text-slate-200"
                              }`}
                            >
                              <label className="flex items-center gap-2 cursor-pointer flex-1 text-xs">
                                <input
                                  type="checkbox"
                                  checked={task.done}
                                  onChange={() => handleToggleTask(task.id)}
                                  className="rounded text-emerald-500 focus:ring-0"
                                />
                                <span>{task.text}</span>
                              </label>
                              <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Add Task Form */}
                        <form onSubmit={handleAddTask} className="flex gap-2 pt-1">
                          <input
                            type="text"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            placeholder="Add student study task..."
                            className="flex-1 px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                          <button
                            type="submit"
                            className="px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shrink-0"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-6 pt-4 border-t border-white/10 bg-slate-900/90 flex items-center justify-between gap-4 shrink-0">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-colors"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
