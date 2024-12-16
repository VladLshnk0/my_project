import React from 'react'

function Title({title}: {title: string}) {
  return (
    <div className='flex items-center justify-center h-56 bg-blue w-full'>
        <h2 className='text-white text-7xl uppercase'>{title}</h2>
    </div>
  )
}

export default Title