import { templates } from "@/lib/template";
import { NextResponse } from "next/server";

export const dynamic = "force-static"; // defaults to auto

export async function GET(request: Request) {
  return NextResponse.json({
    one: "/api/one",
    all: "/api/all",
  });
}
