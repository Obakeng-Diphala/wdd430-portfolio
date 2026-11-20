"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  insertProject,
    updateProjectById,
    deleteProjectById,
} from "./projects-db";

const ProjectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  technologies: z.string().min(1, "Technologies are required"),
  type: z.enum(["opensource", "school"]).default("school"),
  link: z.string().optional(),
});

export async function createProject(formData: FormData) {
    const validateFields = ProjectFormSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        technologies: formData.get("technologies"),
        type: formData.get("type") || "school",
        link: formData.get("link") || undefined,
    });
  
    if (!validateFields.success) {
        throw new Error("Invalid project form data");
    }
  
    const { title, description, technologies, type, link } = validateFields.data;
    
    // Convert comma-separated string into string[] for Postgres
    const techArray = technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean);


    await insertProject({
        title,
        description,
        type,
        technologies: techArray,
        link: link
    });

    revalidatePath("/projects");
    redirect("/projects");
}

export async function updateProject(id: number, formData: FormData): Promise<void> {
    const validateFields = ProjectFormSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        technologies: formData.get("technologies"),
        type: formData.get("type") || "school",
        link: formData.get("link") || undefined,
    });

    if (!validateFields.success) {
        throw new Error("Invalid project form data");
    }

    const { title, description, technologies, type, link } = validateFields.data;
    
    const techArray = technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean);

    await updateProjectById(id, {
        title,
        description,
        type,
        technologies: techArray,
        link: link || null,
    });
    
    revalidatePath("/projects");
    redirect("/projects");
}

export async function deleteProject(id: number) {
  await deleteProjectById(id);
  revalidatePath("/projects")  
}
    