import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "../../../lib/projects-db";

export async function GET(request: NextRequest) {
  try {
    const type = request.nextUrl.searchParams.get("type");

    const projects = await getProjects(type);

    return NextResponse.json(projects);

  } catch (error) {
    console.error("Error fetching projects:", error);

    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}  