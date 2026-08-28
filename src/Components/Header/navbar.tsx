"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaNpm, FaBars, FaTimes } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleMenu, closeMenu, setScrolled } from "@/store/slices/themeSlice";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import DocsSidebar from "@/Components/UI/DocsSidebar";
import { githubLink, npmLink } from "@/constants/nav";

// Slim, non-floating top bar - fixed height, full-bleed border-bottom,
// no hide-on-scroll or magnetic hover. The sidebar (DocsSidebar) is the
// site's primary nav; this bar only carries the brand, external links,
// theme toggle, and - on mobile, where there's no persistent sidebar -
// a menu button that opens the same DocsSidebar tree in a drawer.
export default function Navbar() {
  const dispatch = useAppDispatch();
  const { isMenuOpen, scrolled } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const handleScroll = () => dispatch(setScrolled(window.scrollY > 4));
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-14 border-b bg-background/95 backdrop-blur transition-shadow ${
          scrolled ? "border-border shadow-sm" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleMenu())}
              className="-ml-1.5 rounded-md p-2 text-foreground hover:bg-muted lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </button>

            <Link href="/" className="flex items-center gap-2 text-base font-bold tracking-tight text-foreground">
              <span aria-hidden>🧭</span>
              DevCompass
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Link
              href={npmLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="npm"
            >
              <FaNpm className="h-4 w-4" />
            </Link>
            <Link
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </Link>
            <div className="mx-1 h-5 w-px bg-border" />
            <ThemeToggleButton />
          </div>
        </div>
      </header>

      {/* Spacer matching the fixed bar's height. */}
      <div className="h-14" />

      {/* Mobile nav drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => dispatch(closeMenu())}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] transform border-r border-border bg-background transition-transform duration-200 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <span className="text-sm font-semibold text-foreground">Menu</span>
          <button
            onClick={() => dispatch(closeMenu())}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Close navigation"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto px-5 py-6">
          <DocsSidebar onNavigate={() => dispatch(closeMenu())} />
        </div>
      </div>
    </>
  );
}
