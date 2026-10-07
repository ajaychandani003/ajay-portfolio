"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Eye, Printer, Download, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const navLinks = [
  { id: "home", label: "Overview" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        {/* Left: Avatar + Name + Status */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex min-w-0 shrink items-center gap-2.5 text-left transition"
          aria-label="Scroll to top"
        >
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-xs">
            <Image
              src={portfolioData.personal.avatar}
              alt={portfolioData.personal.name}
              fill
              className="object-cover object-top"
              sizes="36px"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="font-display text-sm font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition truncate">
                {portfolioData.personal.name}
              </span>
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse"
                title="Actively looking for opportunities"
              />
            </div>
            <p className="hidden sm:block text-[11px] font-medium text-slate-500 truncate">
              Senior Software &amp; AI Solutions Engineer
            </p>
          </div>
        </button>

        {/* Center: Desktop Nav Links */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition whitespace-nowrap ${
                  isActive
                    ? "bg-slate-100 text-slate-900 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Preview ATS Resume */}
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition whitespace-nowrap shadow-2xs"
            title="Preview resume PDF in browser"
          >
            <Eye className="h-3.5 w-3.5 text-slate-500" />
            <span>Preview</span>
          </button>

          {/* Print ATS Resume */}
          <button
            type="button"
            onClick={() => window.print()}
            title="Print ATS-friendly resume"
            className="hidden sm:inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs"
          >
            <Printer className="h-4 w-4" />
          </button>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download={`Resume_${portfolioData.personal.name.replace(/\s+/g, '_')}.pdf`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-2.5 py-1.5 sm:px-3.5 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-500 active:scale-95 whitespace-nowrap"
            title="Download Resume PDF"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-slate-200 p-1.5 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="mt-2 pt-2 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Preview Resume</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.print();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print ATS</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
