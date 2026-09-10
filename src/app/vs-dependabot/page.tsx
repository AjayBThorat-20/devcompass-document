import Link from "next/link";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";
import { comparisonRows } from "@/constants/features";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "what-dependabot-does", label: "What Dependabot does" },
  { id: "what-devcompass-adds", label: "What DevCompass adds" },
];

export const metadata: Metadata = {
  title: "DevCompass vs Dependabot | DevCompass Docs",
  description:
    "How DevCompass compares to Dependabot: Dependabot opens PRs inside GitHub for outdated/vulnerable dependencies; DevCompass is a local CLI with no GitHub integration required, plus license-conflict detection, unused-dependency detection, and historical health trends.",
  alternates: {
    canonical: "/vs-dependabot",
  },
};

export default function Page() {
  return (
    <DocsShell
      path="/vs-dependabot"
      title="DevCompass vs Dependabot"
      description="Different delivery model, overlapping goal — and what DevCompass adds."
      toc={toc}
    >
      <section id="overview" className="scroll-mt-20">
        <div className="panel p-6 border-l-4 border-l-primary">
          <p className="text-foreground leading-relaxed">
            DevCompass does <strong>not</strong> replace Dependabot, and isn&apos;t trying
            to. Dependabot is a GitHub-native automation that opens pull requests for
            outdated or vulnerable dependencies. DevCompass is a local CLI you run
            anytime — in a terminal, a pre-commit hook, or any CI system — with no
            GitHub App, no repository permissions, and no PR automation involved.
          </p>
        </div>
      </section>

      <section id="what-dependabot-does" className="scroll-mt-20 mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">What Dependabot does</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Dependabot watches your GitHub repository, checks dependency manifests against
          vulnerability advisories and upstream releases, and opens a pull request when it
          finds something to update. It's built into GitHub, requires no separate install,
          and is a solid default for keeping a repo's dependencies from going stale.
        </p>
      </section>

      <section id="what-devcompass-adds" className="scroll-mt-20 mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">What DevCompass adds</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Works anywhere, not just GitHub</strong> — no repository permissions or GitHub App install; run it locally, in GitLab/Bitbucket CI, or on a machine with no git remote at all.</li>
          <li><strong className="text-foreground">License-conflict detection</strong> — flags GPL/AGPL-family dependencies, which Dependabot doesn't check for.</li>
          <li><strong className="text-foreground">Unused-dependency detection</strong> — finds installed packages nothing in your code imports.</li>
          <li><strong className="text-foreground">Historical health trends</strong> — a single health score tracked over time via local snapshots, not just a stream of individual PRs.</li>
          <li><strong className="text-foreground">Interactive dependency graphs</strong> — a visual, explorable view of your dependency tree.</li>
          <li><strong className="text-foreground">Immediate, on-demand results</strong> — <code>devcompass analyze</code> runs in your terminal right now, instead of waiting on Dependabot's scheduled scan-and-PR cycle.</li>
        </ul>

        <div className="mt-8 panel overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-5 py-3 font-semibold text-foreground">Capability</th>
                <th className="px-5 py-3 font-semibold text-muted-foreground">Dependabot</th>
                <th className="px-5 py-3 font-semibold text-primary">DevCompass</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-b border-border last:border-none">
                  <td className="px-5 py-3 text-foreground font-medium">{row.capability}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.dependabot}</td>
                  <td className="px-5 py-3 text-primary font-semibold">{row.devcompass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-muted-foreground">
          Many teams run both: Dependabot for its GitHub-native PR automation, and
          DevCompass for license/unused-dependency checks, health trends, and ad hoc
          local scans. See the full{" "}
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
