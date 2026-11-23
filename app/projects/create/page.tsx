import Link from "next/link";
import ProjectForm from "@/components/ProjectForm";
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

            <ProjectForm
                action={createProject}
                submitLabel="Create Project"
            />
        </main>
    );
}   