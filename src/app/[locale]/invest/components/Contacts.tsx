import React from 'react'
import Image from 'next/image'
import { ContactBlockInvestACF } from '@/types/acf'
import Link from 'next/link'

function Contacts({props} : {props: ContactBlockInvestACF}) {
  return (
    <div className='w-full h-[404px] flex items-center justify-center mt-40 md:mt-0'>
      <Image
        width={3600}
        height={1000}
        src={props.image}
        alt="hero"
        className='absolute object-cover w-full h-[404px] -z-10'
      />
      <div className='max-w-[1440px] pl-6 pr-4 w-full flex flex-col'>
        <h2 className='text-white text-4xl md:text-6xl' id={props.content_id.split('#')[1]}>
          {props.title}
        </h2>
        <p className='text-white text-2xl font-light mt-4'>
          {props.description}
        </p>
        <Link
          href={'/contact_us'}
          className='w-48 border text-xl hover:border-white hover:bg-transparent flex items-center justify-center py-2 mt-12 text-white transition-colors duration-200 bg-turquoise border-turquoise'
        >
          {props.button_text}
        </Link>
      </div>
    </div>
  )
}

export default Contacts