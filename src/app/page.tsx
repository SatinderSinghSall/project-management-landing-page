import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  Code2,
  Database,
  Folders,
  GitBranch,
  Layers3,
  LayoutDashboard,
  ListTodo,
  LockKeyhole,
  Monitor,
  Network,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import AppScreenshots from "@/components/AppScreenshots";
import HomePromoModal from "@/components/HomePromoModal";

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const features = [
  {
    icon: LayoutDashboard,
    title: "Project dashboard",
    description:
      "Get a centralized view of your projects, recent activity, tasks, and workspace.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Folders,
    title: "Project management",
    description:
      "Organize projects, review project details, and keep work structured in one place.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: ListTodo,
    title: "Task management",
    description:
      "Create tasks, review task details, and coordinate work across your projects.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description:
      "Manage workspace members, invite teammates, and organize collaborative work.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Project insights",
    description:
      "Explore project analytics, calendar views, summaries, and recent activity.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Admin control panel",
    description:
      "Access a dedicated administration interface for users, projects, tasks, workspaces, and comments.",
    color: "bg-rose-50 text-rose-600",
  },
];

const technologies = [
  { name: "Next.js", category: "Landing website" },
  { name: "React", category: "Client interface" },
  { name: "Vite", category: "Frontend tooling" },
  { name: "Express.js", category: "Backend API" },
  { name: "Prisma", category: "Database ORM" },
  { name: "Clerk", category: "Authentication" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50/80 via-white to-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-200/30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(#a5b4fc 0.8px, transparent 0.8px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28 lg:pt-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              A full-stack project management platform
              <ChevronRight size={14} />
            </div>

            <h1 className="mt-8 max-w-2xl text-4xl font-bold leading-[1.12] tracking-[-1.8px] text-slate-950 sm:text-5xl sm:tracking-[-2.5px] lg:text-[60px]">
              Plan better.
              <br />
              Build together.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Deliver more.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore the Full-Stack Project Management System by Satinder Singh
              Sall — a platform bringing projects, tasks, teams, and
              administrative tools together in one connected application.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
              >
                Explore the application
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <Link
                href="/features"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                Explore features
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Dedicated client application
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Separate admin panel
              </span>
            </div>

            <div className="mt-10 border-t border-slate-200/80 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Designed and developed by
              </p>
              <p className="mt-2 text-base font-bold text-slate-800">
                Satinder Singh Sall
              </p>
            </div>
          </div>

          {/* Dashboard-inspired visual */}
          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-indigo-200/50 via-violet-100/50 to-blue-100/50 blur-2xl" />

            <div className="relative rounded-[25px] border border-slate-200/90 bg-white p-3 shadow-[0_30px_90px_-35px_rgba(67,56,202,0.28)] sm:p-4">
              <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Layers3 size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Workspace overview
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Your projects, in one place
                    </p>
                  </div>
                </div>
                <span className="rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700 sm:text-xs">
                  Organized work
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4">
                <div className="rounded-2xl border border-indigo-100/80 bg-indigo-50/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">
                      Projects
                    </span>
                    <Folders size={17} className="text-indigo-600" />
                  </div>
                  <div className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                    Project hub
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Keep your work organized
                  </p>
                  <div className="mt-4 flex gap-1.5">
                    <span className="h-1.5 w-10 rounded-full bg-indigo-500" />
                    <span className="h-1.5 w-7 rounded-full bg-indigo-300" />
                    <span className="h-1.5 w-5 rounded-full bg-indigo-100" />
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">
                      Tasks
                    </span>
                    <ListTodo size={17} className="text-violet-600" />
                  </div>
                  <div className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                    Task board
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Keep the next step clear
                  </p>
                  <div className="mt-4 flex gap-1.5">
                    <span className="h-1.5 w-8 rounded-full bg-violet-500" />
                    <span className="h-1.5 w-9 rounded-full bg-violet-300" />
                    <span className="h-1.5 w-5 rounded-full bg-violet-100" />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      A connected workflow
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      From planning to administration
                    </p>
                  </div>
                  <Workflow size={21} className="text-indigo-600" />
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      icon: Folders,
                      title: "Projects & workspaces",
                      description: "Structure your team's work",
                      style: "bg-indigo-50 text-indigo-600",
                    },
                    {
                      icon: Users,
                      title: "Team collaboration",
                      description: "Bring people and tasks together",
                      style: "bg-emerald-50 text-emerald-600",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Administration",
                      description: "Manage resources from a separate panel",
                      style: "bg-violet-50 text-violet-600",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.style}`}
                        >
                          <Icon size={19} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-slate-800 sm:text-sm">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                            {item.description}
                          </p>
                        </div>
                        <CircleCheck
                          size={17}
                          className="shrink-0 text-emerald-500"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3.5 text-white">
                <div className="flex items-center gap-2.5">
                  <Zap size={17} className="text-amber-300" />
                  <span className="text-xs font-medium">
                    One full-stack project
                  </span>
                </div>
                <span className="text-[10px] text-slate-300 sm:text-xs">
                  Multiple connected layers
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl sm:flex lg:-left-9">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <GitBranch size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Full-stack architecture
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Client · Admin · Backend
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center gap-2 px-5 pb-8 text-xs font-medium text-slate-400 sm:px-8">
          <ArrowDown size={14} />
          Discover what powers the platform
        </div>
      </section>

      <AppScreenshots />

      {/* Platform overview */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              One project, three layers
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A complete full-stack system
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The repository brings the user experience, administration
              interface, and backend services together in one organized project
              structure.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Monitor size={24} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-indigo-600">
                Layer 01
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Client application
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A React application for project dashboards, task management,
                project details, workspace navigation, and team collaboration.
              </p>
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:gap-3"
              >
                Open client app <ArrowRight size={16} />
              </a>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <PanelsTopLeft size={24} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-violet-600">
                Layer 02
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Admin panel
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A separate React and Vite interface with administrative pages
                for users, workspaces, projects, tasks, comments, and account
                management.
              </p>
              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition group-hover:gap-3"
              >
                Open admin panel <ArrowRight size={16} />
              </a>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Network size={24} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-emerald-600">
                Layer 03
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Backend services
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                An Express backend organized into routes, controllers,
                middleware, Prisma configuration, and supporting services.
              </p>
              <Link
                href="/architecture"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:gap-3"
              >
                Explore architecture <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Platform capabilities
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Everything organized around your work
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Explore the major features available across the client
                application and administration interface.
              </p>
            </div>
            <Link
              href="/features"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all features <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} transition duration-300 group-hover:scale-105`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                  <div className="mt-5 h-px w-full bg-slate-100" />
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    Part of the platform
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Under the hood
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built as a structured full-stack codebase
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                The monorepo separates frontend applications and backend
                responsibilities, making the codebase easier to navigate,
                develop, and maintain.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Code2,
                    title: "Separate frontend applications",
                    text: "Dedicated codebases for the user-facing client and admin interface.",
                  },
                  {
                    icon: Workflow,
                    title: "Organized API layer",
                    text: "Express routes, controllers, and middleware with distinct responsibilities.",
                  },
                  {
                    icon: Database,
                    title: "Database integration",
                    text: "Prisma configuration and a schema for the application's data model.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Authentication integration",
                    text: "Clerk integration in the client and dedicated admin authentication components.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon size={19} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/architecture"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Explore the architecture <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Monorepo structure
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Application layers and shared repository
                  </p>
                </div>
                <GitBranch size={21} className="text-indigo-600" />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Layers3 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Project Management
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Full-stack monorepo
                    </p>
                  </div>
                </div>

                <div className="ml-5 mt-5 space-y-3 border-l-2 border-dashed border-slate-200 pl-5">
                  <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-3.5">
                    <div className="flex items-center gap-3">
                      <Monitor size={19} className="text-indigo-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          client/
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600">
                          React · Vite · Redux · Clerk
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-violet-100 bg-violet-50/70 p-3.5">
                    <div className="flex items-center gap-3">
                      <PanelsTopLeft size={19} className="text-violet-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          admin/
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600">
                          React · Vite · Admin interfaces
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5">
                    <div className="flex items-center gap-3">
                      <Network size={19} className="text-emerald-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          server/
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600">
                          Express · Prisma · API modules
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                This landing website is maintained separately under
                web/landing/landing-page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Technology stack
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built with modern web technologies
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              A look at the technologies used across the landing website,
              client, admin panel, and backend.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >
                <p className="text-sm font-bold text-slate-900">{tech.name}</p>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-indigo-100/60" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700">
                  <Sparkles size={14} />
                  About the developer
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Built by Satinder Singh Sall
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  This full-stack project brings together a user-facing project
                  management application, a dedicated admin panel, and an
                  Express backend in one repository. Explore the implementation,
                  technologies, and architecture behind the platform.
                </p>
                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
                >
                  Learn more about the project <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-indigo-100 bg-white shadow-lg shadow-indigo-100/70 sm:h-36 sm:w-36">
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600" />
                <Layers3
                  size={44}
                  className="relative text-white sm:h-12 sm:w-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-5 pb-20 sm:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 px-6 py-12 text-center text-white shadow-xl shadow-indigo-200/60 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-indigo-50">
              <Zap size={14} />
              Ready to explore?
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              See the project in action.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
              Explore the live application, discover the administration
              interface, and learn how the full-stack system is organized.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Open user application <ArrowUpRight size={17} />
              </a>
              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Visit admin panel <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <HomePromoModal />
    </main>
  );
}
