import { SynergyCompaniesBlockACF } from '@/types/CompaniesACF'
import Image from 'next/image'
import React from 'react'

function Synergy({ props }: { props: SynergyCompaniesBlockACF }) {
    return (
        <div className='default:w-[1440px] px-5 flex justify-start mt-16 sm:mb-32 gap-16'>
            <div className='sm:w-1/2'>
                <h2 className='text-blue text-3xl sm:text-5xl' id={props.content_id.split('#')[1]}>{props.title}</h2>
                <p className='text-blue text-lg sm:text-xl mt-8 mr-4'>{props.description}</p>
            </div>
            <div className='sm:w-1/2 flex justify-end'>
                <Image width={670} height={500} src={props.image} alt={'props.image.alt'} className='w-full object-cover' />
            </div>
        </div>
    )
}

export default Synergy