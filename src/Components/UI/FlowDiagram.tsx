import React from "react";

export interface FlowNodeData {
  label: string;
  meta?: string;
  description?: string;
}

interface FlowNodeProps extends FlowNodeData {
  className?: string;
}

// Single box in a flow chart: a label, an optional mono "meta" line (a
// file path or code reference — what this step actually is in the repo),
// and an optional description of what happens there. Deliberately plain
// (border + flat fill, no accent color) so a chain of 3-5 of these reads
// as one diagram rather than a rainbow of unrelated cards — color is for
// data (Badge/IconTile elsewhere), not for wiring diagrams.
export function FlowNode({ label, meta, description, className = "" }: FlowNodeProps) {
  return (
    <div className={`entry-card px-4 py-3.5 md:px-5 md:py-4 ${className}`}>
      <p className="text-sm font-bold text-foreground">{label}</p>
      {meta && <p className="mt-1 font-mono text-xs text-muted-foreground break-all">{meta}</p>}
      {description && <p className="mt-2 text-xs leading-relaxed text-foreground/70">{description}</p>}
    </div>
  );
}

// Arrow connector between two FlowNodes. Two glyphs, one shown per
// breakpoint, rather than a rotated single glyph — a rotated "→" reads
// as tilted/wrong at the exact instant of the flex-col/flex-row switch,
// swapping the character outright doesn't.
export function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center text-muted-foreground/50 ${
        vertical ? "py-1" : "py-1 md:py-0 md:px-2"
      }`}
      aria-hidden="true"
    >
      {vertical ? (
        <span className="text-lg leading-none">↓</span>
      ) : (
        <>
          <span className="text-lg leading-none md:hidden">↓</span>
          <span className="hidden text-lg leading-none md:block">→</span>
        </>
      )}
    </div>
  );
}

// A left-to-right chain of steps (bin.js → CLI commands → features → ...).
// Collapses to a top-to-bottom chain below md, where there's no room for
// four boxes side by side.
export function FlowChain({ nodes, className = "" }: { nodes: FlowNodeData[]; className?: string }) {
  return (
    <div className={`flex flex-col md:flex-row md:items-stretch ${className}`}>
      {nodes.map((node, i) => (
        <React.Fragment key={node.label}>
          <FlowNode {...node} className="md:flex-1" />
          {i < nodes.length - 1 && <FlowArrow />}
        </React.Fragment>
      ))}
    </div>
  );
}

// A single incoming arrow fanning out to N boxes side by side (e.g.
// "feature modules" splitting into core/ and shared/). The arrow is
// centered above the row, not per-box, since there's one source, not N.
export function FlowSplit({ nodes }: { nodes: FlowNodeData[] }) {
  return (
    <div className="flex flex-col items-stretch">
      <FlowArrow vertical />
      <div className="grid gap-3 sm:grid-cols-2">
        {nodes.map((node) => (
          <FlowNode key={node.label} {...node} />
        ))}
      </div>
    </div>
  );
}
