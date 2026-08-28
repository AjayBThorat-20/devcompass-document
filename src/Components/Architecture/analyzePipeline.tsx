import React from "react";
import { TimelineRail, TimelineItem } from "@/Components/UI/Timeline";
import Badge from "@/Components/UI/Badge";
import { getAccent } from "@/Components/UI/accentColor";
import { analyzePipelineSteps } from "@/constants/architecture";

// The flagship flow chart: what actually happens, in order, during
// `devcompass analyze` (also the no-args default). Traced directly from
// src/features/analyze/index.js — every meta line names the real
// file/function so a contributor can jump straight from this diagram
// into the source that implements each step.
export default function AnalyzePipeline() {
  return (
    <section id="analyze-pipeline" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">The analyze Pipeline</h2>
      <p className="mt-2 text-muted-foreground">
        Every other command either produces input for this pipeline or reads its output — it&apos;s the center of the codebase.
      </p>

      <div className="mt-6">
        <TimelineRail>
          {analyzePipelineSteps.map((step, index) => {
            const accent = getAccent(index);
            return (
              <TimelineItem key={step.title} icon={step.icon} accent={accent} meta={step.meta}>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
                {step.collectors && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {step.collectors.map((name) => (
                      <Badge key={name} accent={accent}>
                        {name}
                      </Badge>
                    ))}
                  </div>
                )}
              </TimelineItem>
            );
          })}
        </TimelineRail>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">* skipped when running silent or with --ci</p>
    </section>
  );
}
