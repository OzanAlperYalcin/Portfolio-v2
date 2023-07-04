import TechsContainer from "@/containers/admin/techs"
import { fetchTechs, searchTechs } from "@/services/techs"

export default async function TechsPage({ searchParams }) {
    const { search } = searchParams
    const techs = !search ? await fetchTechs() : await searchTechs(search)
    
    return (
        <TechsContainer data={techs} title={'TEKNOLOJİLER'} />
    )
}