import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
import DefaultLayout from "../Components/Layout/defaultLayout";
import ReduxProvider from "@/providers/ReduxProvider";
import Script from "next/script";

// Single typeface for headings and body text - documentation reads as
// technical reference material, so one clean sans (rather than a
// serif/sans editorial pairing) is used throughout instead of a
// separate display face for headings.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600"],
  display: "swap",
});
// Utility face for eyebrows, stat figures, and CLI command examples.
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.devcompass.dev";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const title = "DevCompass Docs | Dependency Health Checker CLI";
const description =
  "Documentation for DevCompass — a free, open-source CLI that scans npm dependencies for CVEs, license conflicts, and unused packages, with AI-powered insights and safe auto-fix.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "DevCompass",
    "dependency health checker",
    "npm audit alternative",
    "CVE scanner",
    "vulnerability scanner",
    "supply chain security",
    "license compliance",
    "dependency graph",
    "CLI tool",
    "Node.js security",
  ],
  authors: [{ name: "Ajay Thorat" }],
  creator: "Ajay Thorat",
  publisher: "Ajay Thorat",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: googleVerification,
    other: bingVerification
      ? {
          "msvalidate.01": bingVerification,
        }
      : {},
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DevCompass Docs",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const softwareStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DevCompass",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform (Node.js)",
    description,
    url: siteUrl,
    downloadUrl: "https://www.npmjs.com/package/devcompass",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Ajay Thorat",
    },
    sameAs: [
      "https://github.com/AjayBThorat-20/devcompass",
      "https://www.npmjs.com/package/devcompass",
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DevCompass Docs",
    url: siteUrl,
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Applies the persisted theme before first paint to avoid a
            wrong-theme flash and keep the DOM class in sync with the
            Redux store's initial state (see themeSlice.getInitialMode).
            Dark is the default for first-time visitors (no stored
            preference yet) rather than following system preference. */}
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){t="dark";localStorage.setItem("theme",t);}document.documentElement.classList.toggle("dark",t==="dark");}catch(e){}})();`,
          }}
        />

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Structured Data - plain <script> tags, not next/script: Next.js
            defers next/script content to client-side injection regardless
            of strategy, so it never appears in the static/SSR HTML that
            crawlers and social unfurlers read. A plain script tag renders
            as real static markup. */}
        <script
          id="software-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareStructuredData),
          }}
        />
        <script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${geistMono.variable} antialiased transition-colors duration-200`}
      >
        <ReduxProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
