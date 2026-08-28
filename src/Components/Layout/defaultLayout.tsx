"use client";

import React, { useEffect } from "react";
import Navbar from "../Header/navbar";
import { useAppSelector } from "@/store/hooks";
import Footer from "../Footer/footer";
import { usePathname } from "next/navigation";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.theme.mode);
  const pathname = usePathname();

  // Keep the document class in sync whenever the user toggles theme.
  // (Initial load is already handled by the blocking script in layout.tsx.)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    // overflow-x-clip, not overflow-x-hidden: `hidden` still establishes a
    // scroll container per the CSS overflow spec (even though this div never
    // actually scrolls - the window does), which silently breaks
    // `position: sticky` for every descendant (the docs sidebar and the
    // "on this page" rail both rely on it). `clip` gets the same
    // "no horizontal scrollbar" result without that side effect.
    <div className="min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="w-full min-h-[calc(100vh-3.5rem)]">
        <div key={pathname} className="w-full min-h-full page-transition">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
