import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "landing-page-template",
    timestamp: new Date().toISOString()
  });
}
