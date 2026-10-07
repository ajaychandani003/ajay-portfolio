"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-8">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 {portfolioData.personal.name}. All rights reserved. Built with Next.js &amp; TypeScript.
        </p>
        <p className="text-xs text-slate-400 font-mono">
          Available for Senior / Lead Engineering Roles
        </p>
      </div>
    </footer>
  );
}
