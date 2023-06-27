
function MobileTable({ head, body }) {
  return (
    <div>
      {body.map((items, index) => (
        <div key={index} className='bg-zinc-100 border border-zinc-300 rounded mb-5 p-2.5'>
          {items.map((item, i) => (
            <div key={i} className='flex justify-between text-sm'>
              <div>
                <p className='font-bold'>{head[i].name}</p>
              </div>
              <div>
                {item}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MobileTable