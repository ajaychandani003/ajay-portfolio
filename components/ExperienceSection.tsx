"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const { experiences, personal } = portfolioData;

  return (
    <section id="experience" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <header className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-800 mb-2">
              <Briefcase className="h-3 w-3" />
              <span>Career Milestones &amp; Track Record</span>
            </div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Work Experience &amp; Leadership
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              13+ years of full-lifecycle eCommerce engineering, backend architecture, AI automation, and international client ownership.
            </p>
          </header>
          <div className="text-xs font-semibold text-slate-500 self-start sm:self-auto font-mono">
            Total: {personal.totalExpDetailed}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-8 space-y-8 before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:h-full before:w-0.5 before:bg-slate-200 before:content-['']">
          {experiences.map((exp, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={exp.id} className="relative flex items-start gap-4 sm:gap-6">
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-2xs ${
                    isFirst
                      ? "border-emerald-500 text-emerald-600 ring-4 ring-emerald-50"
                      : "border-slate-300 text-slate-500"
                  }`}
                >
                  <span className="text-xs font-bold sm:text-sm">
                    {isFirst ? "★" : "●"}
                  </span>
                </div>

                {/* Experience Card */}
                <article className="flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-2xs transition hover:border-slate-300 hover:shadow-md">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                          {exp.role}
                        </h3>
                        {exp.badge && exp.badgeType === "emerald" && (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                            {exp.badge}
                          </span>
                        )}
                        {exp.badge && exp.badgeType === "amber" && (
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-indigo-600">{exp.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">{exp.location}</span>
                      </div>
                    </div>

                    <time className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-slate-700 self-start sm:self-auto">
                      {exp.period}
                    </time>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Technologies &amp; Tools Used:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 hover:bg-slate-200 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
