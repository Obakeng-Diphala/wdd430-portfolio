"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { ProjectFormState } from "@/lib/actions";

interface ProjectFormProps {
  action: (
    state: ProjectFormState,
    formData: FormData,
  ) => Promise<ProjectFormState>;
  submitLabel: string;
  project?: {
    title: string;
    description: string;
    technologies: string[];
    type: string;
    link?: string | null;
  };
}

const initialState: ProjectFormState = { message: "", errors: {} };

export default function ProjectForm({
  action,
  submitLabel,
  project,
}: ProjectFormProps) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        {state.errors?.title && (
          <p id="title-error" className="mb-1 text-sm text-red-700">
            {state.errors.title.join(" ")} 
          </p> 
        })          
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={project?.title ?? ""}
          placeholder="e.g. Portfolio Website"
          required
          aria-describedby={state.errors?.title ? "title-error" : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
        {state.errors?.title && (
          <p id="title-error" className="mt-1 text-sm text-red-700">
            {state.errors.title.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={project?.description ?? ""}
          placeholder="Describe what this project does..."
          required
          aria-describedby={
            state.errors?.description ? "description-error" : undefined
          }
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
        {state.errors?.description && (
          <p id="description-error" className="mt-1 text-sm text-red-700">
            {state.errors.description.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="technologies"
          className="block text-sm font-medium mb-1"
        >
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          defaultValue={project ? project.technologies.join(", ") : ""}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          required
          aria-describedby={
            state.errors?.technologies ? "technologies-error" : undefined
          }
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
        {state.errors?.technologies && (
          <p id="technologies-error" className="mt-1 text-sm text-red-700">
            {state.errors.technologies.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium mb-1">
          Project Type
        </label>
        <select
          id="type"
          name="type"
          defaultValue={project?.type ?? "school"}
          aria-describedby={state.errors?.type ? "type-error" : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <option value="school">School</option>
          <option value="opensource">Open Source</option>
        </select>
        {state.errors?.type && (
          <p id="type-error" className="mt-1 text-sm text-red-700">
            {state.errors.type.join(" ")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium mb-1">
          Project Link (optional)
        </label>
        <input
          id="link"
          name="link"
          type="url"
          defaultValue={project?.link ?? ""}
          placeholder="https://github.com"
          aria-describedby={state.errors?.link ? "link-error" : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
        {state.errors?.link && (
          <p id="link-error" className="mt-1 text-sm text-red-700">
            {state.errors.link.join(" ")}
          </p>
        )}
      </div>

      <p aria-live="polite" className="min-h-5 text-sm text-red-700">
        {state.message}
      </p>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {pending ? "Saving..." : submitLabel}
        </button>
        <Link
          href="/projects"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
