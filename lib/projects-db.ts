// lib/projects-db.ts

import { neon } from "@neondatabase/serverless";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string | null;
}

// Create a database connection when a query is executed
function getSql() {
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  return neon(databaseUrl);
}

// Retrieve all projects or filter by project type
export async function getProjects(type?: string | null): Promise<Project[]> {
  const sql = getSql();

  if (type) {
    const rows = await sql`
      SELECT *
      FROM projects
      WHERE type = ${type}
      ORDER BY id ASC
    `;

    return rows as Project[];
  }

  const rows = await sql`
    SELECT *
    FROM projects
    ORDER BY id ASC
  `;

  return rows as Project[];
}

// Retrieve one project using its ID.
export async function getProjectById(id: number): Promise<Project | null> {
  const sql = getSql();

  const rows = await sql`
    SELECT *
    FROM projects
    WHERE id = ${id}
    LIMIT 1
  `;

  return (rows[0] as Project | undefined) ?? null;
}
