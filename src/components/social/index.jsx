import Link from 'next/link'
import { socialIcons } from '@/utils/socials'
import { fetchSocials } from '@/services/socials'

async function Social({ footer = false }) {
    const getSocials = await fetchSocials()
    const { socials } = getSocials

    const renderSocialIcon = (social, i) => {
        const getIcon = socialIcons.find(s => s?.name === social.title)

        if (getIcon && social.link) {
            const { Icon, hover } = getIcon
            return (
                <Link key={i} href={social.link}
                    className={`${!footer ? 'border border-zinc-400 rounded-full p-2.5' : 'p-1'} transition-all ${hover}`}>
                    <Icon size={!footer ? 20 : 14} />
                </Link>
            )
        }

        return null
    }

    return (
        <div className='flex items-center justify-end gap-5'>
            {socials.map((social, i) => (
                renderSocialIcon(social, i)
            ))}
        </div>
    )
}

export default Social