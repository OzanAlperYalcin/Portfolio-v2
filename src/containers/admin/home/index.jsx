import Navbar from "@/components/admin/navbar"

function HomeContainer({ title }) {
    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full grid gap-5 bg-white p-10 shadow rounded'>
                Yapımda.
            </div>
        </div>
    )
}

export default HomeContainer