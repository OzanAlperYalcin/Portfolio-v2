import Project from './Project'

function Projects({ projects }) {
    return (
        <div>
            <h1 className='title'>Projeler</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                    {projects.map((project, i) => (
                        <Project key={i} project={project} />
                    ))}
            </div>
        </div>
    )
}

export default Projects