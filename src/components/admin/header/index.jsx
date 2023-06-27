import Left from "./Left"
import Right from "./Right"
import { useAuth } from '@/hooks/useAuth'
import { fetchUser } from '@/services/users'

async function Header() {
  const { id } = await useAuth()
  const { user } = await fetchUser(id)
  return (
    <header>
      <div className="h-14">
        <div className="fixed left-0 right-0 h-14 bg-black shadow">
          <div className="h-full flex justify-between items-center px-5">
            <Left user={user} />
            <Right user={user} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header