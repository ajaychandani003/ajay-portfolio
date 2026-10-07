"use client";

import React, { useState } from "react";
import { ToastProvider } from "./Toast";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { CoreExpertiseSection } from "./CoreExpertiseSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { EducationSection } from "./EducationSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { ResumeModal } from "./ResumeModal";

export function PortfolioShell() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-white font-sans text-base text-slate-900 antialiased flex flex-col">
        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1 pb-4">
          {/* 1. Hero & Professional Summary */}
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* 2. Core Expertise */}
          <CoreExpertiseSection />

          {/* 3. Work Experience & Leadership */}
          <ExperienceSection />

          {/* 4. Featured Projects */}
          <ProjectsSection />

          {/* 5. Categorized Technical Skills */}
          <SkillsSection />

          {/* 6. Education, Credentials & Leadership */}
          <EducationSection />

          {/* 8. Contact & CTA */}
          <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* ATS Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ToastProvider>
  );
}
