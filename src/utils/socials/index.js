import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaTwitter, FaTwitch } from 'react-icons/fa'

export const socialIcons = [
    { name: 'facebook', Icon: FaFacebook, color: 'text-blue-700', hover: 'hover:text-sky-700 hover:border-sky-700' },
    { name: 'instagram', Icon: FaInstagram, color: 'text-pink-500', hover: 'hover:text-pink-500 hover:border-pink-500' },
    { name: 'linkedin', Icon: FaLinkedin, color: 'text-blue-400', hover: 'hover:text-blue-400 hover:border-blue-400' },
    { name: 'github', Icon: FaGithub, color: 'text-zinc-500', hover: 'hover:text-zinc-500 hover:border-zinc-500' },
    { name: 'youtube', Icon: FaYoutube, color: 'text-red-600', hover: 'hover:text-red-600 hover:border-red-600' },
    { name: 'tiktok', Icon: FaTiktok, color: 'text-sky-500', hover: 'hover:text-sky-500 hover:border-sky-500' },
    { name: 'twitter', Icon: FaTwitter, color: 'text-sky-500', hover: 'hover:text-sky-500 hover:border-sky-500' },
    { name: 'twitch', Icon: FaTwitch, color: 'text-purple-700', hover: 'hover:text-purple-700 hover:border-purple-700' },
]

export const getSocialIcon = (social) => {
    const { Icon, color } = socialIcons.find(s => s.name === social)
    return (
        <div className='grid justify-center'>
            <Icon className={color} size={20}/>
        </div>
    )
}

export const socialSelect = [
    { name:'Facebook', value:'facebook' },
    { name:'Instagram', value:'instagram' },
    { name:'Twitter', value:'twitter' },
    { name:'Linkedin', value:'linkedin' },
    { name:'Twitch', value:'twitch' },
    { name:'Github', value:'github' },
    { name:'Youtube', value:'youtube' },
    { name:'Tiktok', value:'tiktok' },
]
