"use client";

import React from "react";
import Link from "next/link";
import { FaHeart, FaGithub, FaNpm, FaArrowUp } from "react-icons/fa";
import { getAccent } from "@/Components/UI/accentColor";
import IconTile from "@/Components/UI/IconTile";
import { navLinks, githubLink, npmLink } from "@/constants/nav";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const externalLinks = [
    { name: "GitHub", href: githubLink.href, icon: FaGithub },
    { name: "npm", href: npmLink.href, icon: FaNpm },
  ];

  const footerLinks = [{ name: "Home", href: "/" }, ...navLinks.map((l) => ({ name: l.label, href: l.href }))];

  return (
    <footer className="relative w-full border-t border-border bg-card transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Left: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden>🧭</span>
              <h3 className="text-xl font-black text-foreground">
                DevCompass
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Dependency health checker with real-time CVE detection, AI-powered
              insights, and safe auto-fix — free and open source.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h4 className="eyebrow">Documentation</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="link-underline text-sm text-muted-foreground hover:text-primary transition-colors duration-150 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Connect */}
          <div className="space-y-4">
            <h4 className="eyebrow">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {externalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group"
                >
                  <IconTile icon={link.icon} accent={getAccent(index)} size="sm" />
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-2">Install it</p>
              <code className="link-underline text-sm font-semibold text-foreground">
                npm install -g devcompass
              </code>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} DevCompass. MIT Licensed.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with{" "}
              <FaHeart className="w-4 h-4 text-foreground animate-pulse" />{" "}
              using Next.js & TypeScript
            </p>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group p-2 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-150"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
