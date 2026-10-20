import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Lightbulb,
  Monitor,
  PanelsTopLeft,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Satinder Singh Sall & the Project",
  description:
    "Learn about Satinder Singh Sall and the Full-Stack Project Management System, a monorepo project bringing together a Next.js landing website, React client, admin panel, and Express backend.",
  alternates: {
    canonical: "/about",
  },
};

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const principles = [
  {
    icon: Workflow,
    title: "Organized workflows",
    description:
      "Structure projects, tasks, workspaces, and collaboration tools around a more organized working experience.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Blocks,
    title: "Modular architecture",
    description:
      "Keep the client, admin interface, backend, and landing website in clearly separated directories.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Code2,
    title: "Full-stack development",
    description:
      "Bring frontend interfaces, API services, authentication integration, and database tooling into one project.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Rocket,
    title: "Practical implementation",
    description:
      "Connect application structure with real project-management workflows and independently deployed interfaces.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const projectLayers = [
  {
    number: "01",
    title: "User application",
    folder: "client/",
    description:
      "The main project-management experience, including dashboard, projects, tasks, team, and workspace interfaces.",
    icon: Monitor,
    style: "border-indigo-100 bg-indigo-50/70 text-indigo-700",
    href: clientUrl,
    linkLabel: "Explore the application",
  },
  {
    number: "02",
    title: "Admin panel",
    folder: "admin/",
    description:
      "A separate administrative interface for users, workspaces, projects, tasks, comments, and database inspection.",
    icon: PanelsTopLeft,
    style: "border-violet-100 bg-violet-50/70 text-violet-700",
    href: adminUrl,
    linkLabel: "Explore the admin panel",
  },
  {
    number: "03",
    title: "Backend services",
    folder: "server/",
    description:
      "An Express backend with API routes, controllers, middleware, Prisma configuration, and validation utilities.",
    icon: Server,
    style: "border-emerald-100 bg-emerald-50/70 text-emerald-700",
    href: "/architecture",
    linkLabel: "View architecture",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-b from-indigo-50/80 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-20 -z-10 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              <Sparkles size={15} />
              About the project
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl">
              A project built around
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                planning, people, and progress.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The Full-Stack Project Management System by Satinder Singh Sall
              brings together a user-facing application, a dedicated admin
              panel, and backend services in one organized monorepo.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/features"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Discover the features <ArrowRight size={17} />
              </Link>
              <Link
                href="/architecture"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Explore the architecture <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer introduction */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-indigo-200/60 via-violet-100/50 to-blue-100/50 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[36px] border-white/[0.10]" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border-[36px] border-white/[0.10]" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg">
                  <Layers3 size={32} />
                </div>

                <p className="mt-9 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                  Project developer
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Satinder
                  <br />
                  Singh Sall
                </h2>
                <p className="mt-4 text-sm leading-6 text-indigo-100">
                  Creator of the Full-Stack Project Management System.
                </p>

                <div className="mt-8 border-t border-white/20 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Code2 size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Full-stack project
                      </p>
                      <p className="mt-1 text-xs text-indigo-200">
                        Frontend · Backend · Administration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Meet the developer
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              About Satinder Singh Sall
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Satinder Singh Sall is the developer behind this Full-Stack
              Project Management System. The project brings together multiple
              web applications and backend components to demonstrate how a
              project-management platform can be organized as a full-stack
              codebase.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Rather than keeping everything inside a single frontend, the
              repository separates the user experience, administrative tools,
              backend API, and public landing website into dedicated application
              areas.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Client-side project workflows",
                "Dedicated administration UI",
                "Backend API organization",
                "Monorepo project structure",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                View live project <ArrowUpRight size={16} />
              </a>
              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                View admin panel <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Project vision
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Make project work easier to organize
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The project brings related management workflows and supporting
              services into one system, with separate interfaces for everyday
              users and administrators.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${principle.color}`}
                  >
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project layers */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Inside the project
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Three core application layers
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each part has its own role while contributing to the broader
              project-management system.
            </p>
          </div>
          <Link
            href="/architecture"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View full architecture <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projectLayers.map((layer) => {
            const Icon = layer.icon;

            return (
              <article
                key={layer.number}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${layer.style}`}
                  >
                    <Icon size={23} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-300">
                    {layer.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {layer.title}
                </h3>
                <code className="mt-2 w-fit rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-600">
                  {layer.folder}
                </code>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {layer.description}
                </p>

                <a
                  href={layer.href}
                  target={layer.href.startsWith("http") ? "_blank" : undefined}
                  rel={layer.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  {layer.linkLabel} <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Learning and development */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Development approach
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From application structure to a connected product
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              The repository provides a foundation for working across frontend
              interfaces, backend services, authentication integration, and
              database tooling. The public landing website documents the system
              and gives visitors a central place to discover its components.
            </p>

            <Link
              href="/architecture"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore system architecture <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Layers3,
                title: "Frontend applications",
                description:
                  "Separate user and administrator experiences, plus the public website.",
              },
              {
                icon: Server,
                title: "Backend organization",
                description:
                  "Dedicated modules for API routing, controllers, and middleware.",
              },
              {
                icon: Database,
                title: "Data and configuration",
                description:
                  "Prisma schema and configuration files for the database layer.",
              },
              {
                icon: BookOpen,
                title: "Project documentation",
                description:
                  "A repository structure that includes setup and run documentation.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 px-6 py-12 text-center text-white shadow-xl shadow-indigo-200/60 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold">
              <Lightbulb size={14} />
              Discover the project
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the Full-Stack Project Management System.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
              Visit the live user application, discover the admin panel, or
              learn more about the platform's features and architecture.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Open user application <ArrowUpRight size={17} />
              </a>
              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Open admin panel <ArrowUpRight size={17} />
              </a>
              <Link
                href="/features"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View features <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
