import React from 'react'
import Image from 'next/image'
import { CompanyPostsACF } from '@/types/CompaniesACF'



function Title({ props }: { props: CompanyPostsACF }) {


    return (
        <div className='w-full h-48 sm:h-[669px] flex items-end sm:justify-center overflow-hidden'>
            <Image
                width={3600}
                height={1000}
                src={props.acf.background_image}
                alt="hero"
                className='absolute object-cover w-full sm:h-[669px] -z-10'
            />
            <div className='default:w-[1440px] px-5 w-[50%] sm:w-full flex flex-col gap-4'>
                {props.acf.logo &&
                    <Image
                        width={200}
                        height={200}
                        src={props.acf.logo}
                        alt="logo"
                        className='w-2/3 mt-4 sm:w-[200px] sm:mt-0'
                    />
                }
                <h2 className='text-white text-3xl sm:text-6xl' id={props.acf.content_id.split('#')[1]}>
                    {props.acf.title}
                </h2>
            </div>
        </div>
    )
}

export default Title
