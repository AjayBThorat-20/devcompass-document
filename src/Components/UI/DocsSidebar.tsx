"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/constants/docsNav";

interface DocsSidebarProps {
  onNavigate?: () => void;
  className?: string;
}

// Persistent left-hand documentation nav: every section and its
// sub-anchors are always expanded (there are only ~25 links total),
// rather than collapsing to just the active section - so the sidebar
// reads as a full table of contents you can scan, the way Tailwind's
// or Stripe's docs sidebars do.
export default function DocsSidebar({ onNavigate, className = "" }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className={className}>
      <Link
        href="/"
        onClick={onNavigate}
        className={`block text-sm font-semibold transition-colors ${
          pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Introduction
      </Link>

      <ul className="mt-6 space-y-6">
        {docsNav.map((section) => {
          const isActive = pathname === section.href;
          return (
            <li key={section.href}>
              <Link
                href={section.href}
                onClick={onNavigate}
                className={`block text-sm font-semibold transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </Link>
              {section.items && section.items.length > 0 && (
                <ul className="mt-2.5 space-y-1.5 border-l border-border pl-3.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={onNavigate}
                        className="block py-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
