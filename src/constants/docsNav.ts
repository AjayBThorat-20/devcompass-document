// Sidebar navigation tree for the documentation shell (DocsShell +
// DocsSidebar). Sub-items for Features and CLI Reference are derived
// straight from their content constants so the sidebar can never drift
// out of sync with the sections that actually exist on each page.
import { commandGroups } from "./commands";
import { featureGroups } from "./features";

export interface DocsNavLink {
  label: string;
  href: string;
}

export interface DocsNavSection {
  label: string;
  href: string;
  items?: DocsNavLink[];
}

const cliCategories = Array.from(new Set(commandGroups.map((c) => c.category)));

export const docsNav: DocsNavSection[] = [
  {
    label: "Getting Started",
    href: "/getting-started",
    items: [
      { label: "Installation", href: "/getting-started#installation" },
      { label: "First Analysis", href: "/getting-started#first-analysis" },
      { label: "Security", href: "/getting-started#security" },
    ],
  },
  {
    label: "Features",
    href: "/features",
    items: featureGroups.map((group) => ({
      label: group.title,
      href: `/features#${group.id}`,
    })),
  },
  {
    label: "CLI Reference",
    href: "/cli-reference",
    items: cliCategories.map((category) => ({
      label: category,
      href: `/cli-reference#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    })),
  },
  {
    label: "Configuration",
    href: "/configuration",
    items: [
      { label: "File Locations", href: "/configuration#file-locations" },
      { label: "Configuration Files", href: "/configuration#data-files" },
      { label: "The config Command", href: "/configuration#cli" },
    ],
  },
  {
    label: "Architecture",
    href: "/architecture",
    items: [
      { label: "System Overview", href: "/architecture#overview" },
      { label: "The analyze Pipeline", href: "/architecture#analyze-pipeline" },
      { label: "CLI Command Pattern", href: "/architecture#cli-commands" },
      { label: "Dashboard Generation", href: "/architecture#dashboard" },
      { label: "Testing & Coverage", href: "/architecture#testing" },
    ],
  },
  {
    label: "vs npm audit",
    href: "/vs-npm-audit",
    items: [
      { label: "What npm audit does", href: "/vs-npm-audit#what-npm-audit-does" },
      { label: "What DevCompass adds", href: "/vs-npm-audit#what-devcompass-adds" },
    ],
  },
  {
    label: "vs Dependabot",
    href: "/vs-dependabot",
    items: [
      { label: "What Dependabot does", href: "/vs-dependabot#what-dependabot-does" },
      { label: "What DevCompass adds", href: "/vs-dependabot#what-devcompass-adds" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];
