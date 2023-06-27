import ProjectForm from "@/components/admin/projects/ProjectForm"
import FormContainer from "@/containers/admin/form"
import { fetchProject } from "@/services/projects"

export default async function ProjectPage({ params }) {
    const project = await fetchProject(params.id)

    return (
        <FormContainer title={'PROJE'}>
            <ProjectForm data={project?.project} />
        </FormContainer>
    )
}