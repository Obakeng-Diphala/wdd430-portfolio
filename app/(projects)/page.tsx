import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import { fetchFilteredProjects, fetchProjectPages } from "@/lib/projects-db";

export default async function ProjectsPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectPages(query),
  ]);

  const projectListItems = projects.map((project) => ({
    ...project,
    link: project.link ?? undefined,
  }));

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Projects Overview</h1>
      <ProjectSearch placeholder="Search by title or description..." />
      <ProjectList projects={projectListItems} />
      <Pagination totalPages={totalPages} />
    </main>
  );
} 
  