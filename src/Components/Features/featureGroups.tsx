import React from "react";
import { FaCheck } from "react-icons/fa";
import IconTile from "@/Components/UI/IconTile";
import { getAccent } from "@/Components/UI/accentColor";
import { featureGroups } from "@/constants/features";

export default function FeatureGroups() {
  return (
    <>
      {featureGroups.map((group, index) => (
        <FeatureGroupSection key={group.id} group={group} index={index} />
      ))}
    </>
  );
}

function FeatureGroupSection({
  group,
  index,
}: {
  group: (typeof featureGroups)[number];
  index: number;
}) {
  const accent = getAccent(index);

  return (
    <section id={group.id} className="scroll-mt-20">
      <div className="flex items-start gap-4">
        <IconTile icon={group.icon} accent={accent} size="md" />
        <h2 className="text-xl font-bold text-foreground md:text-2xl pt-1.5">{group.title}</h2>
      </div>

      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
        {group.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <FaCheck className={`w-3.5 h-3.5 mt-1 flex-shrink-0 ${accent.text}`} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {group.id === "security" && <SecurityDeepDive />}
    </section>
  );
}

// Extra detail specific to the security group: how the two vulnerability
// databases are combined, and the measured cache speedup - pulled straight
// from the project README rather than summarized, since these are the
// numbers people actually want before they trust a scanner.
function SecurityDeepDive() {
  const performanceRows = [
    { operation: "6 packages", withoutCache: "2-5 seconds", withCache: "<100ms", improvement: "20-50× faster" },
    { operation: "CVE lookup", withoutCache: "300-500ms", withCache: "<10ms", improvement: "30-50× faster" },
    { operation: "Full scan", withoutCache: "8-12 seconds", withCache: "5-6 seconds", improvement: "~50% faster" },
  ];

  return (
    <div className="mt-8 space-y-8">
      <div className="panel p-6 space-y-4">
        <p className="text-sm font-semibold text-foreground">Detection process</p>
        <ol className="space-y-2 text-sm text-foreground/90 list-decimal list-inside">
          <li>Scans all project dependencies</li>
          <li>Queries the OSV database for vulnerabilities</li>
          <li>Enriches with NVD data, if configured</li>
          <li>Caches results locally for 24 hours</li>
          <li>Reports findings with severity levels</li>
        </ol>
      </div>

      <div className="overflow-x-auto">
        <p className="text-sm font-semibold text-foreground mb-3">Performance — cached vs. uncached</p>
        <table className="w-full text-sm panel">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-5 py-3 font-semibold text-foreground">Operation</th>
              <th className="px-5 py-3 font-semibold text-muted-foreground">Without cache</th>
              <th className="px-5 py-3 font-semibold text-muted-foreground">With cache</th>
              <th className="px-5 py-3 font-semibold text-primary">Improvement</th>
            </tr>
          </thead>
          <tbody>
            {performanceRows.map((row) => (
              <tr key={row.operation} className="border-b border-border last:border-none">
                <td className="px-5 py-3 text-foreground font-medium">{row.operation}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.withoutCache}</td>
                <td className="px-5 py-3 text-muted-foreground">{row.withCache}</td>
                <td className="px-5 py-3 text-primary font-semibold">{row.improvement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
