import Navbar from "@/components/admin/navbar"
import TechsTable from './TechsTable'
import Stats from "@/components/admin/stats"

function TechsContainer({ data, title }) {
    const { techs, totalCount } = data

    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full grid gap-5 bg-white p-10 shadow rounded'>
                <Stats totalCount={totalCount} path={{ name: 'YENİ TEKNOLOJİ', url: '/dashboard/tech' }} />
                <TechsTable techs={techs.sort((a, b) => a.sort - b.sort)} />
            </div>
        </div>
    )
}

export default TechsContainer