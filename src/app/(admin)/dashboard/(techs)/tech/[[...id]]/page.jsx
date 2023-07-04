import TechForm from "@/components/admin/techs/TechForm"
import FormContainer from "@/containers/admin/form"
import { fetchTech, fetchTechs } from "@/services/techs"

export default async function TechPage({ params }) {
    const promises = [
        fetchTech(params.id),
        fetchTechs()
    ]

    const [tech, techs] = await Promise.all(promises)

    return (
        <FormContainer title={'TEKNOLOJİ'}>
            <TechForm data={tech?.tech} totalCount={techs.totalCount}/>
        </FormContainer>
    )
}