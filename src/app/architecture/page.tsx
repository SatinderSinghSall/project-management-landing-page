import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "System Architecture",
  description:
    "Explore the architecture of the Full-Stack Project Management System by Satinder Singh Sall, including the Next.js landing website, React client, admin panel, Express API, Prisma, and authentication integration.",
  alternates: {
    canonical: "/architecture",
  },
};

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const layers = [
  {
    number: "01",
    title: "Landing website",
    folder: "web/landing/landing-page/",
    description:
      "The public-facing website introduces the project, its capabilities, architecture, and developer.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    color: "indigo",
  },
  {
    number: "02",
    title: "Client application",
    folder: "client/",
    description:
      "The user-facing application provides dashboards, projects, tasks, team tools, and workspace navigation.",
    technologies: ["React", "Vite", "Redux", "Clerk"],
    icon: PanelsTopLeft,
    color: "violet",
    href: clientUrl,
  },
  {
    number: "03",
    title: "Admin application",
    folder: "admin/",
    description:
      "A separate frontend contains administrative pages for users, workspaces, projects, tasks, comments, and account management.",
    technologies: ["React", "Vite", "React Router", "Clerk"],
    icon: ShieldCheck,
    color: "blue",
    href: adminUrl,
  },
  {
    number: "04",
    title: "Backend services",
    folder: "server/",
    description:
      "The Express application organizes API routes, controllers, authentication middleware, and validation utilities.",
    technologies: ["Node.js", "Express", "Prisma"],
    icon: Server,
    color: "emerald",
  },
];

const backendModules = [
  {
    icon: Network,
    title: "Routes",
    folder: "server/routes/",
    description:
      "Organize API endpoints for projects, tasks, comments, workspaces, and administrative operations.",
  },
  {
    icon: Code2,
    title: "Controllers",
    folder: "server/controllers/",
    description:
      "Keep request-handling and application logic in dedicated controller modules.",
  },
  {
    icon: LockKeyhole,
    title: "Middleware",
    folder: "server/middlewares/",
    description:
      "Separate authentication and administrator-related request checks from route handlers.",
  },
  {
    icon: Database,
    title: "Database layer",
    folder: "server/configs/ and server/prisma/",
    description:
      "Use Prisma configuration and a Prisma schema to organize database access and data models.",
  },
];

