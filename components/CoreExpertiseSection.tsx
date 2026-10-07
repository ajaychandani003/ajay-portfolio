"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function CoreExpertiseSection() {
  const { coreExpertise } = portfolioData;

  return (
    <section id="expertise" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-800 mb-2">
            <span>⚡ What I Excel At</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Core Technical &amp; Leadership Expertise
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            13+ years bridging enterprise eCommerce, modern backend engineering, AI automation, and direct client ownership.
          </p>
        </header>

        {/* 8-Card Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreExpertise.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-2xl border border-slate-100 group-hover:bg-indigo-50 transition">
                  {item.icon}
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-slate-900 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 group-hover:bg-indigo-50/60 group-hover:text-indigo-800 transition"
                  >
                    {tag}
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
