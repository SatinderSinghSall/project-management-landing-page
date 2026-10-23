"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Layers3, X } from "lucide-react";

const screenshots = [
  ...Array.from({ length: 12 }, (_, i) => ({
    src: `/images/Client%20Screen%20-%20${i + 1}.png`,
    alt: `Project Management client interface screenshot ${i + 1}`,
    type: "Client Workspace",
  })),
  ...Array.from({ length: 19 }, (_, i) => ({
    src: `/images/Admin%20Screen%20-%20${i + 1}.png`,
    alt: `Project Management admin interface screenshot ${i + 1}`,
    type: "Admin Dashboard",
  })),
];

export default function HomePromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Show the promotion 5 seconds after the homepage mounts.
  useEffect(() => {
    const openTimer = window.setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => window.clearTimeout(openTimer);
  }, []);

  // Lock background scrolling while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  // Automatically rotate through all 31 screenshots every 2 seconds.
  useEffect(() => {
    if (!isOpen) return;

    const slideshowTimer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, 2000);

    return () => window.clearInterval(slideshowTimer);
  }, [isOpen]);

  // Allow keyboard users to dismiss the modal.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeScreenshot = screenshots[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-slate-950/65 p-3 backdrop-blur-md sm:p-6"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-promo-title"
        aria-describedby="home-promo-description"
        className="relative my-auto grid w-full max-w-5xl overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-slate-950/25 sm:rounded-3xl lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* Close button — the only visible click-to-dismiss control */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close promotion"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:right-4 sm:top-4"
        >
          <X size={19} />
        </button>

        {/* Screenshot showcase */}
        <div className="relative flex min-h-[230px] flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/70 to-violet-100/70 p-5 sm:min-h-[320px] sm:p-8 lg:min-h-[510px] lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl"
          />

          <div className="relative z-10 mb-4 flex items-center justify-between gap-3 pr-10 sm:mb-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Layers3 size={17} />
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-800">
                Project Management
              </span>
            </div>

            <span className="rounded-full border border-indigo-100 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-700 sm:text-xs">
              Live preview
            </span>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[540px]">
            <div className="rounded-xl border border-white/90 bg-white/90 p-1.5 shadow-xl shadow-indigo-950/10 sm:rounded-2xl sm:p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 sm:rounded-xl">
                <Image
                  key={activeScreenshot.src}
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  priority
                  className="object-contain transition-opacity duration-500"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 px-1">
              <span className="text-xs font-medium text-slate-600 sm:text-sm">
                {activeScreenshot.type}
              </span>
              <span className="shrink-0 text-xs tabular-nums text-slate-500">
                {String(activeIndex + 1).padStart(2, "0")} / 31
              </span>
            </div>

            {/* Slideshow progress */}
            <div
              className="mt-2 h-1 overflow-hidden rounded-full bg-indigo-100"
              aria-hidden="true"
            >
              <div
                className="h-full rounded-full bg-indigo-600 transition-[width] duration-500"
                style={{
                  width: `${((activeIndex + 1) / screenshots.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <p className="relative z-10 mt-4 text-center text-xs text-slate-500 sm:mt-6 sm:text-sm">
            Explore the client experience and admin dashboard.
          </p>
        </div>

        {/* Promotional content */}
        <div className="flex flex-col justify-center px-5 py-7 sm:px-9 sm:py-10 lg:px-10 lg:py-12">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            Built for better teamwork
          </span>

          <h2
            id="home-promo-title"
            className="max-w-md text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            Bring every project into{" "}
            <span className="text-indigo-600">focus.</span>
          </h2>

          <p
            id="home-promo-description"
            className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7"
          >
            Plan projects, organize tasks, collaborate with your team, and keep
            progress visible — all in one streamlined workspace.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Organize projects and tasks in one place",
              "Collaborate with your team and manage workspaces",
              "Track progress with a dedicated admin dashboard",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-5 text-slate-700"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="https://project-management-satinder.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Explore the application
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/screenshots"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              View all screenshots
            </Link>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-400">
            A unified experience for teams, projects, and administrators.
          </p>
        </div>
      </section>
    </div>
  );
}
