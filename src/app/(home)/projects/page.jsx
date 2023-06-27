import ProjectsContainer from "@/containers/projects";
import { fetchProjects } from "@/services/projects";

export default async function Projects() {

    const projects = await fetchProjects()

    return (
        <ProjectsContainer projects={projects.projects} />
    )
}