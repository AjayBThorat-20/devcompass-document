import React from "react";
import DocsSidebar from "@/Components/UI/DocsSidebar";

export interface DocsTocItem {
  id: string;
  label: string;
}

interface DocsShellProps {
  title: string;
  description?: string;
  toc?: DocsTocItem[];
  /** Canonical path of the page (e.g. "/architecture") - drives the BreadcrumbList structured data below. */
  path: string;
  children: React.ReactNode;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devcompass.ajaythorat.com";

// Two-column documentation shell: persistent left nav + a prose-width
// content column - shared by every doc route (getting-started, features,
// cli-reference, configuration, architecture, faq). No separate
// right-hand "On this page" rail: DocsSidebar already expands every
// section's sub-anchors at the same lg breakpoint where the sidebar
// itself appears, so a second "on this page" list next to it would just
// repeat the same labels. The collapsible "On this page" below the
// title only renders below lg, exactly where the sidebar is hidden
// behind the mobile menu.
export default function DocsShell({ title, description, toc = [], path, children }: DocsShellProps) {
  // BreadcrumbList structured data: every doc page otherwise reads as an
  // unrelated, disconnected page to a crawler/answer-engine - this ties
  // each one back to the docs site as its parent, which is what shows
  // up as the breadcrumb trail under a Google result and helps an LLM
  // attribute the page correctly when citing it.
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "DevCompass Docs", item: siteUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}${path}` },
    ],
  };

  return (
    <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-10 pr-4">
            <DocsSidebar />
          </div>
        </aside>

        <main className="min-w-0 py-10 lg:py-12">
          <header className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h1>
            {description && <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{description}</p>}
          </header>

          {toc.length > 0 && (
            <details className="panel mt-6 px-4 py-3 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-foreground">On this page</summary>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-muted-foreground hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <div className="mt-10 max-w-3xl space-y-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
