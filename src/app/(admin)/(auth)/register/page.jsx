import Link from "next/link"
export default function Register() {
    return (
        <div className="grid justify-center text-center gap-5">
            <h3 className="text-red-500 font-semibold">Kayıtlar Kapalıdır..</h3>
            <Link href={'/login'}>Giriş Yap!</Link>
        </div>
    )
}