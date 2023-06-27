import SocialsContainer from "@/containers/admin/socials"
import { fetchSocials, searchSocials } from "@/services/socials"

export default async function SocialsPage({ searchParams }) {
    const { search } = searchParams
    const socials = !search ? await fetchSocials() : await searchSocials(search)
    
    return (
        <SocialsContainer data={socials} />
    )
}