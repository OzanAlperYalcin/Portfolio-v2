import TechForm from "@/components/admin/techs/TechForm"
import FormContainer from "@/containers/admin/form"
import { fetchTech } from "@/services/techs"

export default async function TechPage({ params }) {
    const tech = await fetchTech(params.id)

    return (
        <FormContainer title={'TEKNOLOJİLER'}>
            <TechForm data={tech?.tech} />
        </FormContainer>
    )
}