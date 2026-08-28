import type { Metadata } from "next";
import Link from "next/link";
import { FaHome, FaBook } from "react-icons/fa";
import { navLinks } from "@/constants/nav";

export const metadata: Metadata = {
  title: "Page Not Found | DevCompass Docs",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="container-custom section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm font-bold text-primary">404</p>
      <h1 className="mt-4 text-3xl md:text-4xl font-black text-foreground">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Here are a few places to go instead.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary px-6 py-3">
          <FaHome className="w-4 h-4" />
          Back to Home
        </Link>
        <Link href="/getting-started" className="btn-secondary px-6 py-3">
          <FaBook className="w-4 h-4" />
          Getting Started
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
