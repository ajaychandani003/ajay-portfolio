"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function ArchitectureSection() {
  const { architectureSteps } = portfolioData;

  return (
    <section id="architecture" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-800 mb-2">
            <span>🏗️ Full Lifecycle Ownership</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Architecture &amp; How I Build Solutions
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Taking complete ownership from international client requirement discovery through architecture, AI/backend engineering, and scalable cloud deployment.
          </p>
        </header>

        {/* Pipeline Summary Banner */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 text-white shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                End-to-End Delivery Pipeline
              </p>
              <h3 className="font-display text-base font-bold text-white mt-0.5">
                From Client Requirement to Resilient Production
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-indigo-200">
              <span>Client Scoping</span>
              <span>→</span>
              <span>Architecture</span>
              <span>→</span>
              <span>Backend &amp; AI</span>
              <span>→</span>
              <span>Cloud Deploy</span>
            </div>
          </div>
        </div>

        {/* Vertical Stepped Architecture Flow */}
        <div className="space-y-4">
          {architectureSteps.map((step, idx) => {
            const isLast = idx === architectureSteps.length - 1;
            return (
              <div key={step.step} className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-indigo-300 hover:shadow-md">
                  {/* Step indicator badge */}
                  <div className="flex items-center gap-3 sm:w-16 shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl border border-indigo-100">
                      {step.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 sm:hidden">
                      Step {step.step} of 8
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="hidden sm:inline-flex rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600">
                        Step 0{step.step}
                      </span>
                      <h3 className="font-display text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="text-xs font-medium text-indigo-600">
                        · {step.subtitle}
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Tools / Deliverables */}
                  <div className="flex flex-wrap gap-1 sm:max-w-xs sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    {step.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-slate-100"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connector Arrow */}
                {!isLast && (
                  <div className="flex justify-center my-1.5 text-slate-300">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
