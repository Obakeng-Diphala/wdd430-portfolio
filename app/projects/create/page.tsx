import Link from "next/link";
import { createProject } from "@/lib/actions";

export default function CreateProjectPage() {
    return (
        <main className="max-w-2xl mx-auto p-6">
                <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Create New Project</h1>
                <Link href="/" className="text-sm text-gray-600 hover:underline">
                    ← Back to Projects
                </Link>
            </div>

            <form action={createProject} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="e.g, Portfolio Website"
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
                        placeholder="Describe what this project does..."
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
                        placeholder="Next.js, TypeScript, Tailwind CSS"
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
                        defaultValue="school"
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
                        type="url"
                        placeholder="https://github.com"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-4 py-6 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Create Project
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