import React from 'react'
import Social from '../social'

async function Footer({ user }) {
  return (
    <footer className='mt-auto border-t border-zinc-700'>
      <div className='h-10 flex items-center justify-between px-5'>
        <div className='text-xs text-zinc-300 tracking-tight'>{user.username} - {user.title}</div>
        <Social footer={true} />
      </div>
    </footer>
  )
}

export default Footer