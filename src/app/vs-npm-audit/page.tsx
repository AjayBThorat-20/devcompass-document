import Link from "next/link";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";
import { comparisonRows } from "@/constants/features";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "what-npm-audit-does", label: "What npm audit does" },
  { id: "what-devcompass-adds", label: "What DevCompass adds" },
];

export const metadata: Metadata = {
  title: "DevCompass vs npm audit | DevCompass Docs",
  description:
    "How DevCompass compares to npm audit: both use vulnerability data to catch known CVEs, but DevCompass adds license-conflict detection, unused-dependency detection, historical health trends, and safe auto-fix with rollback.",
  alternates: {
    canonical: "/vs-npm-audit",
  },
};

export default function Page() {
  return (
    <DocsShell
      path="/vs-npm-audit"
      title="DevCompass vs npm audit"
      description="Where the two overlap, and what DevCompass adds on top."
      toc={toc}
    >
      <section id="overview" className="scroll-mt-20">
        <div className="panel p-6 border-l-4 border-l-primary">
          <p className="text-foreground leading-relaxed">
            DevCompass does <strong>not</strong> replace <code>npm audit</code> — both
            check your dependencies against known-vulnerability data, and you should
            keep running <code>npm audit</code> as part of your normal workflow.
            DevCompass is a complement that runs the same kind of CVE check plus
            several things <code>npm audit</code> structurally doesn&apos;t do at all.
          </p>
        </div>
      </section>

      <section id="what-npm-audit-does" className="scroll-mt-20 mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">What npm audit does</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          <code>npm audit</code> checks your installed dependency tree against npm&apos;s
          advisory database and reports known vulnerabilities, with <code>npm audit fix</code>{" "}
          able to bump affected packages automatically. It ships with npm itself, requires
          no setup, and is the right first line of defense for every Node.js project.
        </p>
      </section>

      <section id="what-devcompass-adds" className="scroll-mt-20 mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">What DevCompass adds</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          DevCompass uses <a href="https://osv.dev" className="link-underline text-primary" target="_blank" rel="noopener noreferrer">OSV</a>{" "}
          (with optional NVD enrichment for CVSS scores) for the same class of CVE check,
          then adds:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">License-conflict detection</strong> — flags GPL/AGPL-family dependencies that could impose obligations on your own license.</li>
          <li><strong className="text-foreground">Unused-dependency detection</strong> — finds installed packages nothing in your code actually imports.</li>
          <li><strong className="text-foreground">Historical health trends</strong> — snapshots your dependency health over time so you can see whether things are improving or decaying.</li>
          <li><strong className="text-foreground">AI-suggested alternatives</strong> — optional, provider-agnostic suggestions for replacing risky or deprecated packages.</li>
          <li><strong className="text-foreground">Safe auto-fix with automatic backup and rollback</strong> — <code>npm audit fix</code> can bump a package without a safety net; <code>devcompass fix</code> classifies risk, previews changes, and can undo them.</li>
        </ul>

        <div className="mt-8 panel overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-5 py-3 font-semibold text-foreground">Capability</th>
                <th className="px-5 py-3 font-semibold text-muted-foreground">npm audit</th>
                <th className="px-5 py-3 font-semibold text-primary">DevCompass</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-b border-border last:border-none">
                  <td className="px-5 py-3 text-foreground font-medium">{row.capability}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.npmAudit}</td>
                  <td className="px-5 py-3 text-primary font-semibold">{row.devcompass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-muted-foreground">
          See the full{" "}
          <Link href="/features" className="link-underline font-semibold text-primary">
            Features
          </Link>{" "}
          breakdown, or{" "}
          <Link href="/getting-started" className="link-underline font-semibold text-primary">
            get started
          </Link>{" "}
          with <code>npm install -g devcompass</code>.
        </p>
      </section>
    </DocsShell>
  );
}
