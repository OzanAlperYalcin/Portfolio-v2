import FormContainer from "@/containers/admin/form";
import UserForm from "@/components/admin/users/UserForm";
import { fetchUser } from "@/services/users";
import { headers } from "next/headers";

export default async function UserPage({ params }) {
    const { id } = params
    const headerInstance = headers()
    const authorization = headerInstance.get('authorization')
    const user = await fetchUser(id, authorization)

    return (
        <FormContainer title={'KULLANICI BİLGİLERİM'}>
            <UserForm data={user?.user} />
        </FormContainer>
    )
}