import Nav from './Nav'
import Logo from './Logo'

function Header({ user }) {

  return (
    <header className='container mx-auto px-5'>
      <div className='h-40 flex justify-between items-center border-b border-zinc-700'>
        <Logo user={user} />
        <Nav />
      </div>
    </header>
  )
}

export default Header