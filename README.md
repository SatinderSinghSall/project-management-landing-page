# Project Management System — Landing Page

A public-facing landing website for the **Full-Stack Project Management System by Satinder Singh Sall**. This website introduces the platform, showcases its features and architecture, and connects visitors to the deployed client application and admin dashboard.

## Overview

Built with Next.js and the App Router, this landing page provides an overview of the project and its core applications.

---

# 👨‍💻 About Me

Hi, I'm **Satinder Singh Sall**, a Full-Stack Developer, AI Enthusiast, and MCA student passionate about building scalable digital products, intelligent software systems, and meaningful user experiences.

My journey spans across **Web Development, Mobile Applications, Artificial Intelligence, Cloud Technologies, and Creative Writing**. I enjoy transforming ideas into production-ready solutions using modern technologies while continuously exploring emerging fields like Machine Learning, Computer Vision, and Automation.

Currently, I'm pursuing my **Master of Computer Applications (MCA)** while actively developing full-stack applications, AI-powered solutions, and open-source learning resources. My work focuses on creating software that is not only functional but also scalable, maintainable, and impactful.

## 🚀 What I'm Building

- 🤖 AI-Powered Attendance System using Face Recognition & Voice Biometrics
- 🌐 Modern Full-Stack Web Applications
- 📱 Cross-Platform Mobile Applications
- 🎮 Exploring Game Development & Interactive Experiences
- 📚 Open-Source Learning Roadmaps and Technical Resources
- ✍️ Satinder Poetry — A platform for original poetry, essays, and creative writing

## 🛠️ Core Technologies

**Frontend:** React, Next.js, TypeScript, Tailwind CSS
**Backend:** Node.js, Express.js, REST APIs
**Databases:** MongoDB, PostgreSQL, MySQL, Firebase, Supabase
**DevOps & Cloud:** Docker, GitHub Actions, Vercel, Render
**Programming:** Python, Java, JavaScript, C++, C#, Kotlin
**AI / ML:** Python, Computer Vision, Face Recognition, Automation
**Mobile Apps:** High-Performance Android, iOS, Cross-Platform & Native Development

## 🌍 Connect With Me

🌐 Portfolio: https://satinder-portfolio.vercel.app

💻 GitHub: https://github.com/SatinderSinghSall

💼 LinkedIn: https://www.linkedin.com/in/satinder-singh-sall-b62049204/

🎥 YouTube: https://www.youtube.com/@satindersinghsall.3841

✍️ Satinder Poetry: https://satinderpoetry.com

🤖 AI Attendance Project: https://ai-attendance-app-satinder.vercel.app/

---

> _"I believe great software is built at the intersection of engineering excellence, continuous learning, creativity, and real-world problem solving."_

⭐ Always learning. Always building. Always improving.

---

### Pages

- **Home (`/`)** — Project introduction, platform overview, features, technology stack, and application links.
- **Features (`/features`)** — Overview of the project's main capabilities.
- **Architecture (`/architecture`)** — High-level presentation of the application's architecture.
- **About (`/about`)** — Project and developer overview.

### Key Features

- Responsive public-facing landing website
- Reusable navigation and footer components
- Scroll-to-top button with smooth scrolling
- Modern light UI with indigo and violet accents
- SEO metadata and Open Graph configuration
- Search engine crawling rules through `robots.ts`
- XML sitemap generation through `sitemap.ts`
- Links to the deployed client and admin applications

## Technology Stack

- **Framework:** Next.js
- **Frontend Library:** React
- **Language:** TypeScript
- **Routing:** Next.js App Router
- **Styling:** Tailwind CSS
- **SEO:** Next.js Metadata API, `robots.ts`, and `sitemap.ts`

## Project Structure

```text
web/landing/landing-page/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    └── app/
        ├── about/
        │   └── page.tsx
        ├── architecture/
        │   └── page.tsx
        ├── components/
        │   ├── Footer.tsx
        │   ├── Navbar.tsx
        │   └── ScrollToTop.tsx
        ├── features/
        │   └── page.tsx
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        ├── page.tsx
        ├── robots.ts
        └── sitemap.ts
```

