import { getProjects } from "../../../lib/projects-db";

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type");

  if (type !== null && type !== "opensource" && type !== "school") {
    return Response.json(
      { error: "type must be 'opensource' or 'school'" },
      { status: 400 },
    );
  }

  return Response.json(getProjects(type));
}
