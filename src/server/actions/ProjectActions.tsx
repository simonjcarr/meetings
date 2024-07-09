import { db } from "../db";
import { projects } from "../db/schema";

export async function createProject(formData: { name: string; description: string }) {
    const result = await db.insert(projects).values({
        name: formData.name,
        description: formData.description
    }).returning({ projectId: projects.id })
    console.log("Insert Result", result)
    return result
}

export async function getProjects() {
    const result = await db.select().from(projects)
    return result
}