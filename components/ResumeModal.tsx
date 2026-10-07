"use client";

import React, { useEffect } from "react";
import { X, Printer, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
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

  const { personal, experiences, education, certifications, skillsCategorized, projects } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm sm:p-6 overflow-y-auto">
      <div 
        className="relative my-auto flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-4 no-print">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">ATS-Friendly Resume Preview</h3>
            <p className="text-xs text-slate-500">Clean, structured preview optimized for screeners &amp; ATS parsers</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
              title="Print resume"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>
            <a
              href="/resume.pdf"
              download={`Resume_${personal.name.replace(/\s+/g, '_')}.pdf`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 transition"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / ATS Resume Document */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-slate-800 printable-resume">
          {/* Header */}
          <header className="border-b-2 border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 uppercase">
              {personal.name}
            </h1>
            <p className="text-base font-semibold text-indigo-700 mt-0.5">{personal.title}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 font-mono">
              <span>{personal.email}</span>
              <span>•</span>
              <span>{personal.phoneDisplay}</span>
              <span>•</span>
              <span>{personal.location}</span>
              <span>•</span>
              <span>linkedin.com/in/ajay-chandani</span>
              <span>•</span>
              <span>github.com/ajaychandani</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700">
              {personal.summary}
            </p>
          </section>

          {/* Core Technical Competencies */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Technical Skills Matrix
            </h2>
            <div className="mt-2 space-y-1.5 text-xs sm:text-sm">
              {skillsCategorized.map((group) => (
                <div key={group.category} className="flex flex-col sm:flex-row">
                  <span className="font-semibold text-slate-900 min-w-[200px]">{group.category}:</span>
                  <span className="text-slate-700">{group.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Work Experience &amp; Leadership
            </h2>
            <div className="mt-4 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{exp.role}</h3>
                      <p className="text-xs font-semibold text-indigo-700">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="mt-2 list-disc pl-4 space-y-1 text-xs text-slate-700">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[11px] text-slate-600 font-mono">
                    <strong className="text-slate-800">Technologies:</strong> {exp.techStack.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects Highlight */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Key Featured Projects
            </h2>
            <div className="mt-3 space-y-3 text-xs">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <p className="font-bold text-slate-900">{p.title}</p>
                  <p className="text-slate-700">{p.description}</p>
                  <p className="text-[10px] font-mono text-slate-500">Tech: {p.techStack.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Education &amp; Credentials
            </h2>
            <div className="mt-3 space-y-2 text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between">
                  <div>
                    <strong className="text-slate-900">{edu.degree}</strong> — {edu.institution}
                    {"grade" in edu && edu.grade && <span className="text-slate-600 ml-1">({edu.grade})</span>}
                  </div>
                  <span className="font-mono text-slate-600 shrink-0 ml-2">{edu.year}</span>
                </div>
              ))}
              <div className="mt-2 text-xs">
                <strong className="text-slate-900">Certifications: </strong>
                <span>{certifications.map(c => c.title).join(" • ")}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
