
function DesktopTable({ head, body }) {
    if (!body) return 'Gösterilecek veri bulunamadı.'
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-black text-white">
                    {head.map((item, i) => (
                        <th key={i} width={item?.width} className="py-1"> {item.name} </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {body.map((items, index) => (
                    <tr key={index} className="border-b last:border-none border-zinc-300 hover:bg-zinc-100 transition-all">
                        {items.map((item, i) => (
                            <td key={i} className="text-center py-1">{item}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DesktopTable