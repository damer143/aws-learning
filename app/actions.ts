"use server";

export async function getDeploymentNotes() {
  return [
    "Keep page.tsx as the SSR entry route and move browser-only logic into small client components.",
    "Use API routes as early service boundaries so the same UI can later consume external microservices.",
    "Store content in typed config modules first, then swap them with a CMS or service layer when needed."
  ];
}
