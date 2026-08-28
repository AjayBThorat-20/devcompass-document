export interface CommandGroup {
  id: string;
  category: string;
  name: string;
  title: string;
  description: string;
  examples: string[];
  notes?: string[];
  gif?: string;
  gifAlt?: string;
}

export const commandGroups: CommandGroup[] = [
  {
    id: "analyze",
    category: "Core Analysis",
    name: "analyze",
    title: "Analyze Project Dependencies",
    description:
      "Comprehensive dependency analysis with security scanning and health metrics.",
    examples: [
      "devcompass analyze",
      "devcompass analyze --deep",
      "devcompass analyze --ai",
      "devcompass analyze --json",
      "devcompass analyze --silent",
      "devcompass analyze --ci --threshold 8.0",
    ],
    notes: [
      "Default — Top 3 critical issues, clean and focused",
      "Deep — complete analysis, all issues categorized",
      "JSON — structured data for automation",
      "CI — exit code driven by health score threshold",
    ],
    gif: "/gifs/demo-analyze.gif",
    gifAlt: "devcompass analyze finding real CVEs in a sample project",
  },
  {
    id: "cve",
    category: "Security",
    name: "cve",
    title: "CVE Vulnerability Management",
    description: "Manage CVE detection settings and the local vulnerability cache.",
    examples: [
      "devcompass cve key --set --api-key YOUR_KEY",
      "devcompass cve key --remove",
      "devcompass cve test",
      "devcompass cve cache --stats",
      "devcompass cve cache --clear",
    ],
    notes: [
      "NVD cache TTL is 24 hours — first run 2-5s, cached under 100ms",
      "Get a free NVD key at nvd.nist.gov/developers/request-an-api-key",
    ],
    gif: "/gifs/demo-cve.gif",
    gifAlt: "devcompass cve key and cache --stats output",
  },
  {
    id: "fix",
    category: "Fixing & Automation",
    name: "fix",
    title: "Automated Issue Resolution",
    description:
      "Fix dependency issues with intelligent risk classification and safety guarantees.",
    examples: [
      "devcompass fix",
      "devcompass fix --yes",
      "devcompass fix --all",
      "devcompass fix --dry-run",
    ],
    notes: [
      "Automatic backup before any change",
      "Risk classification: safe / moderate / risky",
      "Rollback support via `devcompass backup restore`",
    ],
    gif: "/gifs/demo-fix.gif",
    gifAlt: "devcompass fix previewing, backing up, and applying safe fixes",
  },
  {
    id: "graph",
    category: "Visualization",
    name: "graph",
    title: "Dependency Graph Visualization",
    description: "Generate interactive dependency graphs with multiple layouts and filters.",
    examples: [
      "devcompass graph --open",
      "devcompass graph --layout force",
      "devcompass graph --layout radial",
      "devcompass graph --layout conflict",
      "devcompass graph --filter vulnerable",
      "devcompass graph --output my-deps.html --width 1600 --height 900",
    ],
    gif: "/gifs/demo-graph.gif",
    gifAlt: "devcompass graph generating a force-directed layout filtered to vulnerable packages",
  },
  {
    id: "snapshot",
    category: "History & Tracking",
    name: "snapshot",
    title: "Snapshot Management",
    description: "Save and manage project state snapshots for comparison over time.",
    examples: [
      "devcompass snapshot save",
      "devcompass snapshot list --limit 50",
      "devcompass snapshot view 123 --verbose",
      "devcompass snapshot delete 123 --yes",
    ],
    gif: "/gifs/demo-snapshot.gif",
    gifAlt: "devcompass snapshot list and snapshot view output",
  },
  {
    id: "compare",
    category: "History & Tracking",
    name: "compare",
    title: "Snapshot Comparison",
    description: "Compare two snapshots to track changes over time.",
    examples: [
      "devcompass compare 51 52",
      "devcompass compare 51 52 --verbose",
      "devcompass compare 51 52 -o report.md",
    ],
    gif: "/gifs/demo-compare.gif",
    gifAlt: "devcompass compare showing packages removed and health score change between two snapshots",
  },
  {
    id: "history",
    category: "History & Tracking",
    name: "history",
    title: "Historical Analysis",
    description: "View and analyze snapshot history.",
    examples: [
      "devcompass history list --limit 50",
      "devcompass history list --project myapp",
      "devcompass history list --month 08-2026",
      "devcompass history summary",
      "devcompass history stats",
      "devcompass history cleanup --keep 10",
    ],
    notes: [
      "history only takes a subcommand — for a single snapshot's details, use `devcompass snapshot view <id>` or `devcompass compare <id1> <id2>` instead",
    ],
    gif: "/gifs/demo-history.gif",
    gifAlt: "devcompass history list and history stats output",
  },
  {
    id: "timeline",
    category: "History & Tracking",
    name: "timeline",
    title: "Timeline Visualization",
    description: "Generate an interactive timeline showing dependency evolution.",
    examples: [
      "devcompass timeline --open",
      "devcompass timeline --days 30",
      "devcompass timeline --days 90",
    ],
    gif: "/gifs/demo-timeline.gif",
    gifAlt: "devcompass timeline showing an improving health score trend",
  },
  {
    id: "backup",
    category: "Backup & Recovery",
    name: "backup",
    title: "Backup Management",
    description: "Manage package.json and package-lock.json backups.",
    examples: [
      "devcompass backup list",
      "devcompass backup info --name backup-2025-05-10T19-50-37-541Z",
      "devcompass backup restore --name backup-xxx --force",
      "devcompass backup clean --keep 3",
    ],
    gif: "/gifs/demo-backup.gif",
    gifAlt: "devcompass backup list and backup restore output",
  },
  {
    id: "ai",
    category: "AI",
    name: "ai",
    title: "AI-Powered Insights",
    description: "Interact with AI for dependency analysis and recommendations.",
    examples: [
      'devcompass ai ask "Why is axios outdated?"',
      "devcompass ai alternatives moment",
      "devcompass ai chat",
      "devcompass ai recommend",
    ],
    gif: "/gifs/demo-ai.gif",
    gifAlt: "devcompass ai ask giving a real answer from a local Ollama model",
  },
  {
    id: "llm",
    category: "AI",
    name: "llm",
    title: "AI Provider Management",
    description: "Configure and manage AI/LLM providers.",
    examples: [
      "devcompass llm add --provider openai --token sk-xxx --model gpt-4o-mini",
      "devcompass llm add --provider local --model llama3.2 --base-url http://localhost:11434",
      "devcompass llm list",
      "devcompass llm default openai",
      "devcompass llm test openai",
      "devcompass llm stats",
      "devcompass llm remove anthropic",
    ],
    gif: "/gifs/demo-llm.gif",
    gifAlt: "devcompass llm list and llm test output",
  },
  {
    id: "config",
    category: "Configuration",
    name: "config",
    title: "DevCompass Configuration",
    description: "Manage DevCompass settings.",
    examples: [
      "devcompass config --github-token YOUR_TOKEN",
      "devcompass config --show",
      "devcompass config --remove-github-token",
    ],
    gif: "/gifs/demo-config.gif",
    gifAlt: "devcompass config --show output",
  },
  {
    id: "clean",
    category: "Maintenance",
    name: "clean",
    title: "Clean Output Directories",
    description:
      "Manage the .devcompass/ output directory in the current project (cache, backups, generated graphs, reports, exports, and temp files).",
    examples: [
      "devcompass clean",
      "devcompass clean --all",
      "devcompass clean --cache",
      "devcompass clean --graphs --force",
    ],
    notes: [
      "With no flags, it only prints a summary — nothing is deleted until you pass a category (or --all) plus --force to skip confirmation",
      "--backups clears the internal .devcompass/backups/ dir, not the package.json/package-lock.json backups fix and backup restore create — manage those with `devcompass backup clean`",
    ],
    gif: "/gifs/demo-clean.gif",
    gifAlt: "devcompass clean summary followed by devcompass clean --graphs --force",
  },
];
