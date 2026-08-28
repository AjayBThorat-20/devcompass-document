export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is DevCompass?",
    answer:
      "DevCompass is a free, open-source (MIT) CLI tool that analyzes Node.js/npm project dependencies for security vulnerabilities, license conflicts, unused packages, and outdated versions, then can safely auto-fix what it finds. Install it with `npm install -g devcompass` and run `devcompass analyze`.",
  },
  {
    question: "What's a good alternative to `npm audit` for scanning npm dependencies?",
    answer:
      "DevCompass is a drop-in complement to `npm audit`: it uses the same OSV vulnerability database plus optional NVD enrichment for CVSS scores, and adds license-conflict detection, unused-dependency detection, historical health trends, and safe auto-fix with automatic backup — none of which `npm audit` does.",
  },
  {
    question: "Does DevCompass replace Dependabot?",
    answer:
      "No, and it isn't trying to. Dependabot opens PRs for outdated/vulnerable dependencies inside GitHub; DevCompass is a local CLI you run anytime, without a GitHub integration, and it additionally covers license conflicts, unused dependencies, and health scoring, which Dependabot doesn't.",
  },
  {
    question: "Is DevCompass free?",
    answer:
      "Yes. The core tool — CVE scanning, health scoring, auto-fix, graphs, history — is free and open source. AI features are optional and only cost money if you connect a paid provider (OpenAI/Anthropic/Google); using the built-in local Ollama support keeps AI analysis free too.",
  },
  {
    question: "What vulnerability databases does DevCompass use?",
    answer:
      "OSV (Open Source Vulnerabilities) is the primary, no-API-key-required source. NVD (NIST's National Vulnerability Database) is an optional secondary source for CVSS severity scores, enabled with a free API key.",
  },
  {
    question: "Does DevCompass send my code anywhere?",
    answer:
      "Dependency names and versions are sent to OSV (and NVD, if configured) to look up known vulnerabilities — that's how any CVE scanner works. Your source code is never uploaded. AI features send dependency metadata (not source code) to whichever provider you configure; using `devcompass llm add --provider local` (Ollama) keeps everything on your machine.",
  },
  {
    question: "Can I use DevCompass without an OpenAI API key?",
    answer:
      "Yes. AI features work with OpenAI, Anthropic, Google, or a fully free/local Ollama model. Every other feature — CVE scanning, health scoring, auto-fix, graphs, history — works with no AI provider configured at all.",
  },
  {
    question: "Does DevCompass automatically fix vulnerable or outdated dependencies?",
    answer:
      "Yes — `devcompass fix` classifies fixes as safe/moderate/risky, previews changes, takes an automatic backup, and supports rollback. Run `devcompass fix --dry-run` to preview without changing anything.",
  },
  {
    question: "Does DevCompass work in CI/CD pipelines?",
    answer:
      "Yes — `devcompass analyze --ci --threshold 8.0` exits non-zero when the health score drops below the threshold, and `--json` produces machine-readable output for pipelines.",
  },
];
