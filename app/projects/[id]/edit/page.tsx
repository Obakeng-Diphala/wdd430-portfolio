import Link from "next/link";
import { notFound } from "next/navigation";
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

      <form action={updateProjectWithId} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={project.title}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue={project.description}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="technologies" className="block text-sm font-medium mb-1">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            type="text"
            defaultValue={project.technologies.join(", ")}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">
            Project Type
          </label>
          <select
            id="type"
            name="type"
            defaultValue={project.type}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="school">School</option>
            <option value="opensource">Open Source</option>
          </select>
        </div>

        
        <div>
          <label htmlFor="link" className="block text-sm font-medium mb-1">
            Project Link (optional)
          </label>
          <input
            id="link"
            name="link"
            defaultValue={project.link ?? ""}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
          <Link
            href="/"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main> 
  );
}  
