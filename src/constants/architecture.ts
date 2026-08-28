import {
  FaFileAlt,
  FaTasks,
  FaCompressArrowsAlt,
  FaHeartbeat,
  FaSave,
  FaHistory,
  FaFlagCheckered,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface PipelineStep {
  icon: IconType;
  title: string;
  meta: string;
  description: string;
  collectors?: string[];
}

// The devcompass analyze pipeline, traced from src/features/analyze/index.js.
// Kept as data (not hardcoded JSX) so it renders through the same
// TimelineRail/TimelineItem shell the rest of the site already has for
// sequential content, instead of a bespoke one-off list.
export const analyzePipelineSteps: PipelineStep[] = [
  {
    icon: FaFileAlt,
    title: "Load package.json",
    meta: "shared/utils/file-cache.js",
    description: "An mtime-cached read, so nothing in one run re-reads the same file from disk twice.",
  },
  {
    icon: FaTasks,
    title: "Run collectors concurrently",
    meta: "features/analyze/collectors/*.js — Promise.allSettled",
    description:
      "A failed collector degrades to an empty result instead of failing the whole run. Ecosystem and Predictive call GitHub's API and are skipped in silent/CI mode to keep those paths fast.",
    collectors: ["CVE", "License", "Quality", "Security", "Outdated", "Unused", "Ecosystem*", "Predictive*"],
  },
  {
    icon: FaCompressArrowsAlt,
    title: "Merge & normalize into Issue[]",
    meta: "core/services/issue-collector.js — IssueCollector.getAll()",
    description:
      "Dedupes findings per package (mergeByPackage — e.g. when both npm audit and a CVE lookup flag the same package) and maps everything to the canonical Issue model.",
  },
  {
    icon: FaHeartbeat,
    title: "Score the project",
    meta: "core/services/health-calculator.js — HealthCalculator.calculate()",
    description:
      "Starts at 10.0, subtracts severityPenalty × typePenalty per issue (CRITICAL 2.0 … LOW 0.5, security 1.2 … unused 0.3), clamps to [0, 10].",
  },
  {
    icon: FaSave,
    title: "Cache & render",
    meta: "shared/utils/analysis-cache.js + renderers/",
    description:
      "24h-TTL cache, versioned against the installed devcompass version. Renders default, --deep, or --json output.",
  },
  {
    icon: FaHistory,
    title: "Save a snapshot",
    meta: "core/services/snapshot-manager.js → features/history/",
    description:
      "Unless --no-history or silent — persisted to ~/.devcompass/history.db for later history, compare, and timeline commands.",
  },
  {
    icon: FaFlagCheckered,
    title: "CI gate (optional)",
    meta: "--ci / --ci-threshold (default 7.0)",
    description: "Compares healthScore against the threshold and process.exit(0 | 1) — this is what a CI pipeline checks.",
  },
];
