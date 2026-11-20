import Link from "next/link";
import { deleteProject } from "@/lib/actions";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string | null;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="text-sm text-gray-600">
          <strong>Technologies:</strong> {technologies.join(", ")}
        </p>

        {link && (
          <p className="mt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-3">
        <Link
          href={`/${id}/edit`}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Edit
        </Link>

        <form action={deleteProjectWithId}>
          <button
            type="submit"
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
