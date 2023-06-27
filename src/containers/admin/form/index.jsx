import Navbar from "@/components/admin/navbar"

function FormContainer({ title, children }) {
    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full lg:w-1/2 bg-white p-10 shadow rounded'>
                {children}
            </div>
        </div>
    )
}

export default FormContainer