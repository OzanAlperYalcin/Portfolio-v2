import Navbar from "@/components/admin/navbar"
import ProjectsTable from './ProjectsTable'
import Stats from "@/components/admin/stats"

function ProjectsContainer({ data, title }) {
    const { projects, totalCount } = data

    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full grid gap-5 bg-white p-10 shadow rounded'>
                <Stats totalCount={totalCount} path={{ name: 'YENİ PROJE', url: '/dashboard/project' }} />
                <ProjectsTable projects={projects} />
            </div>
        </div>
    )
}

export default ProjectsContainer