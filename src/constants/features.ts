import {
  FaShieldAlt,
  FaRobot,
  FaChartLine,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface FeatureGroup {
  id: string;
  icon: IconType;
  title: string;
  points: string[];
}

export const featureGroups: FeatureGroup[] = [
  {
    id: "security",
    icon: FaShieldAlt,
    title: "Security & Vulnerability Detection",
    points: [
      "Dual-source CVE detection — OSV (free) + NVD (optional API key)",
      "CVSS severity scoring — CRITICAL / HIGH / MEDIUM / LOW",
      "Smart 24-hour local cache for instant repeat scans",
      "Encrypted (AES-256-GCM) local storage for API keys",
      "Batch, concurrent vulnerability checks for performance",
    ],
  },
  {
    id: "ai",
    icon: FaRobot,
    title: "AI-Powered Analysis",
    points: [
      "4 providers supported — OpenAI, Anthropic, Google, or local Ollama",
      "Interactive chat to ask questions about your dependencies",
      "AI-suggested package alternatives (size, API compatibility, upkeep)",
      "Context-aware recommendations based on your project's real state",
      "Free option — local Ollama keeps AI analysis fully offline",
    ],
  },
  {
    id: "history",
    icon: FaChartLine,
    title: "Historical Tracking",
    points: [
      "Snapshot your project state and compare over time",
      "Monthly summaries and long-run statistics",
      "Timeline visualization of dependency evolution",
      "SQLite-backed local history — nothing leaves your machine",
    ],
  },
  {
    id: "visualization",
    icon: FaProjectDiagram,
    title: "Interactive Visualization",
    points: [
      "Tree, Force, Radial, Conflict, and Analytics layouts",
      "Real-time filtering — vulnerable, outdated, unused",
      "Depth control, search, zoom and pan",
      "Export as PNG or JSON",
    ],
  },
  {
    id: "fixing",
    icon: FaTools,
    title: "Intelligent Fixing",
    points: [
      "Risk classification — safe / moderate / risky",
      "Interactive preview and confirmation before any change",
      "Automatic backup before every fix, with rollback support",
      "Health score tracking — before vs. after",
    ],
  },
];

export interface ComparisonRow {
  capability: string;
  npmAudit: string;
  dependabot: string;
  devcompass: string;
}

export const comparisonRows: ComparisonRow[] = [
  { capability: "CVE scanning", npmAudit: "Yes", dependabot: "Yes", devcompass: "Yes (OSV + NVD)" },
  { capability: "License conflicts", npmAudit: "No", dependabot: "No", devcompass: "Yes" },
  { capability: "Unused dependency detection", npmAudit: "No", dependabot: "No", devcompass: "Yes" },
  { capability: "Historical health trends", npmAudit: "No", dependabot: "No", devcompass: "Yes" },
  { capability: "AI-suggested alternatives", npmAudit: "No", dependabot: "No", devcompass: "Yes" },
  { capability: "Safe auto-fix w/ rollback", npmAudit: "Partial", dependabot: "PR-based", devcompass: "Yes, with automatic backup" },
];
