'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import articlePhoto from '../../../public/images/article_photo.png'
import Link from 'next/link'
import { SitesACF } from '@/types/acf'

function ImageComponent({ props }: { props: SitesACF[] }) {

    const [firstIsHovered, setFirstIsHovered] = useState(false)
    const [secondIsHovered, setSecondIsHovered] = useState(false)
    const [thirdIsHovered, setThirdIsHovered] = useState(false)


    return (
        <div className='w-full flex flex-none flex-col md:flex-row gap-2 max-w-[1440px] relative md:h-96 overflow-hidden default:h-[874px]'>
            <Link href={props[0].link.link_url}
                onMouseEnter={() => setFirstIsHovered(true)}
                onMouseLeave={() => setFirstIsHovered(false)}
                className={`relative ${firstIsHovered ? 'flex-[10]' : 'flex-1'} transition-all cursor-pointer ease-in-out duration-1000`}
            >
                <Image src={props[0].image} width={1450} height={874} alt={''} className='h-full object-cover' />
                <span
                    className={(secondIsHovered || thirdIsHovered) ? 'absolute z-10 bottom-0 h-[20%] sm:h-[10%] w-full bg-blue/40 flex flex-row justify-between items-center px-8 transition-opacity opacity-0 duration-300' : 'absolute z-10 bottom-0 h-[20%] sm:h-[10%] w-full bg-blue/40 flex flex-row justify-between opacity-100 transition-opacity duration-300 delay-75 items-center px-2'}
                >
                    <span className='text-white text-base xl:text-xl'>{props[0].link.link_text}</span>
                    <span>
                        <svg width="20" height="16" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6 13.593L18.35 24.8391C18.1723 25.0047 17.9372 25.0948 17.6943 25.0905C17.4515 25.0862 17.2197 24.9879 17.048 24.8162C16.8762 24.6445 16.7778 24.4128 16.7735 24.17C16.7692 23.9272 16.8594 23.6922 17.025 23.5146L26.6734 13.8679H1.4375C1.18886 13.8679 0.950402 13.7691 0.774587 13.5934C0.598772 13.4176 0.5 13.1793 0.5 12.9307C0.5 12.6821 0.598772 12.4438 0.774587 12.268C0.950402 12.0923 1.18886 11.9935 1.4375 11.9935H26.6734L17.025 2.34683C16.8594 2.16917 16.7692 1.93419 16.7735 1.6914C16.7778 1.44861 16.8762 1.21695 17.048 1.04525C17.2197 0.873538 17.4515 0.775182 17.6943 0.770898C17.9372 0.766614 18.1723 0.856737 18.35 1.02228L29.6 12.2684C29.7756 12.4442 29.8742 12.6824 29.8742 12.9307C29.8742 13.1791 29.7756 13.4173 29.6 13.593Z" fill="white" />
                        </svg>
                    </span>
                </span>
            </Link>
            <Link href={props[1].link.link_url}
                onMouseEnter={() => setSecondIsHovered(true)}
                onMouseLeave={() => setSecondIsHovered(false)}
                className={`relative ${secondIsHovered ? 'flex-[10]' : 'flex-1'} transition-all cursor-pointer ease-in-out duration-1000`}
            >
                <Image src={props[1].image} width={1450} height={874} alt={''} className='h-full object-cover' />
                <span
                    className={(firstIsHovered || thirdIsHovered) ? 'absolute z-10 bottom-0 h-[20%] sm:h-[10%] w-full bg-blue/40 flex flex-row justify-between items-center px-8 transition-opacity opacity-0 duration-300' : 'absolute z-10 bottom-0 h-[20%] sm:h-[10%] w-full bg-blue/40 flex flex-row justify-between opacity-100 transition-opacity duration-300 delay-75 items-center px-2'}
                >
                    <span className='text-white text-base xl:text-xl'>{props[1].link.link_text}</span>
                    <span>
                        <svg width="20" height="16" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6 13.593L18.35 24.8391C18.1723 25.0047 17.9372 25.0948 17.6943 25.0905C17.4515 25.0862 17.2197 24.9879 17.048 24.8162C16.8762 24.6445 16.7778 24.4128 16.7735 24.17C16.7692 23.9272 16.8594 23.6922 17.025 23.5146L26.6734 13.8679H1.4375C1.18886 13.8679 0.950402 13.7691 0.774587 13.5934C0.598772 13.4176 0.5 13.1793 0.5 12.9307C0.5 12.6821 0.598772 12.4438 0.774587 12.268C0.950402 12.0923 1.18886 11.9935 1.4375 11.9935H26.6734L17.025 2.34683C16.8594 2.16917 16.7692 1.93419 16.7735 1.6914C16.7778 1.44861 16.8762 1.21695 17.048 1.04525C17.2197 0.873538 17.4515 0.775182 17.6943 0.770898C17.9372 0.766614 18.1723 0.856737 18.35 1.02228L29.6 12.2684C29.7756 12.4442 29.8742 12.6824 29.8742 12.9307C29.8742 13.1791 29.7756 13.4173 29.6 13.593Z" fill="white" />
                        </svg>
                    </span>
                </span>
            </Link>
            <Link href={props[2].link.link_url}
                onMouseEnter={() => setThirdIsHovered(true)}
                onMouseLeave={() => setThirdIsHovered(false)}
                className={`relative ${thirdIsHovered ? 'flex-[10]' : 'flex-1'} transition-all cursor-pointer ease-in-out duration-1000`}
            >
                <Image src={props[2].image} width={1600} height={874} alt={''} className='h-full object-cover' />
                <span
                    className={(firstIsHovered || secondIsHovered) ? 'absolute z-10 bottom-0 h-[20%] sm:h-[10%] w-full bg-blue/40 flex flex-row justify-between items-center px-8 transition-opacity opacity-0 duration-300' : 'absolute z-10 bottom-0 h-[20%] sm:h-[10%] w-full bg-blue/40 flex flex-row justify-between opacity-100 transition-opacity duration-300 delay-75 items-center px-2'}
                >
                    <span className='text-white text-base xl:text-xl'>{props[2].link.link_text}</span>
                    <span>
                        <svg width="20" height="16" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6 13.593L18.35 24.8391C18.1723 25.0047 17.9372 25.0948 17.6943 25.0905C17.4515 25.0862 17.2197 24.9879 17.048 24.8162C16.8762 24.6445 16.7778 24.4128 16.7735 24.17C16.7692 23.9272 16.8594 23.6922 17.025 23.5146L26.6734 13.8679H1.4375C1.18886 13.8679 0.950402 13.7691 0.774587 13.5934C0.598772 13.4176 0.5 13.1793 0.5 12.9307C0.5 12.6821 0.598772 12.4438 0.774587 12.268C0.950402 12.0923 1.18886 11.9935 1.4375 11.9935H26.6734L17.025 2.34683C16.8594 2.16917 16.7692 1.93419 16.7735 1.6914C16.7778 1.44861 16.8762 1.21695 17.048 1.04525C17.2197 0.873538 17.4515 0.775182 17.6943 0.770898C17.9372 0.766614 18.1723 0.856737 18.35 1.02228L29.6 12.2684C29.7756 12.4442 29.8742 12.6824 29.8742 12.9307C29.8742 13.1791 29.7756 13.4173 29.6 13.593Z" fill="white" />
                        </svg>
                    </span>
                </span>
            </Link>
        </div>
    )
}

export default ImageComponent