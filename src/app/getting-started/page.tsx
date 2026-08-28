import { Installation, FirstAnalysis, Security } from "@/Components/GettingStarted/page";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";

const toc = [
  { id: "installation", label: "Installation" },
  { id: "first-analysis", label: "First Analysis" },
  { id: "security", label: "Security" },
];

export const metadata: Metadata = {
  title: "Getting Started | DevCompass Docs",
  description:
    "Install DevCompass and run your first dependency analysis in under a minute. Global install, npx, or as a devDependency.",
  alternates: {
    canonical: "/getting-started",
  },
};

export default function Page() {
  return (
    <DocsShell
      path="/getting-started"
      title="Getting Started"
      description="Install DevCompass globally, run it against any Node.js project, and optionally wire up CVE severity scoring — all in a few commands."
      toc={toc}
    >
      <Installation />
      <FirstAnalysis />
      <Security />
    </DocsShell>
  );
}
