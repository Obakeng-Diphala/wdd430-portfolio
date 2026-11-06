import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects-db";

export default async function ProjectsPage() {
  const baseURL = process.env.APP_BASE_URL ?? "http://localhost:3000";
  const response = await fetch(new URL("/api/projects", baseURL), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = (await response.json()) as Project[];

  return (
    <main>
      <h1>Projects Overview</h1>
      <ProjectList projects={projects} />
    </main>
  );
}