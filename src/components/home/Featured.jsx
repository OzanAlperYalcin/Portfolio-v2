import { fetchUser } from "@/services/users"
import Social from "../social"

async function Featured() {
    const { user } = await fetchUser(process.env.OWNER_ID)

    return (
        <div className='card grid gap-5'>
            <h1 className='title'>Portfolyo / Blog Sayfama<br />Hoşgeldin!</h1>
            <p className='text'>{user.about}</p>
            <Social />
        </div>
    )
}

export default Featured