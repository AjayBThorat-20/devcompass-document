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
  children: React.ReactNode;
}

// Two-column documentation shell: persistent left nav + a prose-width
// content column - shared by every doc route (getting-started, features,
// cli-reference, configuration, faq). No separate right-hand "On this
// page" rail: DocsSidebar already expands every section's sub-anchors
// at the same lg breakpoint where the sidebar itself appears, so a
// second "on this page" list next to it would just repeat the same
// labels. The collapsible "On this page" below the title only renders
// below lg, exactly where the sidebar is hidden behind the mobile menu.
export default function DocsShell({ title, description, toc = [], children }: DocsShellProps) {
  return (
    <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
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
