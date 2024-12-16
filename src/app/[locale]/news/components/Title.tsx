import React from 'react'
import Image from 'next/image'
import { HeroBlockNewsACF, NewsPageACF } from '@/types/NewsPageACF'

function Title({props}: {props: HeroBlockNewsACF}) {
    return (
        <div className='w-full h-[404px] flex items-center sm:justify-center overflow-hidden'>
            <Image
                width={3600}
                height={1000}
                src={props.image}
                alt="hero"
                className='absolute object-cover w-full h-[404px] -z-10'
            />
            <div className='default:max-w-[1440px] w-full px-5 md:px-16 2xl:px-5 flex flex-col'>
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