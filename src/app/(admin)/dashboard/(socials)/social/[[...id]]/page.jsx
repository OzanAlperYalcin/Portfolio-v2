import SocialForm from "@/components/admin/socials/SocialForm"
import FormContainer from "@/containers/admin/form"
import { fetchSocials, fetchSocial } from "@/services/socials"

export default async function SocialPage({ params }) {
    
    const promises = [
        fetchSocials(),
        fetchSocial(params.id)
    ]

    const [ socials, social ] = await Promise.all(promises)

    return (
        <FormContainer title={'SOSYAL MEDYA'}>
            <SocialForm data={social?.social} totalCount={socials.totalCount} />
        </FormContainer>
    )
}