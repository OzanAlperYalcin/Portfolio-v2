import ProjectsContainer from "@/containers/admin/projects"
import { fetchProjects, searchProjects } from "@/services/projects"

export default async function ProjectsPage({ searchParams }) {
    const { search } = searchParams
    const projects = !search ? await fetchProjects() : await searchProjects(search)
    return (
        <ProjectsContainer data={projects} />
    )
}