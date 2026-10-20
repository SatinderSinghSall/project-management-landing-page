import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  FolderKanban,
  GitBranch,
  LayoutDashboard,
  ListChecks,
  LockKeyhole,
  MessageSquare,
  Network,
  PanelsTopLeft,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the features of the Full-Stack Project Management System by Satinder Singh Sall, including project management, tasks, workspaces, team collaboration, administration, and backend architecture.",
  alternates: {
    canonical: "/features",
  },
};

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

const clientFeatures = [
  {
    icon: LayoutDashboard,
    title: "Project dashboard",
    description:
      "Access a central dashboard with project information, task summaries, statistics, and recent activity.",
    tags: ["Dashboard", "Overview"],
  },
  {
    icon: FolderKanban,
    title: "Project organization",
    description:
      "Create and manage projects, explore project details, and keep related work organized.",
    tags: ["Projects", "Details"],
  },
  {
    icon: ListChecks,
    title: "Task management",
    description:
      "Create tasks, inspect task details, and coordinate work through your project workflow.",
    tags: ["Tasks", "Workflow"],
  },
  {
    icon: Users,
    title: "Team collaboration",
    description:
      "Manage project members, invite workspace members, and coordinate responsibilities.",
    tags: ["Members", "Invitations"],
  },
  {
    icon: CalendarDays,
    title: "Project calendar",
    description:
      "Use the project calendar interface to get a more structured view of project activity.",
    tags: ["Calendar", "Planning"],
  },
  {
    icon: BarChart3,
    title: "Project analytics",
    description:
      "Explore analytics, task summaries, and activity components available in the client application.",
    tags: ["Analytics", "Insights"],
  },
];

const adminFeatures = [
  {
    icon: LayoutDashboard,
    title: "Administrative dashboard",
    description:
      "Provide a central entry point for administrative views and system management.",
  },
  {
    icon: Users,
    title: "User management",
    description:
      "Access the dedicated interface for managing users in the application.",
  },
  {
    icon: PanelsTopLeft,
    title: "Workspace management",
    description:
      "Review and manage workspace resources through the administration interface.",
  },
  {
    icon: FolderKanban,
    title: "Project and task management",
    description: "Access dedicated admin pages for projects and tasks.",
  },
  {
    icon: MessageSquare,
    title: "Comment management",
    description:
      "Review project comments through the admin comments interface.",
  },
  {
    icon: Database,
    title: "Database explorer",
    description:
      "Open the administrative database explorer interface for data inspection.",
  },
];

const backendFeatures = [
  {
    icon: Network,
    title: "Express API",
    description:
      "Organized backend routes and controllers separate request handling from application logic.",
  },
  {
    icon: ShieldCheck,
    title: "Middleware",
    description:
      "Dedicated authentication and administrative middleware files support access-control workflows.",
  },
  {
    icon: Database,
    title: "Prisma integration",
    description:
      "A Prisma schema and database configuration provide the foundation for data access.",
  },
  {
    icon: Code2,
    title: "Validation utilities",
    description:
      "Administrative validation utilities help organize input-validation logic.",
  },
];

const stack = [
  { name: "Next.js", role: "Landing website" },
  { name: "React", role: "User interface" },
  { name: "Vite", role: "Frontend tooling" },
  { name: "Express.js", role: "Backend API" },
  { name: "Prisma", role: "Database ORM" },
  { name: "Clerk", role: "Authentication integration" },
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

function FeatureCard({
  icon: Icon,
  title,
  description,
  tags,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  tags?: string[];
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
        <Icon size={23} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

      {tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-emerald-700">
        <CheckCircle2 size={15} />
        Included in the project
      </div>
    </article>
  );
}

export default function FeaturesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-b from-indigo-50/80 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              <Zap size={15} />
              Platform features
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl">
              Everything your projects need,
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                connected in one system.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover the client application, administrative interfaces, and
              backend architecture behind the Full-Stack Project Management
              System by Satinder Singh Sall.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Explore client app <ArrowUpRight size={17} />
              </a>
              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Explore admin panel <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Client application
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Admin panel
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Express backend
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client features */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              01 · User application
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A workspace for everyday project work
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore the client-side tools for organizing projects, managing
              tasks, and collaborating with teammates.
            </p>
          </div>
          <a
            href={clientUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Open client application <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clientFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
          <Activity size={20} className="mt-0.5 shrink-0 text-indigo-600" />
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Designed around connected project work
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              The client includes dedicated pages and reusable components for
              dashboards, project details, task details, team management,
              calendar views, analytics, and workspace navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Admin features */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="02 · Administration"
            title="A dedicated admin experience"
            description="The separate admin frontend provides dedicated pages for central administration and resource management."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adminFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          <div className="mt-9 text-center">
            <a
              href={adminUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200/60 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Visit the admin panel <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Backend */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="03 · Backend and API"
          title="An organized backend foundation"
          description="The Express backend separates routes, controllers, middleware, database configuration, and validation utilities into focused modules."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {backendFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <GitBranch size={23} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  One repository, separate responsibilities
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  The monorepo keeps the client, admin, backend, and landing
                  website organized as separate applications within the larger
                  project.
                </p>
              </div>
            </div>
            <Link
              href="/architecture"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View architecture <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="04 · Technology stack"
            title="Modern tools across the stack"
            description="A quick overview of the technologies used in the landing site and the existing project applications."
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >
                <p className="text-sm font-bold text-slate-900">{tech.name}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {tech.role}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-500">
            Technology labels describe the repository structure and
            integrations; actual package versions and production configuration
            may differ.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 px-6 py-12 text-center text-white shadow-xl shadow-indigo-200/60 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full border-[45px] border-white/[0.08]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold">
              <Zap size={14} />
              Explore the platform
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              See these features in action.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
              Visit the live client application or open the dedicated admin
              panel to explore the project for yourself.
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
