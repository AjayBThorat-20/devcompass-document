import { ImageResponse } from "next/og";

// Site-wide default OG/Twitter card (Next falls back to this for every
// route that doesn't define its own opengraph-image/twitter-image).
// Without it, links shared to Slack/X/etc. rendered no preview image at
// all — openGraph/twitter metadata in layout.tsx declared title and
// description but never an `images` entry.
export const alt = "DevCompass Docs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#121212",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ fontSize: 88, display: "flex" }}>🧭</div>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#f5f5f5", display: "flex" }}>DevCompass</div>
        </div>
        <div style={{ fontSize: 40, color: "#a3a3a3", marginTop: 32, display: "flex" }}>Documentation</div>
        <div style={{ fontSize: 28, color: "#7a7a7a", marginTop: 28, maxWidth: 920, display: "flex" }}>
          CVE scanning, license conflicts, unused dependencies, AI-powered insights, and safe auto-fix — for
          Node.js projects.
        </div>
      </div>
    ),
    { ...size }
  );
}
