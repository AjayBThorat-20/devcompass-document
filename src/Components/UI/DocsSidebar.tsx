"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const currentSection = docsNav.find((section) => section.href === pathname);
  const sectionIds = (currentSection?.items ?? [])
    .map((item) => item.href.split("#")[1])
    .filter((id): id is string => Boolean(id));

  const [activeId, setActiveId] = useState<string | null>(null);

  // Scroll-spy for the sub-anchors: without this, every sub-item under
  // the active page sat at the same muted color forever, so the sidebar
  // could tell you *which page* you were on but never *which section of
  // it* - scrolling through all four Architecture sections, for example,
  // never changed anything in the nav. rootMargin pulls the "active
  // zone" up to just under the fixed navbar (h-14) and caps it at the
  // top 30% of the viewport, so a heading is marked active right as it
  // clears the header, not only once it's dead center.
  useEffect(() => {
    if (sectionIds.length === 0) {
      setActiveId(null);
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });
        // When two adjacent sections are both partly inside the active
        // zone (the outgoing one's tail end plus the incoming one's
        // start), the one further down the page is the one you've
        // actually scrolled to - picking the first match instead
        // highlighted whatever section you'd just scrolled *past*.
        const lastEntered = [...sectionIds].reverse().find((id) => intersecting.has(id));
        setActiveId(lastEntered ?? null);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // sectionIds is derived fresh each render; join() keeps the effect
    // from re-subscribing unless the actual set of ids changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, sectionIds.join("|")]);

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
                  {section.items.map((item) => {
                    const hashId = item.href.split("#")[1];
                    const isItemActive = isActive && hashId !== undefined && hashId === activeId;
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={onNavigate}
                          className={`block py-0.5 text-sm transition-colors ${
                            isItemActive
                              ? "font-medium text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
