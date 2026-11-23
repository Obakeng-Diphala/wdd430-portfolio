import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { getProjectById } from "@/lib/projects-db";
import { updateProject } from "@/lib/actions";

export default async function EditProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    notFound();
  }

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  // Bind the numeric project ID to the updateProject Server Action
  const updateProjectWithId = updateProject.bind(null, project.id);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Edit Project</h1>
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>

      <ProjectForm
        action={updateProjectWithId}
        submitLabel="Save Changes"
        project={{
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          type: project.type,
          link: project.link,
        }}
      />
    </main>
  );
}