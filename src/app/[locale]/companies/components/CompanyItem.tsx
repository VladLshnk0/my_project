'use client'
import { CompanyPostsACF } from '@/types/CompaniesACF'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface iProps {
    company: CompanyPostsACF
    paginate: (direction: number) => void
    direction: number
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function CompanyItem({ company, paginate, direction }: iProps) {
    return (
            <Link href={`${company.acf.link.link_url}`}>
                <span className='block h-[347px] sm:h-[436px] max-w-[436px] w-full border-2 border-gray cursor-pointer'>
                    <span className='block relative overflow-hidden h-[168px] sm:h-1/2'>
                        <Image src={company.acf.background_image} width={720} height={400} alt='company' className='object-cover w-full ' />
                        {company.acf.logo && <Image src={company.acf.logo} width={100} height={100} alt='company' className='sm:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />}
                    </span>
                    <span className='w-full h-1/2 p-4 flex flex-col justify-between'>
                        <span className='text-2xl text-blue' id={company.acf.content_id.split('#')[1]}>{company.acf.title}</span>
                        <span className='flex flex-row gap-2 mb-0 sm:mb-12 xl:mb-4 items-center font-medium hover:gap-4 transition-all duration-300'>
                            <span className='text-xl text-blue'>{company.acf.link.link_text}</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                                </svg>
                        </span>
                    </span>
                </span>
            </Link>
    )
}

export default CompanyItem