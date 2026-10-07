"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { useToast } from "@/components/Toast";
import { Copy, Eye, Printer, Download, ExternalLink } from "lucide-react";

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  const { showToast } = useToast();
  const { personal, stats, recruiterPitch } = portfolioData;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  return (
    <section id="home" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70 !border-b-0 pt-6 sm:pt-8 pb-8">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
          {/* Top Status Bar */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
              <span className="hidden sm:inline text-emerald-300">•</span>
              <span className="hidden sm:inline font-normal text-emerald-700">{personal.statusSubtext}</span>
            </div>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700">
              Experience: {personal.totalExpDetailed}
            </span>
          </div>

          {/* Main Hero Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {personal.name}
              </h1>
              <p className="mt-1 font-display text-lg font-semibold text-indigo-600 sm:text-xl">
                {personal.title}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600 leading-relaxed">
                {personal.shortBio}
              </p>

              {/* Contact Chips */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                {/* Email Chip */}
                <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700">
                  <span className="mr-1.5">✉️</span>
                  <a href={`mailto:${personal.email}`} className="hover:text-indigo-600 hover:underline mr-1.5 font-medium">
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.email, "Email")}
                    title="Copy email to clipboard"
                    className="rounded p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                    aria-label="Copy email address"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Phone Chip */}
                <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700">
                  <span className="mr-1.5">📞</span>
                  <a href={`tel:${personal.phone}`} className="hover:text-indigo-600 hover:underline mr-1.5 font-medium">
                    {personal.phoneDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.phoneDisplay, "Phone")}
                    title="Copy phone to clipboard"
                    className="rounded p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                    aria-label="Copy phone number"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-800 hover:bg-emerald-100 transition"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>

                {/* Location */}
                <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">
                  <span>📍</span>
                  <span>{personal.location}</span>
                </span>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 hover:border-slate-300 hover:text-indigo-600 transition"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900 transition"
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Profile Avatar & Side CTA */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 shrink-0">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-white shadow-md ring-1 ring-slate-200">
                <Image
                  src={personal.avatar}
                  alt={`${personal.name} - ${personal.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="120px"
                  priority
                />
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <a
                  href="/resume.pdf"
                  download={`Resume_${personal.name.replace(/\s+/g, '_')}.pdf`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-500 active:scale-95 text-center"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
                  >
                    <Eye className="h-3.5 w-3.5 text-slate-500" />
                    <span>Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
                  >
                    <Printer className="h-3.5 w-3.5 text-slate-500" />
                    <span>Print ATS</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Professional Summary</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
              <p>
                <strong className="text-slate-900 font-semibold">Senior Software Engineer and Technical Lead with 13+ years of experience</strong>{" "}
                delivering enterprise web applications, eCommerce platforms, SaaS solutions, and AI-powered automation for international clients across the US, UK, Australia, and Caribbean.
              </p>
              <p>
                Strong client-facing and project leadership background: experienced in client communication, requirement gathering, business analysis, technical scoping, architectural design, agile estimation, stakeholder management, team coordination, and end-to-end project ownership.
              </p>
              <p>
                Proven ability to understand business requirements, translate them into scalable technical solutions, communicate effectively with technical and non-technical stakeholders, and lead projects from initial client discussion through development, deployment, and post-launch support.
              </p>
            </div>
          </div>

          {/* Stat Metric Cards */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 border-t border-slate-100 pt-5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`rounded-xl bg-slate-50 p-3 text-center sm:text-left ${
                  idx === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <p
                  className={`font-display text-xl sm:text-2xl font-bold ${
                    stat.highlight
                      ? "text-indigo-600"
                      : stat.isAward
                      ? "text-amber-600"
                      : "text-slate-900"
                  }`}
                >
                  {stat.value}{" "}
                  {stat.unit && <span className="text-xs font-normal text-slate-500">{stat.unit}</span>}
                </p>
                <p className="text-[11px] font-medium text-slate-600 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Elevator Pitch Card */}
        <div className="mt-5">
          <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    For Recruiters &amp; Hiring Managers
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Quick Candidate Snapshot &amp; Elevator Pitch
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Forwarding Ajay to your team or client? Copy a structured candidate summary with contact info in one click.
                </p>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(recruiterPitch, "Recruiter pitch")}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
              >
                <Copy className="h-4 w-4" />
                <span>Copy Recruiter Pitch</span>
              </button>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 text-xs leading-relaxed text-slate-700 font-mono">
              <span className="text-slate-900 font-semibold">{personal.name}</span> · Senior Software Engineer &amp; AI Solutions Engineer (13+ Yrs) · Ecommerce (Shopify, WooCommerce, BigCommerce) + Backend (PHP/Laravel, Python/FastAPI) + AI (RAG, AI Agents, n8n) · International Client Ownership &amp; Leadership · {personal.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
