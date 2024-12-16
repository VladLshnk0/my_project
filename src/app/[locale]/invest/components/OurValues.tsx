'use client'
import { useState } from 'react'

import Image from 'next/image'
import { ValuesBlockACF } from '@/types/acf'
import ArrowRightDownBlue from '@/utils/components/ArrowRightDownBlue'
import ArrowDownTurquoise from '@/utils/components/ArrowDownTurquoise'
import { Linkify } from '../../companies/[slug]/components/Info'

function OurValues({ props }: { props: ValuesBlockACF }) {
    const valuesList = props.lists
    const [activeValue, setActiveValue] = useState(0)

    function handleMouseEnter(index: number) {
        setActiveValue(index)
    }

    return (
        <div className='max-w-[1440px] pl-6 pr-4 flex flex-col gap-4 md:flex-row'>
            <div className='basis-full md:basis-1/2 flex flex-col gap-8 md:gap-16'>
                <div>
                    <h2 className='text-3xl md:text-5xl text-turquoise mt-8 md:mt-16' id={props.content_id.split('#')[1]}>{props.title}</h2>
                    <h3 className='text-blue text-2xl md:text-3xl'>{props.sub_title}</h3>
                </div>
                <div className='w-full divide-y-2 divide-gray flex flex-col gap-4 border-b-2 border-gray pb-4'>
                    {valuesList.map((value, index) => (
                        <div key={index} className='flex flex-col cursor-pointer group' onClick={() => handleMouseEnter(index)}>
                            <div className='flex flex-row justify-between items-center  mt-4'>
                                <h3 className='text-blue text-2xl' id={value.content_id.split('#')[1]}>{value.title}</h3>
                                <div className='pr-4 group-hover:scale-110 transition-all delay-100 duration-300'>
                                    {activeValue == index ?
                                        <div className='transition-all duration-500 rotate-180'>
                                            <ArrowDownTurquoise />
                                        </div>
                                        :
                                        <div className='transition-all duration-500'>
                                            <ArrowDownTurquoise />
                                        </div>
                                    }
                                </div>
                            </div>
                            {activeValue == index && <div className='mt-2 text-blue text-base font-light'>
                                <Linkify text={value.description} index={index}></Linkify>
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className='basis-full md:basis-1/2 relative'>
                <Image src={valuesList[activeValue].image} width={1000} height={800} alt={'Foto'} className={'object-cover h-[365px] md:h-[800px] transition-all duration-500 delay-100 ease-in-out'} />
            </div>
        </div>
    )
}

export default OurValues