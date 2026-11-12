import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  // Step 3: Temporary dealy for testing - remove after verifying
  // await new Promise((res) => setTimeout(res, 2000)); 
  
  const baseURL = process.env.APP_BASE_URL ?? "http://localhost:3000";
  const response = await fetch(new URL("/api/projects?type=school", baseURL), {
    cache: "no-store",
  });
  
  if (!response.ok) {
      throw new Error("Failed to fetch school projects");  
  }
  
  const projects = (await response.json()) as Project[];  
    
  return (
    <ProjectList
      projects={projects.map((project) => ({
        ...project,
        link: project.link ?? undefined,
      }))}
    />
  );
}