import { FeatureGroups } from "@/Components/Features/page";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";
import { featureGroups } from "@/constants/features";

const toc = featureGroups.map((group) => ({ id: group.id, label: group.title }));

export const metadata: Metadata = {
  title: "Features | DevCompass Docs",
  description:
    "Security scanning, AI-powered analysis, historical tracking, interactive visualization, and intelligent fixing — everything DevCompass covers.",
  alternates: {
    canonical: "/features",
  },
};

export default function Page() {
  return (
    <DocsShell
      title="Features"
      description="Everything DevCompass checks, generates, and fixes — organized by area."
      toc={toc}
    >
      <FeatureGroups />
    </DocsShell>
  );
}
