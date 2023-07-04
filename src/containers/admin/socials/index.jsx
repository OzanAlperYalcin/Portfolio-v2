import Navbar from "@/components/admin/navbar"
import SocialsTable from './SocialsTable'
import Stats from "@/components/admin/stats"

function SocialsContainer({ data, title }) {
    const { socials, totalCount } = data

    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full grid gap-5 bg-white p-10 shadow rounded'>
                <Stats totalCount={totalCount} path={{ name: 'YENİ SOSYAL MEDYA', url: '/dashboard/social' }} />
                <SocialsTable socials={socials.sort((a, b) => a.sort - b.sort)} />
            </div>
        </div>
    )
}

export default SocialsContainer