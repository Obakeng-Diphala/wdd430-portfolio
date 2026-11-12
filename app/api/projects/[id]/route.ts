import { NextResponse } from "next/server";
import { getProjectById } from "../../../../lib/projects-db";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  try {
  const { id } = await params;

  const projectId = Number(id);

  // Validate the supplied ID.
  if (!Number.isInteger(projectId) || projectId <= 0) {
    return NextResponse.json(
      { error: "Invalid project ID." },
      { status: 400 }
    );
  }

    
  // Retrieve the project from PostgreQSL  
  const project = getProjectById(projectId);

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
} catch (error) {
  console.error("Error fetching project by ID:", error);

  return NextResponse.json(
    { error: "Failed to fetch project" },
    { status: 500 }
  );
 }
}
