"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Layers3,
  Menu,
  X,
} from "lucide-react";

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/architecture", label: "Architecture" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
    setAppsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !appsOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setAppsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setAppsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, appsOpen]);

  function closeMenu() {
    setOpen(false);
    setAppsOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-950 shadow-[0_2px_12px_rgba(15,23,42,0.025)] backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[80px] lg:px-8"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4 sm:gap-3"
          aria-label="Project Management home"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20 transition-transform duration-200 group-hover:scale-[1.04] sm:size-11">
            <Layers3 size={23} strokeWidth={2.1} />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-[14px] font-bold tracking-[-0.035em] sm:text-base">
              Project Management
            </span>
            <span className="mt-0.5 block truncate text-[10px] font-medium tracking-wide text-slate-500 sm:text-xs">
              By Satinder Singh Sall
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center">
          <div className="flex items-center gap-1 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-1.5">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex h-10 items-center justify-center rounded-xl px-4 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 lg:px-5 ${
                    active
                      ? "bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200/70"
                      : "text-slate-600 hover:bg-white/80 hover:text-slate-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2.5 md:flex lg:gap-3">
          <a
            href={adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 lg:px-4"
          >
            Admin Panel
            <ArrowUpRight size={15} className="text-slate-400" />
          </a>

          <a
            href={clientUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-md shadow-indigo-600/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 lg:px-5"
          >
            Open App
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition-[opacity,visibility] duration-200 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Navigation
          </p>

          <div className="space-y-1">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={`flex min-h-11 items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {link.label}

                  {active && (
                    <Check
                      size={17}
                      className="text-indigo-600"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="my-4 border-t border-slate-100" />

          {/* Application links */}
          <button
            type="button"
            aria-expanded={appsOpen}
            aria-controls="mobile-app-links"
            onClick={() => setAppsOpen((previous) => !previous)}
            className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Your applications
            <ChevronDown
              size={17}
              className={`text-slate-400 transition-transform duration-200 ${
                appsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            id="mobile-app-links"
            aria-hidden={!appsOpen}
            className={`grid transition-[grid-template-rows,opacity] duration-200 ${
              appsOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-2 px-1 pb-1 pt-2">
                <a
                  href={clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={appsOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-between rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Open Project Management App
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href={adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={appsOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Open Admin Panel
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] text-slate-400">
            Plan better. Build together. Deliver more.
          </p>
        </div>
      </div>
    </header>
  );
}
