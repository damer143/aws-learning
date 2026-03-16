import "server-only";

import type { LandingPageData } from "@/types/site";

const resumePath = "/Morphy%20Resume.pdf";

export async function getLandingPageData(): Promise<LandingPageData> {
  return {
    brand: {
      eyebrow: "AWS Learning Template",
      name: "Morphy Resume Landing",
      navItems: [
        { label: "Overview", href: "#overview" },
        { label: "Architecture", href: "#architecture" },
        { label: "Resume", href: "#resume" }
      ]
    },
    hero: {
      eyebrow: "SSR + CSR Hybrid Scaffold",
      title: "A modular Next.js starter for resume sites, EC2 practice, and future service splits.",
      description:
        "This template keeps the route server-rendered for SEO and performance, then mounts focused client-side islands for interactivity. The structure is intentionally split into sections, layout components, typed data, and API routes so it can grow into larger projects cleanly.",
      actions: [
        {
          label: "View Resume",
          href: resumePath,
          variant: "primary",
          external: true
        },
        {
          label: "Download PDF",
          href: resumePath,
          variant: "secondary",
          download: true
        }
      ],
      panels: [
        {
          title: "Rendering Mode",
          value: "SSR page + CSR island",
          description: "The route renders on the server and ships a dedicated client component for interactive behavior."
        },
        {
          title: "Deployment Goal",
          value: "EC2-ready template",
          description: "Useful as a small personal site you can clone, customize, deploy, and extend."
        }
      ]
    },
    highlightStats: [
      { label: "Page Strategy", value: "SSR" },
      { label: "Interactive Layer", value: "CSR" },
      { label: "API Starter", value: "2 routes" }
    ],
    architecture: [
      {
        id: "server",
        badge: "Server Layer",
        title: "App Router page as the SSR entry point",
        description:
          "The top-level route is an async server component and uses a server-only data module. It is configured with force-dynamic so it renders per request, which makes the SSR behavior explicit for learning and deployment demos."
      },
      {
        id: "client",
        badge: "Client Layer",
        title: "Client component island for interaction",
        description:
          "Interactive UI state lives in a dedicated component with use client. This keeps hydration contained and makes it easier to reason about what belongs on the browser side."
      },
      {
        id: "services",
        badge: "Service Boundary",
        title: "API routes for future microservice extraction",
        description:
          "Simple profile and health endpoints provide a clean seam for later migration into separate services, workers, or external APIs without redesigning the page structure."
      }
    ],
    resume: {
      title: "Morphy Resume",
      description:
        "The PDF is served from the public directory so it can be embedded, downloaded, or linked from other parts of the app without extra backend work.",
      path: resumePath
    },
    footer: {
      copy: "Built as a reusable Next.js scaffold for AWS learning and deployment practice.",
      links: [
        { label: "Health API", href: "/api/health" },
        { label: "Profile API", href: "/api/profile" },
        { label: "Resume PDF", href: resumePath }
      ]
    }
  };
}
