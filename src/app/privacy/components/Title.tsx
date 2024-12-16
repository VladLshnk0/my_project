function Title({title}: {title: string}) {
  return (
    <div className='flex items-center justify-center bg-blue w-full'>
        <h2 className='text-4xl uppercase'>{title}</h2>
    </div>
  )
}

export default Title