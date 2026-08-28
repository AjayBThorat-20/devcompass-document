import React from "react";
import CodeBlock from "@/Components/UI/CodeBlock";
import { healthTiers } from "@/constants/config";

export default function FirstAnalysis() {
  return (
    <section id="first-analysis" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">First Analysis</h2>
      <p className="mt-2 text-muted-foreground">Run it inside any project.</p>

      <div className="mt-6">
        <CodeBlock
          lines={[
            "# Run your first analysis (shows Top 3 critical issues)",
            "devcompass analyze",
            "",
            "# Get full detailed report",
            "devcompass analyze --deep",
            "",
            "# Get AI-powered recommendations",
            "devcompass analyze --ai",
            "",
            "# Generate interactive dependency graph",
            "devcompass graph --open",
          ]}
        />
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-foreground mb-4">Health score icons</p>
        <div className="panel p-2 md:p-4">
          {healthTiers.map((tier) => (
            <div key={tier.label} className="list-row px-2">
              <span className="text-xl flex-shrink-0" aria-hidden>{tier.icon}</span>
              <span className="font-mono text-sm text-foreground w-28 flex-shrink-0">{tier.range}</span>
              <span className="font-semibold text-foreground">{tier.label}</span>
              <span className="text-muted-foreground text-sm">— {tier.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
