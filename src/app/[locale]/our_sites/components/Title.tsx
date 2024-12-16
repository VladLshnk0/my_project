import { HeroBlock } from '@/types/OurSitesACF'
import Image from 'next/image'
import React from 'react'

function Title({ props }: { props: HeroBlock }) {
    return (
        <div className='w-full h-[404px] flex items-center justify-center overflow-hidden'>
            <Image
                width={3600}
                height={1000}
                src={props.image}
                alt="hero"
                className='absolute object-cover w-full h-[404px] -z-10'
            />
            <div className='default:w-[1440px] lg:px-10 px-5 flex flex-col'>
                <h2 className='text-white text-3xl sm:text-6xl' id={props.content_id.split('#')[1]}>
                    {props.title.split('/n').map((line: string, index: number) => (
                        <div key={index}>{line}</div>
                    ))}
                </h2>
            </div>
        </div>
    )
}

export default Title