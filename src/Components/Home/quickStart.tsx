import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CodeBlock from "@/Components/UI/CodeBlock";

export default function QuickStart() {
  return (
    <div id="quickstart" className="container-custom section scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl">
        Install it, run it, done.
      </h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">1. Install</p>
          <CodeBlock lines={["npm install -g devcompass"]} />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">2. Run your first analysis</p>
          <CodeBlock lines={["devcompass analyze"]} />
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/getting-started"
          className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Full installation & setup guide
          <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
