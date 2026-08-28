export interface FileLocation {
  path: string;
  description: string;
}

export const globalFiles: FileLocation[] = [
  { path: "~/.devcompass/history.db", description: "Snapshot database" },
  { path: "~/.devcompass/cve.db", description: "CVE cache" },
  { path: "~/.devcompass/ai.db", description: "AI conversation history" },
  { path: "~/.devcompass/config.db", description: "Configuration" },
  { path: "~/.devcompass/llm.db", description: "LLM provider settings" },
];

export const projectFiles: FileLocation[] = [
  { path: "<project>/.devcompass-backups/", description: "Backup files (created before every fix)" },
  { path: "<project>/.devcompass-cache.json", description: "Analysis cache" },
  { path: "<project>/devcompass.config.json", description: "Optional project-level configuration" },
];

export const dataFiles: FileLocation[] = [
  { path: "data/tracked-repos.json", description: "GitHub repositories to monitor" },
  { path: "data/popular-packages.json", description: "Common package patterns" },
  { path: "data/quality-alternatives.json", description: "Deprecated package replacements" },
  { path: "data/gpl-alternatives.json", description: "GPL license alternatives" },
  { path: "data/batch-categories.json", description: "Fix categorization rules" },
  { path: "data/priorities.json", description: "Priority classification" },
];

export interface HealthTier {
  icon: string;
  range: string;
  label: string;
  description: string;
}

export const healthTiers: HealthTier[] = [
  { icon: "🟢", range: "9.0 – 10.0", label: "Excellent", description: "Outstanding health" },
  { icon: "✅", range: "8.0 – 8.9", label: "Good", description: "Healthy project" },
  { icon: "⚠️", range: "6.0 – 7.9", label: "Needs Attention", description: "Some issues" },
  { icon: "🟠", range: "4.0 – 5.9", label: "Poor", description: "Many issues" },
  { icon: "🔴", range: "0.0 – 3.9", label: "Critical", description: "Urgent action needed" },
];
