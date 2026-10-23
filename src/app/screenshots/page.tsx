"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers3,
  Monitor,
  X,
} from "lucide-react";

type Category = "all" | "client" | "admin";

type Screenshot = {
  src: string;
  title: string;
  category: Exclude<Category, "all">;
  number: number;
};

const CLIENT_URL = "https://project-management-satinder.vercel.app/";
const ADMIN_URL = "https://project-ms-admin-panel.vercel.app/";

const screenshots: Screenshot[] = [
  ...Array.from({ length: 12 }, (_, index) => ({
    src: `/images/Client Screen - ${index + 1}.png`,
    title: `Client Screen ${index + 1}`,
    category: "client" as const,
    number: index + 1,
  })),
  ...Array.from({ length: 19 }, (_, index) => ({
    src: `/images/Admin Screen - ${index + 1}.png`,
    title: `Admin Screen ${index + 1}`,
    category: "admin" as const,
    number: index + 1,
  })),
];

const filters: {
  label: string;
  value: Category;
  count: number;
}[] = [
  { label: "All Screens", value: "all", count: 31 },
  { label: "Client App", value: "client", count: 12 },
  { label: "Admin Panel", value: "admin", count: 19 },
];

export default function ScreenshotsPage() {
  const [category, setCategory] = useState<Category>("all");
  const [selected, setSelected] = useState<Screenshot | null>(null);

  const visibleScreens = screenshots.filter(
    (screen) => category === "all" || screen.category === category,
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
      if (event.key === "ArrowRight") navigate(1);
      if (event.key === "ArrowLeft") navigate(-1);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, navigate]);

  return (
    <main className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#c7d2fe_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-50"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[420px] rounded-full bg-violet-200/30 blur-[100px]"
        />

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              <Camera size={16} />
              Product showcase
              <span className="h-1 w-1 rounded-full bg-indigo-400" />
              31 screens
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[68px]">
              Explore the platform
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text pb-1 text-transparent">
                Screen by screen.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Get a closer look at the tools that bring projects, teams, tasks,
              and administration together in one connected platform.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row sm:mt-9">
              <a
                href={CLIENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Open Client App
                <ArrowUpRight size={17} />
              </a>

              <a
                href={ADMIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Open Admin Panel
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Overview statistics */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-2 sm:mt-14 sm:gap-4">
            {[
              {
                value: "31",
                label: "Screenshots",
                icon: Camera,
              },
              {
                value: "12",
                label: "Client screens",
                icon: Monitor,
              },
              {
                value: "19",
                label: "Admin screens",
                icon: Layers3,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 px-2 py-4 shadow-sm transition-shadow hover:shadow-md sm:px-5 sm:py-5"
                >
                  <div className="mx-auto flex size-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 sm:mx-0 sm:size-9">
                    <Icon size={17} />
                  </div>

                  <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    {item.value}
                  </p>

                  <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        aria-labelledby="gallery-heading"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Inside the application
            </div>

            <h2
              id="gallery-heading"
              className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
            >
              Application gallery
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Browse the interfaces and select a screen to see it in detail.
            </p>
          </div>

          {/* Category filters */}
          <div
            role="group"
            aria-label="Filter screenshots"
            className="grid w-full grid-cols-3 gap-1 rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-sm sm:flex sm:w-fit"
          >
            {filters.map((filter) => {
              const active = category === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setCategory(filter.value);
                    setSelected(null);
                  }}
                  className={`inline-flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:px-3.5 sm:text-sm ${
                    active
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15"
                      : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`rounded-md px-1 py-0.5 text-[10px] sm:text-xs ${
                      active
                        ? "bg-white/15 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery count */}
        <div className="mt-7 flex items-center justify-between border-b border-slate-200/80 pb-4">
          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {visibleScreens.length}
            </span>{" "}
            {category === "client"
              ? "client screens"
              : category === "admin"
                ? "admin screens"
                : "screens"}
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Interactive gallery
          </span>
        </div>

        {/* Screenshot grid */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {visibleScreens.map((screen, index) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => setSelected(screen)}
              aria-label={`View ${screen.title} in full screen`}
              className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-900/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {/* Screenshot image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 bg-slate-100">
                <Image
                  src={screen.src}
                  alt={`${screen.category === "client" ? "Client application" : "Admin panel"} screenshot ${screen.number}`}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.025] sm:p-2"
                />

                {/* Category badge */}
                <div className="absolute left-3 top-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-semibold shadow-sm backdrop-blur-md sm:text-xs ${
                      screen.category === "client"
                        ? "border-indigo-100 bg-white/95 text-indigo-700"
                        : "border-violet-100 bg-white/95 text-violet-700"
                    }`}
                  >
                    {screen.category === "client" ? (
                      <Monitor size={12} />
                    ) : (
                      <Layers3 size={12} />
                    )}

                    {screen.category === "client"
                      ? "Client App"
                      : "Admin Panel"}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/25">
                  <span className="inline-flex translate-y-2 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <Camera size={15} />
                    View screenshot
                  </span>
                </div>
              </div>

              {/* Screenshot caption */}
              <div className="flex items-center justify-between gap-3 p-3.5 sm:p-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 transition-colors group-hover:text-indigo-700 sm:text-[15px]">
                    {screen.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {screen.category === "client"
                      ? "Client application interface"
                      : "Administrator dashboard interface"}
                  </p>
                </div>

                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom call to action */}
        <section className="relative mt-12 overflow-hidden rounded-3xl bg-slate-950 px-5 py-10 text-center text-white sm:mt-16 sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 size-72 rounded-full bg-indigo-600/25 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-violet-600/20 blur-[90px]"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              <Check size={14} className="text-emerald-400" />
              One connected platform
            </span>

            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to explore it yourself?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Go beyond the screenshots and discover the project management and
              administration applications.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <a
                href={CLIENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Explore Client App
                <ArrowUpRight size={17} />
              </a>

              <a
                href={ADMIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Admin Panel
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Full-screen screenshot viewer */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} screenshot viewer`}
          className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 p-3 backdrop-blur-xl sm:p-5 lg:p-7"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          {/* Viewer header */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="hidden size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:flex">
                <Camera size={19} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white sm:text-base">
                  {selected.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {currentIndex + 1} of {visibleScreens.length} screenshots
                  <span className="mx-1.5">·</span>
                  {selected.category === "client"
                    ? "Client App"
                    : "Admin Panel"}
                </p>
              </div>
            </div>

            <button
              type="button"
              autoFocus
              onClick={() => setSelected(null)}
              aria-label="Close image viewer"
              className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Viewer image */}
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

          {/* Viewer footer */}
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-slate-400">
            <span className="hidden sm:inline">
              Use your keyboard arrow keys to navigate
            </span>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-lg px-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={14} />
              Close viewer
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
