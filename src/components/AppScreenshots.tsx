"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers3,
  Monitor,
  X,
} from "lucide-react";

type Category = "client" | "admin";

type Screenshot = {
  src: string;
  title: string;
  category: Category;
  number: number;
};

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const screenshots: Screenshot[] = [
  ...Array.from({ length: 12 }, (_, i) => ({
    src: `/images/Client Screen - ${i + 1}.png`,
    title: `Client Screen ${i + 1}`,
    category: "client" as const,
    number: i + 1,
  })),
  ...Array.from({ length: 19 }, (_, i) => ({
    src: `/images/Admin Screen - ${i + 1}.png`,
    title: `Admin Screen ${i + 1}`,
    category: "admin" as const,
    number: i + 1,
  })),
];

const previewCount = 6;

export default function AppScreenshots() {
  const [category, setCategory] = useState<Category>("client");
  const [selected, setSelected] = useState<Screenshot | null>(null);

  const visibleScreens = screenshots.filter(
    (screen) => screen.category === category,
  );

  const currentIndex = selected
    ? visibleScreens.findIndex((screen) => screen.src === selected.src)
    : -1;

  const navigate = useCallback(
    (direction: number) => {
      if (currentIndex < 0 || visibleScreens.length === 0) return;

      const nextIndex =
        (currentIndex + direction + visibleScreens.length) %
        visibleScreens.length;

      setSelected(visibleScreens[nextIndex]);
    },
    [currentIndex, visibleScreens],
  );

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, navigate]);

  const appUrl = category === "client" ? clientUrl : adminUrl;

  return (
    <>
      <section
        aria-labelledby="app-screenshots-heading"
        className="relative overflow-hidden border-y border-slate-200/70 bg-slate-50/70"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          {/* Section heading */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
                <Camera size={15} />
                Inside the platform
              </span>

              <h2
                id="app-screenshots-heading"
                className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
              >
                See the platform
                <span className="mt-1 block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  in action.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Explore the interfaces behind the project management experience,
                from everyday team collaboration to dedicated platform
                administration.
              </p>
            </div>

            <Link
              href="/screenshots"
              className="group inline-flex min-h-11 w-fit cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              View all screenshots
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Category switcher */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="group"
              aria-label="Choose application screenshots"
              className="grid w-full grid-cols-2 gap-1 rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-sm sm:w-fit"
            >
              <button
                type="button"
                aria-pressed={category === "client"}
                onClick={() => {
                  setCategory("client");
                  setSelected(null);
                }}
                className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  category === "client"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                <Monitor size={16} />
                Client App
                <span className="text-xs opacity-75">12</span>
              </button>

              <button
                type="button"
                aria-pressed={category === "admin"}
                onClick={() => {
                  setCategory("admin");
                  setSelected(null);
                }}
                className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  category === "admin"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                <Layers3 size={16} />
                Admin Panel
                <span className="text-xs opacity-75">19</span>
              </button>
            </div>

            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-10 w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-indigo-700 transition hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Explore {category === "client" ? "Client App" : "Admin Panel"}
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Screenshot cards */}
          <div
            key={category}
            className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleScreens.slice(0, previewCount).map((screen, index) => (
              <button
                key={screen.src}
                type="button"
                onClick={() => setSelected(screen)}
                aria-label={`Preview ${screen.title}`}
                className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-900/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 bg-slate-100">
                  <Image
                    src={screen.src}
                    alt={`${category === "client" ? "Client application" : "Admin panel"} screenshot ${screen.number}`}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.025] sm:p-2"
                  />

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-200/70 bg-white/95 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
                    {category === "client" ? (
                      <Monitor size={12} className="text-indigo-600" />
                    ) : (
                      <Layers3 size={12} className="text-violet-600" />
                    )}
                    {category === "client" ? "Client App" : "Admin Panel"}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/20">
                    <span className="inline-flex translate-y-2 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                      <Camera size={15} />
                      Preview screenshot
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900 transition-colors group-hover:text-indigo-700">
                      {screen.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {category === "client"
                        ? "Client application interface"
                        : "Administrator interface"}
                    </p>
                  </div>

                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Gallery footer */}
          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-800">
                {previewCount} of {visibleScreens.length}
              </span>{" "}
              {category === "client" ? "client screens" : "admin screens"}
            </p>

            <Link
              href="/screenshots"
              className="group inline-flex min-h-10 w-fit cursor-pointer items-center gap-2 rounded-lg text-sm font-semibold text-indigo-600 transition hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Explore all 31 screenshots
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshot lightbox */}
      {selected && currentIndex >= 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} preview`}
          className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 p-3 backdrop-blur-xl sm:p-5 lg:p-7"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white sm:text-base">
                {selected.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {currentIndex + 1} of {visibleScreens.length} ·{" "}
                {category === "client" ? "Client App" : "Admin Panel"}
              </p>
            </div>

            <button
              type="button"
              autoFocus
              onClick={() => setSelected(null)}
              aria-label="Close screenshot preview"
              className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center gap-2 py-4 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Previous screenshot"
              className="z-10 flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:size-12"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative h-full min-w-0 flex-1">
              <Image
                key={selected.src}
                src={selected.src}
                alt={selected.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() => navigate(1)}
              aria-label="Next screenshot"
              className="z-10 flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:size-12"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex shrink-0 items-center justify-center border-t border-white/10 pt-4">
            <p className="text-xs text-slate-400">
              Use the arrow keys to navigate · Escape to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
