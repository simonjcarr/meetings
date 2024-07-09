import PageHeader from "@/app/components/PageHeader"
import { AddProjectForm } from "@/app/components/projects/AddProjectForm"
import WidthLayout from "@/app/components/WidthLayout"
import { Card, CardContent } from "@/components/ui/card"

const page = () => {

    return (
        <WidthLayout>
            <PageHeader title="Create Project" /> 
            <div className="w-2/3 mx-auto">
                <Card>
                    <CardContent>
                        <div></div>
                        <AddProjectForm />
                    </CardContent>
                </Card>
            </div>
        </WidthLayout>
    )
}
export default page