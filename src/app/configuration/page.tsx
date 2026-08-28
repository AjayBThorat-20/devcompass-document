import { Configuration } from "@/Components/Configuration/page";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";

const toc = [
  { id: "file-locations", label: "File Locations" },
  { id: "data-files", label: "Config Files" },
  { id: "cli", label: "config Command" },
];

export const metadata: Metadata = {
  title: "Configuration | DevCompass Docs",
  description:
    "Where DevCompass stores its data — global databases, per-project backups and caches, and the data/ files that drive fix classification.",
  alternates: {
    canonical: "/configuration",
  },
};

export default function Page() {
  return (
    <DocsShell
      path="/configuration"
      title="Configuration"
      description="No cloud account, no config server — everything DevCompass tracks stays on disk, either globally or inside your project."
      toc={toc}
    >
      <Configuration />
    </DocsShell>
  );
}
