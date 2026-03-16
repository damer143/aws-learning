import { NextResponse } from "next/server";
import { getLandingPageData } from "@/lib/site-data";

export async function GET() {
  const data = await getLandingPageData();

  return NextResponse.json({
    brand: data.brand,
    hero: data.hero,
    resume: data.resume,
    highlightStats: data.highlightStats
  });
}
