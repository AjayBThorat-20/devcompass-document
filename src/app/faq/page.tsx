import { Faq } from "@/Components/Faq/page";
import DocsShell from "@/Components/Layout/DocsShell";
import { Metadata } from "next";
import { faqItems } from "@/constants/faq";

export const metadata: Metadata = {
  title: "FAQ | DevCompass Docs",
  description:
    "Answers to common questions about DevCompass: pricing, CVE sources, AI providers, CI/CD usage, and how it compares to npm audit and Dependabot.",
  alternates: {
    canonical: "/faq",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <DocsShell
        path="/faq"
        title="Frequently Asked Questions"
        description="Everything people ask before installing DevCompass."
      >
        <Faq />
      </DocsShell>
    </>
  );
}
