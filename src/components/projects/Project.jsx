import { FaCode, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
function Project({ project }) {
    return (
        <div className='grid gap-5 even:card odd:card-green !mt-0 hover:scale-105 transition-all'>
            <div className='w-full flex items-center justify-between pb-1'>
                <h3 className='text'>{project.name}</h3>
                <div className='flex gap-5'>
                    {project.live &&
                        <Link href={project.live} target='_blank' >
                            <FaCode className='project-icon text-red-600' size={22} />
                        </Link>
                    }
                    {project.github &&
                        <Link href={project.github} target='_blank' >
                            <FaGithub className='project-icon text-zinc-900' size={22} />
                        </Link>
                    }
                </div>
            </div>
            <div className='grid gap-5 divide-y divide-zinc-500'>
                <p className='px-5'>{project.about}</p>
                <p className='text-xs pt-5'>
                    <strong>Kullanılan Teknolojiler:</strong> {project.techs}
                </p>
            </div>
        </div>
    )
}

export default Project