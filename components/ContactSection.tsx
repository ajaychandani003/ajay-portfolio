"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { useToast } from "@/components/Toast";
import { Download, Eye, Copy, ArrowRight, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export function ContactSection({ onOpenResumeModal }: ContactSectionProps) {
  const { showToast } = useToast();
  const { personal } = portfolioData;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-14 border-b border-slate-200/70 !border-b-0 pb-16">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <header className="mb-6 sm:mb-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Get In Touch / Hire {personal.name.split(" ")[0]}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Available for Senior Software Engineer, Mobile Lead, and AI Engineering roles
          </p>
        </header>

        {/* Hero CTA Card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-indigo-900/40 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Ready for immediate impact
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Let&apos;s Build Something Resilient Together
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Whether you are an HR recruiter, hiring manager, or engineering leader looking for a 12+ year veteran in Mobile (Flutter, Android) and modern AI/Backend systems, let&apos;s connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href="/resume.pdf"
                download="Resume_Dheeraj_Giri.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-md transition hover:bg-emerald-400 active:scale-95 text-center"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume PDF</span>
              </a>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
              >
                <Eye className="h-4 w-4 text-slate-400" />
                <span>Preview PDF Online</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Contact Channels Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-slate-300 transition">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  ✉️
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, "Email")}
                  className="rounded-lg p-1.5 text-xs text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                  title="Copy email"
                >
                  <span className="inline-flex items-center gap-1">Copy <Copy className="h-3 w-3 inline" /></span>
                </button>
              </div>
              <h4 className="mt-3 font-display text-sm font-bold text-slate-900">Direct Email</h4>
              <p className="mt-1 text-xs text-slate-500 break-all">{personal.email}</p>
            </div>
            <a
              href={`mailto:${personal.email}?subject=Interview%20Opportunity%20-%20Senior%20Software%20Engineer`}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline"
            >
              <span>Compose Email</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* Call */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-slate-300 transition">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  📞
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.phoneDisplay, "Phone number")}
                  className="rounded-lg p-1.5 text-xs text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                  title="Copy phone"
                >
                  <span className="inline-flex items-center gap-1">Copy <Copy className="h-3 w-3 inline" /></span>
                </button>
              </div>
              <h4 className="mt-3 font-display text-sm font-bold text-slate-900">Direct Call</h4>
              <p className="mt-1 text-xs text-slate-500">{personal.phoneDisplay}</p>
            </div>
            <a
              href={`tel:${personal.phone}`}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline"
            >
              <span>Place Call</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-slate-300 transition">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                💬
              </span>
              <h4 className="mt-3 font-display text-sm font-bold text-slate-900">WhatsApp Chat</h4>
              <p className="mt-1 text-xs text-slate-500">Instant recruiter messenger</p>
            </div>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline"
            >
              <span>Start Chat</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-slate-300 transition">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
                💼
              </span>
              <h4 className="mt-3 font-display text-sm font-bold text-slate-900">LinkedIn Profile</h4>
              <p className="mt-1 text-xs text-slate-500">Professional network &amp; endorsements</p>
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
            >
              <span>View Profile</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
