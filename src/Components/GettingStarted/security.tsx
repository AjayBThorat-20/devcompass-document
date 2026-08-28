import React from "react";
import Link from "next/link";
import CodeBlock from "@/Components/UI/CodeBlock";

export default function Security() {
  return (
    <section id="security" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-foreground md:text-2xl">Configure Security Scanning</h2>
      <p className="mt-2 text-muted-foreground">
        OSV works out of the box. NVD is optional, for CVSS scores.
      </p>

      <div className="mt-6">
        <CodeBlock
          lines={[
            "# Get a free NVD API key from nvd.nist.gov/developers/request-an-api-key",
            "devcompass cve key --set --api-key YOUR_KEY",
            "",
            "# Test connection",
            "devcompass cve test",
            "",
            "# Run analysis with CVE detection",
            "devcompass analyze",
          ]}
        />
      </div>

      <div className="mt-6 panel p-6 border-l-4 border-l-primary">
        <p className="text-foreground leading-relaxed">
          DevCompass never needs an API key to start scanning — OSV (Open Source
          Vulnerabilities) is free and always available. See the full{" "}
          <Link href="/features#security" className="link-underline font-semibold text-primary">
            Security &amp; CVE Detection
          </Link>{" "}
          breakdown for how the two databases work together.
        </p>
      </div>
    </section>
  );
}
