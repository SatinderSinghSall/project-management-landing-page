import type { Metadata } from "next";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://YOUR-LANDING-DOMAIN.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Project Management System by Satinder Singh Sall",
    template: "%s | Project Management by Satinder Singh Sall",
  },

  description:
    "Explore the Full-Stack Project Management System by Satinder Singh Sall, featuring project and task management, team collaboration, workspaces, an admin panel, and a structured backend.",

  applicationName: "Project Management System",

  authors: [{ name: "Satinder Singh Sall" }],
  creator: "Satinder Singh Sall",
  publisher: "Satinder Singh Sall",

  keywords: [
    "Satinder Singh Sall",
    "Project Management System by Satinder Singh Sall",
    "Full-Stack Project Management System by Satinder Singh Sall",
    "Full-Stack Project Management System",
    "Project Management System",
    "Project and Task Management",
    "Team Collaboration",
    "Project Management Admin Panel",
    "React Project Management",
    "Next.js Project Website",
    "Full-Stack Web Development",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Project Management System by Satinder Singh Sall",
    title: "Project Management System by Satinder Singh Sall",
    description:
      "Discover the full-stack project management platform, including its user application, administrator dashboard, and backend architecture.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Project Management System by Satinder Singh Sall",
    description:
      "Explore project management, team collaboration, the admin panel, and the full-stack architecture built by Satinder Singh Sall.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
