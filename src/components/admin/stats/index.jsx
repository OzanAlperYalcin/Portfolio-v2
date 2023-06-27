import Link from "next/link"
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { FaDiaspora } from 'react-icons/fa'

function Stats({ totalCount, path }) {
    const { url, name } = path
    const data = [
        { key: 'Toplam Doküman', value: totalCount, icon: HiOutlineDocumentReport },
    ]

    return (
        <div className="flex justify-between gap-5">
            <div className="flex justify-center gap-5">
                {data.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 w-28 border border-zinc-300 rounded p-1 text-xs">
                        <item.icon size={24} />
                        <p>{item.key}</p>
                        <p className="text-green-500 font-bold">{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center">
            <Link href={url} className="rounded-full bg-green-500 text-white p-1" title={name}>
                <FaDiaspora />
            </Link>
            </div>
        </div>
    )
}

export default Stats