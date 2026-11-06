import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects-db";

export default async function OpenSourceProjectsPage() {
  const baseURL = process.env.APP_BASE_URL ?? "http://localhost:3000";
  const response = await fetch(new URL("/api/projects?type=opensource", baseURL), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch open source projects");
  }

  const projects = (await response.json()) as Project[];
  
  return (
    <main>
      <h1>Open Source Projects</h1>
    </main>
  );
}