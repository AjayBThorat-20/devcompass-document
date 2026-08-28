import React from "react";
import { comparisonRows } from "@/constants/features";

export default function WhyDevcompass() {
  return (
    <div id="why" className="container-custom section scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl">
        <code>npm audit</code> and Dependabot are already in your workflow — DevCompass covers what they don&apos;t.
      </h2>

      <div className="mt-8 panel overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-5 py-3 font-semibold text-foreground">Capability</th>
              <th className="px-5 py-3 font-semibold text-muted-foreground">npm audit</th>
              <th className="px-5 py-3 font-semibold text-muted-foreground">Dependabot</th>
              <th className="px-5 py-3 font-semibold text-primary">DevCompass</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.capability} className="border-b border-border last:border-none">
                <td className="px-5 py-3 text-foreground font-medium">{row.capability}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.npmAudit}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.dependabot}</td>
                <td className="px-5 py-3 text-primary font-semibold">{row.devcompass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
