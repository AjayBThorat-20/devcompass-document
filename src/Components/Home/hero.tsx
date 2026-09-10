import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Badge from "@/Components/UI/Badge";
import { githubLink } from "@/constants/nav";

const facts = [
  { value: "OSV + NVD", label: "CVE sources" },
  { value: "4", label: "AI providers" },
  { value: "5", label: "Graph layouts" },
  { value: "MIT", label: "License" },
];

// Fetched at build time from the npm registry so this badge can't drift out
// of sync with what `npm install -g devcompass` actually installs — the
// hardcoded fallback only matters if the registry is unreachable at build
// time, and is intentionally not kept manually up to date.
const FALLBACK_VERSION = "4.1.6";

async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch("https://registry.npmjs.org/devcompass/latest");
    if (!res.ok) return FALLBACK_VERSION;
    const data = await res.json();
    return typeof data.version === "string" ? data.version : FALLBACK_VERSION;
  } catch {
    return FALLBACK_VERSION;
  }
}

export default async function Hero() {
  const version = await getLatestVersion();

  return (
    <div className="container-custom pt-8 md:pt-12 pb-16 md:pb-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <Badge dot className="mx-auto w-fit">
          v{version} · Open Source
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          <span aria-hidden className="mr-2">🧭</span>
          DevCompass
        </h1>

        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
          A CLI dependency health checker — it does not replace{" "}
          <code>npm audit</code> or Dependabot, it adds what they don&apos;t
          cover: real-time CVE detection, AI-powered insights, and safe
          auto-fix, for any Node.js / npm project.
        </p>

        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          Free and open source. Covers what <code>npm audit</code> and Dependabot
          structurally don&apos;t: license conflicts, unused dependencies,
          historical health trends, and AI-suggested alternatives.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/getting-started" className="btn-primary px-6 py-3 flex items-center gap-2">
            Get Started
            <FaArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            View on GitHub
          </Link>
        </div>

        <div className="pt-2">
          <code className="text-sm font-mono text-muted-foreground">
            npm install -g devcompass
          </code>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 md:gap-x-10 justify-items-center max-w-2xl mx-auto">
        {facts.map((fact) => (
          <div key={fact.label} className="stat-figure text-left">
            <div className="stat-figure-value text-xl sm:text-2xl md:text-3xl text-foreground">{fact.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{fact.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