const repoFolders = [
  {
    folder: "admin/",
    purpose: "Dedicated administration frontend",
    color: "bg-violet-100 text-violet-700",
  },
  {
    folder: "client/",
    purpose: "User-facing project management application",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    folder: "server/",
    purpose: "Express API, controllers, routes, and database integration",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    folder: "web/landing/landing-page/",
    purpose: "Next.js public landing website",
    color: "bg-blue-100 text-blue-700",
  },
  {
    folder: "doc/",
    purpose: "Project setup and run documentation",
    color: "bg-amber-100 text-amber-700",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-b from-indigo-50/80 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              <GitBranch size={15} />
              System architecture
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl">
              One monorepo.
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Multiple connected layers.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover how the Full-Stack Project Management System by Satinder
              Singh Sall organizes its public website, client application, admin
              interface, backend services, and database integration.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Open client application <ArrowUpRight size={17} />
              </a>
              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Open admin panel <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="System overview"
          title="How the repository is organized"
          description="The project separates the public website, user interface, administrative interface, and backend into distinct application layers."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4 sm:p-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Boxes size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Repository root
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Project Management
                  </h3>
                </div>
              </div>
            </div>

            <div className="mx-auto h-7 w-px bg-slate-300" />

            <div className="grid gap-3 sm:grid-cols-2">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const colorStyles: Record<string, string> = {
                  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
                  violet: "bg-violet-50 text-violet-700 border-violet-100",
                  blue: "bg-blue-50 text-blue-700 border-blue-100",
                  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
                };

                return (
                  <article
                    key={layer.number}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${colorStyles[layer.color]}`}
                      >
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-slate-300">
                        {layer.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {layer.title}
                    </h3>
                    <code className="mt-2 block break-all rounded-lg bg-slate-50 px-2.5 py-2 text-xs text-slate-600">
                      {layer.folder}
                    </code>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {layer.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {layer.href && (
                      <a
                        href={layer.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                      >
                        Visit application <ArrowUpRight size={14} />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center sm:p-5">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Workflow size={18} className="text-indigo-600" />
                Application integration through configured API and
                authentication flows
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                This is a conceptual architecture overview, not a live
                dependency or network diagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request flow */}
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Request lifecycle"
            title="From interface to data layer"
            description="Follow the journey of a typical API-backed operation, from user interaction to database access."
          />

          {/* Flow cards */}
          <div className="relative mt-10 sm:mt-12">
            <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {[
                {
                  number: "01",
                  icon: PanelsTopLeft,
                  title: "Frontend",
                  description:
                    "A user interacts with a page in the client or admin application.",
                  detail: "User interaction",
                  color: "indigo",
                },
                {
                  number: "02",
                  icon: Network,
                  title: "API request",
                  description:
                    "The frontend service communicates with a configured backend endpoint.",
                  detail: "Request handling",
                  color: "violet",
                },
                {
                  number: "03",
                  icon: ShieldCheck,
                  title: "Backend logic",
                  description:
                    "Routes, middleware, controllers, and validation utilities handle the operation.",
                  detail: "Application logic",
                  color: "blue",
                },
                {
                  number: "04",
                  icon: Database,
                  title: "Data access",
                  description:
                    "Database operations can be handled through the configured Prisma layer.",
                  detail: "Database layer",
                  color: "emerald",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                const accents = {
                  indigo: {
                    icon: "bg-indigo-50 text-indigo-600 ring-indigo-100",
                    number: "text-indigo-600 bg-indigo-50",
                    line: "bg-indigo-500",
                  },
                  violet: {
                    icon: "bg-violet-50 text-violet-600 ring-violet-100",
                    number: "text-violet-600 bg-violet-50",
                    line: "bg-violet-500",
                  },
                  blue: {
                    icon: "bg-blue-50 text-blue-600 ring-blue-100",
                    number: "text-blue-600 bg-blue-50",
                    line: "bg-blue-500",
                  },
                  emerald: {
                    icon: "bg-emerald-50 text-emerald-600 ring-emerald-100",
                    number: "text-emerald-600 bg-emerald-50",
                    line: "bg-emerald-500",
                  },
                }[step.color];

                return (
                  <div key={step.number} className="relative flex min-w-0">
                    <article className="group relative flex h-full w-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40 sm:p-6">
                      {/* Card header */}
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-105 ${accents.icon}`}
                        >
                          <Icon size={22} strokeWidth={1.8} />
                        </div>

                        <span
                          className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-bold tracking-wider ${accents.number}`}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Card content */}
                      <div className="mt-5 flex flex-1 flex-col">
                        <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                          {step.title}
                        </h3>

                        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                          {step.description}
                        </p>

                        <div className="mt-5 border-t border-slate-100 pt-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 shrink-0 rounded-full ${accents.line}`}
                            />
                            <span className="text-xs font-medium text-slate-500">
                              {step.detail}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress indicator */}
                      <div
                        className={`absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-6 ${accents.line}`}
                      />
                    </article>

                    {/* Connector: desktop only */}
                    {index < 3 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-[18px] top-1/2 z-20 hidden -translate-y-1/2 items-center lg:flex"
                      >
                        <div className="relative flex w-4 items-center">
                          <span className="h-px w-full bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400" />
                          <span className="absolute right-0 flex h-4 w-4 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-500 shadow-sm">
                            <ArrowRight size={10} strokeWidth={2.5} />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanatory note */}
          <div className="mx-auto mt-7 flex max-w-3xl items-start justify-center gap-2.5 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3.5 sm:mt-8 sm:items-center sm:px-5">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-indigo-500 sm:mt-0"
            />
            <p className="text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              The exact request path, authorization checks, and database
              operations depend on the endpoint and its implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Backend structure */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Backend internals
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Keep responsibilities clearly separated
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              The server directory uses focused modules so API endpoints,
              request processing, and data access can be organized separately.
            </p>

            <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Server size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">server/</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Express backend application
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-indigo-100 pt-4">
                <p className="text-xs leading-6 text-slate-600">
                  Routes · Controllers · Middleware · Prisma · Validation
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {backendModules.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {module.title}
                  </h3>
                  <code className="mt-2 block break-words text-[11px] leading-5 text-indigo-700">
                    {module.folder}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {module.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Repository explorer */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Repository map"
            title="Know where everything belongs"
            description="The repository keeps the primary applications and supporting documentation in separate directories."
          />

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {repoFolders.map((folder, index) => (
              <div
                key={folder.folder}
                className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-5 ${
                  index < repoFolders.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }`}
              >
                <span
                  className={`inline-flex w-fit shrink-0 rounded-lg px-3 py-2 font-mono text-xs font-bold ${folder.color}`}
                >
                  {folder.folder}
                </span>
                <p className="text-sm leading-6 text-slate-600">
                  {folder.purpose}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-slate-500">
            Directory names reflect the project structure shared for this
            repository. Internal implementations and deployment settings may
            evolve independently.
          </p>
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <LockKeyhole size={24} />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Authentication and access control
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The project includes Clerk integration and dedicated
              authentication middleware files. These components form part of the
              authentication and authorization architecture.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Clerk integration in the client application",
              "Admin authentication interface and protected routes",
              "Backend authentication middleware",
              "Dedicated administrative middleware",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
            <p className="border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
              File presence alone does not verify that every endpoint is
              protected correctly. Authorization behavior should be tested
              against the actual implementation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-20 sm:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 px-6 py-12 text-center text-white shadow-xl shadow-indigo-200/60 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold">
              <Zap size={14} />
              Explore the implementation
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the platform yourself.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
              Visit the deployed applications or return to the feature overview
              to explore the capabilities of the project.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Open client app <ArrowUpRight size={17} />
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
