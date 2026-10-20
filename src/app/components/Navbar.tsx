"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Layers3, Menu, X } from "lucide-react";

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/architecture", label: "Architecture" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-900 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-200">
            <Layers3 size={22} />
          </span>
          <span>
            <span className="block text-sm font-bold tracking-tight sm:text-base">
              Project Management
            </span>
            <span className="block text-[10px] text-slate-500 sm:text-xs">
              By Satinder Singh Sall
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={adminUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Admin Panel
          </a>
          <a
            href={clientUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Open App <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="space-y-1 border-t border-slate-200 bg-white px-5 py-5 shadow-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={clientUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Open Project Management App
          </a>

          <a
            href={adminUrl}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700"
          >
            Open Admin Panel
          </a>
        </div>
      )}
    </header>
  );
}
