'use client'
import { CompanyPostsACF } from '@/types/CompaniesACF'
import ArrowLeftBlue from '@/utils/components/ArrowLeftBlue'
import ArrowRightBlue from '@/utils/components/ArrowRightBlue'
import React, { useState } from 'react'

import Image from 'next/image'

export const Linkify = ({ text, index }: {text: string, index?: number}) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
  
    // Replace URLs with anchor tags
    const linkedText = text.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank">${url}</a>`;
    });
  
    // Render the linked text as HTML
    return <div id={`benefits_${index && index + 1}`} dangerouslySetInnerHTML={{ __html: linkedText }} />;
  };

function Info({ props }: { props: CompanyPostsACF}) {

    const [actualImageIndex, setActualImageIndex] = useState(0)

    function handleNext() {
        if (actualImageIndex < props.acf.image_array.length - 1) {
            setActualImageIndex(actualImageIndex + 1)
        } else {
            setActualImageIndex(0)
        }
    }

    function handlePrev() {
        if (actualImageIndex > 0) {
            setActualImageIndex(actualImageIndex - 1)
        } else {
            setActualImageIndex(props.acf.image_array.length - 1)
        }
    }

    return (
        <div className='default:w-[1440px] px-5 flex flex-col justify-center items-center mt-16'>
            <div className='w-full flex flex-row justify-between'>
                <h2 className='text-5xl text-blue' id={props.acf.content_id.split('#')[1]}>{props.acf.description_title}</h2>
                <div className='hidden sm:flex flex-row gap-4'>
                    <button onClick={handlePrev}>
                        <ArrowLeftBlue />
                    </button>
                    <button onClick={handleNext}>
                        <ArrowRightBlue />
                    </button>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row mt-4 gap-16 mb-32'>
                <div className='sm:w-1/2'>
                    <div>
                        {/* {props.acf.description.split('http').map((item, key) => {
                            return <p key={key} className='text-xl text-blue'>{item}</p>
                        }
                        )} */}
                    </div>
                    <div className='text-xl text-blue'>
                        <Linkify text={props.acf.description} index={0} />
                    </div>
                </div>
                <div className='sm:w-1/2'>
                    <div className='sm:hidden flex flex-row justify-between mb-8'>
                        <button onClick={handlePrev}>
                            <ArrowLeftBlue />
                        </button>
                        <button onClick={handleNext}>
                            <ArrowRightBlue />
                        </button>
                    </div>
                    <Image
                        width={500}
                        height={500}
                        src={props.acf.image_array[actualImageIndex].image}
                        alt="info"
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Info