// components/ProjectSearch.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectSearch({ placeholder = "Search projects..." }: { placeholder?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [term, setTerm] = useState(searchParams.get("query")?.toString() ?? "");

  useEffect(() => {
    const handler = setTimeout(() => {
      const currentQuery = searchParams.get("query") ?? "";
      if (term === currentQuery) return;

      const params = new URLSearchParams(searchParams);
      params.set("page", "1");

      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(handler);
  }, [term, pathname, replace, searchParams]);

  return (
    <div className="mb-6">
      <label htmlFor="project-search" className="sr-only">
        Search projects
      </label>
      <input
        id="project-search"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}
