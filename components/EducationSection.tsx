"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Award, GraduationCap } from "lucide-react";

export function EducationSection() {
  const { education, leadership, additional } = portfolioData;

  return (
    <section id="education" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <header className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-800 mb-2">
            <GraduationCap className="h-3 w-3" />
            <span>Credentials &amp; Leadership</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Education, Certifications &amp; Leadership
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Formal technical degree, domain credentials, and international client project leadership.
          </p>
        </header>

        {/* 2-Column Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Left Column: Education & Certifications */}
          <div className="space-y-6">
            {/* Formal Education */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                <span>🎓</span> Formal Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <article
                    key={idx}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-slate-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-indigo-600">{edu.year}</span>
                      <span className="text-xs text-slate-400">{edu.location}</span>
                    </div>
                    <h4 className="mt-1 font-display text-base font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {edu.institution}
                    </p>
                    {"grade" in edu && edu.grade && (
                      <div className="mt-2.5">
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-100">
                          {edu.grade}
                        </span>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* Professional Certifications */}

          </div>

          {/* Right Column: Leadership & Additional */}
          <div className="space-y-6">
            {/* Leadership & Activities */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                <span>🤝</span> Client &amp; Engineering Leadership
              </h3>
              <article className="rounded-2xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/60 via-white to-slate-50 p-5 shadow-2xs">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-xl text-indigo-700">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900">
                      {leadership.title}
                    </h4>
                    <p className="text-xs font-semibold text-indigo-800">
                      US, UK, Australia &amp; Caribbean Client Portfolio
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  {leadership.description}
                </p>
              </article>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                <span>🌐</span> Communication &amp; Interests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Languages
                  </p>
                  <p className="mt-1 font-display text-xs font-bold text-slate-900">
                    {additional.languages}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Interests
                  </p>
                  <p className="mt-1 font-display text-xs font-bold text-slate-900">
                    {additional.interests}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
