"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { skillsCategorized } = portfolioData;

  const filterTabs = [
    { id: "all", label: "All Skills" },
    { id: "LANGUAGES", label: "Languages" },
    { id: "BACKEND", label: "Backend" },
    { id: "ECOMMERCE", label: "eCommerce" },
    { id: "AI & AGENTS", label: "AI & Agents" },
    { id: "AUTOMATION", label: "Automation" },
    { id: "FRONTEND", label: "Frontend" },
    { id: "DATABASE", label: "Database" }
  ];

  const displayedGroups =
    selectedFilter === "all"
      ? skillsCategorized
      : skillsCategorized.filter((group) => group.category === selectedFilter);

  return (
    <section id="skills" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <header className="mb-6 sm:mb-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Technical Skills Matrix
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              13+ years of production engineering across eCommerce stacks, Python/AI, backend architectures, and automation.
            </p>
          </header>

          <div className="flex flex-wrap gap-1.5 self-start sm:self-auto no-print">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${isActive
                      ? "bg-slate-900 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {displayedGroups.map((group) => (
            <article
              key={group.category}
              className="h-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {group.category}
                  </span>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                  {group.skills.length} skills
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-900 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
