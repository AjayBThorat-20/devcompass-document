import React from "react";
import CodeBlock from "@/Components/UI/CodeBlock";
import { globalFiles, projectFiles, dataFiles, FileLocation } from "@/constants/config";

function FileTable({ files }: { files: FileLocation[] }) {
  return (
    <div className="panel divide-y divide-border">
      {files.map((file) => (
        <div key={file.path} className="list-row px-4 md:px-6">
          <code className="font-mono text-sm text-primary break-all">{file.path}</code>
          <span className="text-sm text-muted-foreground ml-auto text-right">{file.description}</span>
        </div>
      ))}
    </div>
  );
}

export default function Configuration() {
  return (
    <>
      <section id="file-locations" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">File Locations</h2>
        <p className="mt-2 text-muted-foreground">Everything lives locally.</p>

        <div className="mt-6 space-y-8">
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Global — ~/.devcompass/</p>
            <FileTable files={globalFiles} />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Per-project</p>
            <FileTable files={projectFiles} />
          </div>
        </div>
      </section>

      <section id="data-files" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">Configuration Files</h2>
        <p className="mt-2 text-muted-foreground">Dynamic tracking &amp; fix-classification data.</p>
        <div className="mt-6">
          <FileTable files={dataFiles} />
        </div>
      </section>

      <section id="cli" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">The config Command</h2>
        <p className="mt-2 text-muted-foreground">Manage settings from the CLI.</p>
        <div className="mt-6">
          <CodeBlock
            lines={[
              "# Set GitHub token (avoid rate limits)",
              "devcompass config --github-token YOUR_TOKEN",
              "",
              "# Show current configuration",
              "devcompass config --show",
              "",
              "# Remove GitHub token",
              "devcompass config --remove-github-token",
            ]}
          />
        </div>
      </section>
    </>
  );
}
