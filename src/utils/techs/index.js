import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiAmazonaws,
    SiDocker,
    SiFirebase,
    SiGraphql
} from 'react-icons/si'

export const techsIcon = [
    { name: 'html', Icon: SiHtml5, color: 'text-orange-500', border: 'border-orange-500', background: 'bg-orange-500/10', hover: 'hover:text-orange-500 hover:border-orange-500' },
    { name: 'css', Icon: SiCss3, color: 'text-blue-500', border: 'border-blue-500', background: 'bg-blue-500/10', hover: 'hover:text-pink-500 hover:border-pink-500' },
    { name: 'javascript', Icon: SiJavascript, color: 'text-yellow-400', border: 'border-yellow-400', background: 'bg-yellow-400/10', hover: 'hover:text-yellow-400 hover:border-yellow-400' },
    { name: 'react', Icon: SiReact, color: 'text-sky-400', border: 'border-sky-400', background: 'bg-sky-400/10', hover: 'hover:text-sky-400 hover:border-zinc-500' },
    { name: 'nextjs', Icon: SiNextdotjs, color: 'text-black', border: 'border-black', background: 'bg-black/10', hover: 'hover:text-black hover:border-black' },
    { name: 'redux', Icon: SiRedux, color: 'text-purple-600', border: 'border-purple-600', background: 'bg-purple-600/10', hover: 'hover:text-purple-600 hover:border-purple-600' },
    { name: 'tailwind', Icon: SiTailwindcss, color: 'text-cyan-500', border: 'border-cyan-500', background: 'bg-cyan-500/10', hover: 'hover:text-cyan-500 hover:border-cyan-500' },
    { name: 'bootstrap', Icon: SiBootstrap, color: 'text-purple-700', border: 'border-purple-700', background: 'bg-purple-700/10', hover: 'hover:text-purple-700 hover:border-purple-700' },
    { name: 'git', Icon: SiGit, color: 'text-orange-600', border: 'border-orange-600', background: 'bg-orange-600/10', hover: 'hover:text-orange-600 hover:border-orange-600' },
    { name: 'nodejs', Icon: SiNodedotjs, color: 'text-green-500', border: 'border-green-500', background: 'bg-green-500/10', hover: 'hover:text-green-500 hover:border-green-500' },
    { name: 'express', Icon: SiExpress, color: 'text-black', border: 'border-black', background: 'bg-black/10', hover: 'hover:text-black hover:border-black' },
    { name: 'mongodb', Icon: SiMongodb, color: 'text-green-700', border: 'border-green-700', background: 'bg-green-700/10', hover: 'hover:text-green-700 hover:border-green-700' },
    { name: 'mongoose', Icon: SiMongoose, color: 'text-red-700', border: 'border-red-700', background: 'bg-red-700/10', hover: 'hover:text-red-700 hover:border-red-700' },
    { name: 'aws', Icon: SiAmazonaws, color: 'text-black', border: 'border-black', background: 'bg-black/10', hover: 'hover:text-black hover:border-black' },
    { name: 'docker', Icon: SiDocker, color: 'text-sky-700', border: 'border-sky-700', background: 'bg-sky-700/10', hover: 'hover:text-sky-700 hover:border-sky-700' },
    { name: 'firebase', Icon: SiFirebase, color: 'text-yellow-500', border: 'border-yellow-500', background: 'bg-yellow-500/10', hover: 'hover:text-yellow-500 hover:border-yellow-500' },
    { name: 'graphql', Icon: SiGraphql, color: 'text-purple-800', border: 'border-purple-800', background: 'bg-purple-800/10', hover: 'hover:text-purple-800 hover:border-purple-800' },

]

export const getTechIcon = (tech) => {
    const { Icon, color } = techsIcon.find(t => t.name === tech)
    return (
        <div className='grid justify-center'>
            <Icon className={color} size={20} />
        </div>
    )
}

export const techSelect = [
    { name: 'HTML', value: 'html' },
    { name: 'CSS', value: 'css' },
    { name: 'Bootstrap', value: 'bootstrap' },
    { name: 'Tailwind', value: 'tailwind' },
    { name: 'Javascript', value: 'javascript' },
    { name: 'React', value: 'react' },
    { name: 'Next JS', value: 'nextjs' },
    { name: 'Git', value: 'git' },
    { name: 'Node.JS', value: 'nodejs' },
    { name: 'Express', value: 'express' },
    { name: 'Mongo DB', value: 'mongodb' },
    { name: 'Mongoose', value: 'mongoose' },
    { name: 'AWS', value: 'aws' },
    { name: 'Docker', value: 'docker' },
    { name: 'Firebase', value: 'firebase' },
    { name: 'GraphQL', value: 'graphql' }
]
