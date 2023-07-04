import { FadeIn } from '@/components/animation'
import Projects from '@/components/projects'

function ProjectsContainer({ projects }) {
    return (
        <FadeIn>
            <section className='container mx-auto grid gap-10 px-5 mt-10'>
                <Projects projects={projects} />
            </section>
        </FadeIn>
    )
}

export default ProjectsContainer