import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";
import ProjectListSkeleton from "@/components/ProjectListSkeleton";

export default function SchoolProjectsPage() {
  return (
    <main>
      <h1>School Projects</h1>
      <Suspense fallback={<ProjectListSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}