## Getting Started

### Prerequisites

- Node.js LTS
- npm or the package manager configured for the project

### 1. Navigate to the landing page

From the monorepo root directory:

```bash
cd web/landing/landing-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the landing page directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set `NEXT_PUBLIC_SITE_URL` to the actual deployed landing page URL.

For example:

```env
NEXT_PUBLIC_SITE_URL=https://your-actual-landing-domain.vercel.app
```

Replace the example URL with your real production domain. Do not leave a placeholder domain in production, because it may affect canonical URLs, metadata, and sitemap links.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build the application

```bash
npm run build
```

### 6. Start the production server locally

```bash
npm run start
```

Check `package.json` for the exact scripts and package manager configured for this project.

## SEO Configuration

The landing page includes a foundation for search engine discovery and social sharing.

### Metadata

The root layout defines site-wide metadata, including:

- Default page title and title template
- Meta description
- Author and creator information
- Open Graph metadata
- Search engine indexing directives

For improved SEO, give each public page its own descriptive title and meta description. Configure canonical URLs and add an appropriate social-sharing image when available.

### Sitemap

The sitemap is defined in:

```text
src/app/sitemap.ts
```

Next.js generates the sitemap route at:

```text
/sitemap.xml
```

For local testing, visit:

[http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)

Ensure the sitemap contains the public routes you want indexed:

- `/`
- `/features`
- `/architecture`
- `/about`

### Robots

The robots configuration is defined in:

```text
src/app/robots.ts
```

Next.js generates:

```text
/robots.txt
```

Test it locally at:

[http://localhost:3000/robots.txt](http://localhost:3000/robots.txt)

Ensure public pages are crawlable and the sitemap URL points to the correct production domain.

### Google Search Console

After deploying the landing page:

1. Open [Google Search Console](https://search.google.com/search-console/about).
2. Add and verify your production website.
3. Submit the sitemap URL, such as `https://your-actual-domain.vercel.app/sitemap.xml`.
4. Use URL Inspection to request indexing for important pages.
5. Monitor indexing status and resolve any reported issues.

**Note:** SEO improvements help search engines discover and understand your website, but they do not guarantee indexing or specific Google rankings.

## Deployment

The landing page can be deployed to a Next.js-compatible hosting platform such as Vercel.

### Deployment Checklist

1. Import the monorepo into your hosting platform.
2. Configure the project root as `web/landing/landing-page` if deploying the landing page independently.
3. Configure the correct install command and build settings for the monorepo.
4. Set `NEXT_PUBLIC_SITE_URL` to the actual production URL.
5. Deploy the application.
6. Verify that all pages load correctly.
7. Check `/robots.txt` and `/sitemap.xml`.
8. Test navigation, responsive layouts, metadata, and external application links.
9. Submit the sitemap through Google Search Console.

If the repository uses a root-level lockfile or workspace configuration, make sure the deployment settings correctly account for the monorepo structure.

## Related Applications

This landing website belongs to a full-stack project management monorepo.

- **Client Application:** [Project Management System](https://project-management-satinder.vercel.app/)
- **Admin Dashboard:** [Project Management Admin Panel](https://project-ms-admin-panel.vercel.app/)
- **Backend API:** Express application in the monorepo's `server/` directory

Add the landing page's production URL here once it has been deployed.

## Development Guidelines

- Keep shared UI components in `src/app/components/`.
- Follow the Next.js App Router conventions when adding new pages.
- Add unique metadata to new public pages.
- Keep the sitemap synchronized with the public routes intended for indexing.
- Use environment variables for environment-specific configuration.
- Never commit `.env.local`, API keys, secrets, or deployment credentials.

## License

Add the license and usage terms applicable to this repository. Refer to the repository's existing license, if one is present.
