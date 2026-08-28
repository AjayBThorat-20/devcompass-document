import { CliReference } from "@/Components/CliReference/page";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";
import { commandGroups } from "@/constants/commands";

const categories = Array.from(new Set(commandGroups.map((c) => c.category)));
const toc = categories.map((category) => ({
  id: category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  label: category,
}));

export const metadata: Metadata = {
  title: "CLI Reference | DevCompass Docs",
  description:
    "Complete command reference for DevCompass: analyze, cve, fix, graph, snapshot, compare, history, timeline, backup, ai, llm, and config.",
  alternates: {
    canonical: "/cli-reference",
  },
};

export default function Page() {
  return (
    <DocsShell
      path="/cli-reference"
      title="CLI Reference"
      description="Every DevCompass command, grouped by what it's for."
      toc={toc}
    >
      <CliReference />
    </DocsShell>
  );
}
