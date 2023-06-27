
function Left({ user }) {

    return (
        <div className='text-white text-sm font-bold tracking-wider'>
            Hoşgeldin, {user?.username}
        </div>
    )
}

export default Left