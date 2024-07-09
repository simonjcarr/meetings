
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createProject } from "@/server/actions/ProjectActions"


export function AddProjectForm() {

    const onSubmit = async (formData: FormData) => {
        'use server';
        const data = {
            name: formData.get('name') as string,
            description: formData.get('description') as string
        }
        await createProject(data)
    }

    return (
        <div>
            <form action={onSubmit} method="POST" className="space-y-2">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea name="description" placeholder="Project Description" />
                </div>
                <Button type="submit">Create Project</Button>
            </form>
        </div>
    )
}
