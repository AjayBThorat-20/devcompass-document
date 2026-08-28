import React from "react";
import { FlowChain } from "@/Components/UI/FlowDiagram";

const scriptLoadOrder = ["utils.js", "tooltip.js", "stats.js", "controls.js", "layouts.js", "core.js"];

export default function DashboardFlow() {
  return (
    <section id="dashboard" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">Dashboard Generation</h2>
      <p className="mt-2 text-muted-foreground">
        <code className="font-mono text-foreground">graph</code> and <code className="font-mono text-foreground">timeline</code>{" "}
        don&apos;t run a server — they template out one self-contained HTML file.
      </p>

      <div className="mt-6">
        <FlowChain
          nodes={[
            {
              label: "index.html template",
              meta: "src/dashboard/index.html",
              description: "features/graph/graph.exporter.js reads it as a string, not a rendered page.",
            },
            {
              label: "Inject data",
              meta: "{{GRAPH_DATA}}",
              description: "Replaced with window.graphData = {...} — nodes, links, and metadata as one JSON blob.",
            },
            {
              label: "Inline clustering",
              meta: "{{CLUSTERING_CODE}}",
              description: "graph.clustering.js's contents, module.exports stripped, dropped straight into a <script> tag.",
            },
            {
              label: "Inline every asset",
              meta: "inlineAllAssets()",
              description: "Every styles/*.css and scripts/*.js file inlined too — one output file, no loose parts.",
            },
          ]}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        The result is a single static HTML file with no external dependency beyond the D3 CDN script tag. If the template file is
        ever missing, <code className="font-mono text-foreground">generateFallbackHTML()</code> renders a minimal D3 force-graph
        instead of failing outright.
      </p>

      <div className="entry-card mt-6 px-4 py-4 md:px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Client-side script load order — src/dashboard/scripts/
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-foreground">
          {scriptLoadOrder.map((file, i) => (
            <React.Fragment key={file}>
              <span className="rounded-md border border-border bg-muted/40 px-2 py-1">{file}</span>
              {i < scriptLoadOrder.length - 1 && <span className="text-muted-foreground/50">→</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          <code className="font-mono">layouts.js</code> holds the 5 renderers (tree / force / radial / conflict / analytics) — it&apos;s
          almost always the right file for changing how the graph looks.{" "}
          <code className="font-mono">core.js</code> is the bootstrap: validates <code className="font-mono">window.graphData</code>,
          wires everything up, and defaults to the tree layout.
        </p>
      </div>
    </section>
  );
}
