import React from "react";
import CodeBlock from "@/Components/UI/CodeBlock";

export default function Installation() {
  return (
    <section id="installation" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">Installation</h2>
      <p className="mt-2 text-muted-foreground">Three ways to install DevCompass.</p>

      <div className="mt-6">
        <CodeBlock
          lines={[
            "# Global installation (recommended)",
            "npm install -g devcompass",
            "",
            "# Local project installation",
            "npm install --save-dev devcompass",
            "",
            "# One-time use with npx",
            "npx devcompass analyze",
          ]}
        />
      </div>
    </section>
  );
}
