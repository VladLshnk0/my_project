import React from 'react'
import Image from 'next/image'
import { HeroCompaniesBlockACF } from '@/types/CompaniesACF'

function Title({ props }: { props: HeroCompaniesBlockACF }) {

    const title = props.title

    return (
        <div className='w-full h-[404px] flex items-center justify-center overflow-hidden'>
            <Image
                width={3600}
                height={1000}
                src={props.image}
                alt="hero"
                className='absolute object-cover w-full h-[404px] -z-10'
            />
            <div className='default:w-[1440px] px-5 flex flex-col'>
                <h2 className='text-white text-3xl sm:text-6xl' id={props.content_id.split('#')[1]}>
                    {title.split('/n').map((line: string, index: number) => (
                        <div key={index}>{line}</div>
                    ))}
                </h2>
            </div>
        </div>
    )
}

export default Title