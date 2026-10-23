import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Home,
  Layers3,
  Search,
} from "lucide-react";

const suggestions = [
  { href: "/", label: "Home", description: "Return to the main page" },
  {
    href: "/features",
    label: "Features",
    description: "Explore platform capabilities",
  },
  {
    href: "/architecture",
    label: "Architecture",
    description: "Understand how it works",
  },
  {
    href: "/screenshots",
    label: "Screenshots",
    description: "Preview both applications",
  },
  {
    href: "/about",
    label: "About",
    description: "Learn about the project",
  },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-white px-5 py-16 text-slate-950 sm:px-8 sm:py-20">
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#c7d2fe_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/60 blur-[100px]"
      />

      <div className="relative w-full max-w-3xl text-center">
        {/* Icon */}
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-600/20">
          <Compass size={30} strokeWidth={1.8} />
        </div>

        {/* Error number */}
        <p className="mt-8 select-none bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-[104px] font-black leading-none tracking-[-0.09em] text-transparent sm:text-[144px]">
          404
        </p>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 sm:text-sm">
          Page not found
        </p>

        <h1 className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Looks like this page
          <span className="mt-1 block text-slate-400">
            went off the roadmap.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          The page you&apos;re looking for may have moved, been removed, or
          never existed. Let&apos;s get you back on track.
        </p>

        {/* Main actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <Home size={17} />
            Back to homepage
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href="/screenshots"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <Layers3 size={17} />
            Explore the platform
          </Link>
        </div>

        {/* Suggested destinations */}
        <div className="mx-auto mt-14 max-w-2xl border-t border-slate-200 pt-8 text-left sm:mt-16">
          <div className="mb-5 flex items-center gap-2">
            <Search size={16} className="text-indigo-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Here are some helpful links
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {suggestions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white/80 p-4 transition duration-200 hover:border-indigo-200 hover:bg-indigo-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800 transition group-hover:text-indigo-700">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.description}
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                />
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-400">
          Project Management
          <span className="mx-2">·</span>
          Plan better. Build together. Deliver more.
        </p>
      </div>
    </main>
  );
}
