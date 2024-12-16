'use client';
import { BecomeCompaniesBlockACF } from '@/types/CompaniesACF'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

function Become({ props }: { props: BecomeCompaniesBlockACF }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="w-full h-[56vh] sm:h-[45vh] md:h-[236px] lg:h-full overflow-hidden relative mt-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id={props.content_id.split("#")[1]}
        >
            <Image
                src={props.background_image}
                alt={""}
                width={3600}
                height={700}
                className={
                    isHovered
                        ? "object-none md:object-fill scale-100 h-full w-full transition-all duration-[6000ms] delay-75"
                        : "object-none md:object-fill scale-150 w-full h-full transition-all duration-[6000ms] delay-75"
                }
            />
            <div className="absolute top-0 left-0 z-10 bg-blue/50 w-full h-full flex justify-center py-8 md:py-0">
                <div className='h-full w-full max-w-[1440px] px-5 flex flex-col sm:flex-row gap-4 my-8 lg:my-32'>
                    <h2 className='text-white text-5xl sm:w-1/2' id={props.content_id.split('#')[1]}>{props.title}</h2>
                    <div className='sm:w-1/2 w-full'>
                        <p className='text-white lg:text-xl mb-8'>{props.description}</p>
                        <Link href={'/contact_us'} className='w-48 h-12 border-2 border-white hover:text-white hover:bg-transparent flex items-center justify-center text-blue bg-white transition-colors duration-300'>
                            {props.button_text}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Become