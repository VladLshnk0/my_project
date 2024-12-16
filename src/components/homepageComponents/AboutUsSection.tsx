'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AboutBlockACF } from '@/types/acf'


function AboutUsSection({ props }: { props: AboutBlockACF }) {

    const [isHovered, setIsHovered] = useState(false)


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='w-full bg-blue sm:h-[560px] relative z-20 my-16 flex flex-row justify-center max-w-[1440px]'
        >
            <div className='flex flex-col md:flex-row h-full'>
                <div className='w-full h-1/2 md:h-full md:w-1/2 overflow-hidden'>
                    <Image
                        src={props.image}
                        alt={''}
                        width={1000}
                        height={1000}
                        className={isHovered ? 'scale-100 h-full object-cover transition-all duration-[6000ms] delay-75' : ' scale-125 h-full object-cover transition-all duration-[6000ms] delay-75'}
                    />
                </div>
                <div className='w-full h-1/2 md:h-full md:w-1/2 flex flex-col pt-4 px-4 md:pt-20 md:px-16 pb-4 sm:pb-0'>
                    <h2 className='text-white text-[52px] font-medium' id={props.content_id.split('#')[1]}>{props.title}</h2>
                    <p className='text-white text-lg font-light mt-2 md:mt-16'>{props.description}</p>
                    <Link
                        className='w-48 border flex items-center justify-center py-2 mt-8 text-white border-turquoise bg-turquoise transition-colors duration-500 hover:bg-white hover:text-blue hover:border-white'
                        href={props.link.link_url}
                    >
                        <span className='text-xl'>{props.link.link_text}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection