import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajay Chandani | Senior Software Engineer",
  description: "Senior Software Engineer and Technical Lead with 13+ years of experience delivering enterprise web applications, eCommerce platforms, SaaS solutions, and AI-powered automation. Hands-on expertise across WordPress, WooCommerce, BigCommerce, Shopify, Magento, PHP, Laravel, Python, Django, FastAPI, REST/GraphQL APIs, AI, RAG, AI Agents, and workflow automation.",
  keywords: [
    "Wordpress",
    "WooCommerce",
    "Bigcommerce",
    "Shopify",
    "Magento",
    "PHP",
    "Laravel",
    "Python",
    "Django",
    "FastAPI",
    "REST/GraphQL APIs",
    "AI",
    "RAG",
    "AI Agents",
    "Workflow Automation",
    "Ajay Chandani",
  ],
  authors: [{ name: "Ajay Chandani" }],
  creator: "Ajay Chandani",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-base text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
