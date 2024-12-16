import { HeroBlockContactUsACF } from '@/types/ContactUsACF'
import React from 'react'
import Image from 'next/image'

function Background({ props }: { props: HeroBlockContactUsACF }) {
    return (
        <div className='w-full h-[404px] flex items-center justify-center overflow-hidden'>
            <Image
                width={3600}
                height={1000}
                src={props.bg_image}
                alt="hero"
                className='absolute object-cover w-full h-[404px] -z-10'
            />
            <div className='w-[1440px] flex flex-col'>
                <h2 className='text-white text-3xl sm:text-6xl mx-4 xl:mx-0' id={props.content_id?.split('#')[1]}>
                    {props.title.split('/n').map((line: string, index: number) => (
                        <div key={index}>{line}</div>
                    ))}
                </h2>
            </div>
        </div>
    )
}

export default Background