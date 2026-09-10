import { Overview, AnalyzePipeline, CliCommandFlow, DashboardFlow, TestingCoverage } from "@/Components/Architecture/page";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";

const toc = [
  { id: "overview", label: "System Overview" },
  { id: "analyze-pipeline", label: "The analyze Pipeline" },
  { id: "cli-commands", label: "CLI Command Pattern" },
  { id: "dashboard", label: "Dashboard Generation" },
  { id: "testing", label: "Testing & Coverage" },
];

export const metadata: Metadata = {
  title: "Architecture | DevCompass Docs",
  description:
    "How DevCompass is put together: the analyze pipeline, the CLI command dispatch pattern, and how the dependency-graph dashboard is generated — for contributors extending the CLI.",
  alternates: {
    canonical: "/architecture",
  },
};

export default function Page() {
  return (
    <DocsShell
      path="/architecture"
      title="Architecture"
      description="Flow charts for contributors: how a command moves through the codebase, from bin/devcompass.js down to the shared engine."
      toc={toc}
    >
      <Overview />
      <AnalyzePipeline />
      <CliCommandFlow />
      <DashboardFlow />
      <TestingCoverage />
    </DocsShell>
  );
}
