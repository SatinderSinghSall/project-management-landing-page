import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";

import CopyrightYear from "./CopyrightYear";

const clientUrl = "https://project-management-satinder.vercel.app/";
const adminUrl = "https://project-ms-admin-panel.vercel.app/";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-slate-900"
            >
              <span className="rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 p-2.5 text-white shadow-md shadow-indigo-100">
                <Layers3 size={21} />
              </span>
              <span className="font-bold">Project Management</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              A full-stack project management system built by Satinder Singh
              Sall.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Explore</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link className="block transition hover:text-indigo-600" href="/">
                Home
              </Link>
              <Link
                className="block transition hover:text-indigo-600"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="block transition hover:text-indigo-600"
                href="/architecture"
              >
                Architecture
              </Link>
              <Link
                className="block transition hover:text-indigo-600"
                href="/about"
              >
                About the Developer
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Applications</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                className="flex items-center gap-2 transition hover:text-indigo-600"
                href={clientUrl}
                target="_blank"
                rel="noreferrer"
              >
                User Application <ArrowUpRight size={14} />
              </a>
              <a
                className="flex items-center gap-2 transition hover:text-indigo-600"
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
              >
                Admin Panel <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Built by</h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              <span className="font-semibold text-slate-800">
                Satinder Singh Sall
              </span>
              <br />
              Full-Stack Project Developer
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-400">
              Explore the technology and architecture behind the project.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> Satinder Singh Sall. Project showcase.
          </p>
          <p>Built with Next.js · React · Express</p>
        </div>
      </div>
    </footer>
  );
}
