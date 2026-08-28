import React from "react";
import Link from "next/link";
import { FlowChain, FlowSplit } from "@/Components/UI/FlowDiagram";

export default function Overview() {
  return (
    <section id="overview" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">System Overview</h2>
      <p className="mt-2 text-muted-foreground">
        How a run of the CLI moves through the codebase, from the executable to the shared engine.
      </p>

      <div className="mt-6 space-y-0">
        <FlowChain
          nodes={[
            {
              label: "bin/devcompass.js",
              meta: "entry point",
              description: "Registers every command. Run with no arguments at all, it skips commander and calls runAnalyze() directly.",
            },
            {
              label: "CLI commands",
              meta: "src/cli/commands/*.cmd.js",
              description: "commander.js wiring only — lazily requires the matching feature inside .action(), never at file top.",
            },
            {
              label: "Feature modules",
              meta: "src/features/<name>/",
              description: "One directory per feature: analyze, fix, cve, history, graph, ai, config, backup, clean, and more.",
            },
          ]}
        />
        <FlowSplit
          nodes={[
            {
              label: "core/",
              meta: "the engine",
              description: "Feature-agnostic: the Issue model, health scoring, ranking, risk classification. Doesn't know about CLI commands.",
            },
            {
              label: "shared/",
              meta: "the infrastructure",
              description: "Logging, error handling, caching, backups, encryption, the npm registry client, process lifecycle.",
            },
          ]}
        />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        A <code className="font-mono text-foreground">.cmd.js</code> file only ever imports its own feature&apos;s entrypoint —
        never another feature&apos;s internals directly. Where state actually lives on disk (four global SQLite databases plus
        per-project cache/backup files) is covered on the{" "}
        <Link href="/configuration#file-locations" className="text-foreground underline underline-offset-2 hover:text-primary">
          Configuration
        </Link>{" "}
        page.
      </p>
    </section>
  );
}
