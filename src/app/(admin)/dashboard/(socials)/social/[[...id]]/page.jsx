import SocialForm from "@/components/admin/socials/SocialForm"
import FormContainer from "@/containers/admin/form"
import { fetchSocial } from "@/services/socials"

export default async function SocialPage({ params }) {
    const social = await fetchSocial(params.id)

    return (
        <FormContainer title={'SOSYAL MEDYA'}>
            <SocialForm data={social?.social} />
        </FormContainer>
    )
}