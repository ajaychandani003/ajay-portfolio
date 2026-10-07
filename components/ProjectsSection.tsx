"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Sparkles, UserCheck } from "lucide-react";

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const { projects } = portfolioData;

  const filterTabs = [
    { id: "all", label: "All Featured Projects" },
    { id: "ecommerce", label: "eCommerce & BigCommerce" },
    { id: "enterprise", label: "Enterprise & Platforms" },
    { id: "fintech", label: "Fintech & Trading" },
    { id: "ai", label: "AI & Headless" },
    { id: "automation", label: "Automation" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <header className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-800 mb-2">
              <Sparkles className="h-3 w-3" />
              <span>Production Client Projects &amp; AI Systems</span>
            </div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Featured Client Projects &amp; Systems
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Enterprise event platforms, automated trading bots, BigCommerce/WooCommerce stores, and production AI architectures.
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
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                    isActive
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

        {/* Project Cards List */}
        <div className="mt-8 space-y-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-2xs transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-1.5">
                    {project.liveStatus && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {project.liveStatus}
                      </span>
                    )}
                    {project.role && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                        <UserCheck className="h-3 w-3" />
                        {project.role}
                      </span>
                    )}
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl flex items-center gap-2">
                    <span>{project.icon}</span>
                    <span>{project.title}</span>
                  </h3>
                </div>

                <span className="shrink-0 rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-slate-600 self-start sm:self-auto">
                  {project.duration}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3.5">
                {project.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded-md bg-slate-50 border border-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* External Links */}
              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-indigo-700 active:scale-95 transition"
                    >
                      <span>Visit {link.label}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
