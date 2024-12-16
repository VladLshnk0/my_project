import React from 'react'
import SphereLeft from './SphereLeft'
import SphereRight from './SphereRight'

import Image from 'next/image'

import { CartBlock } from '@/types/OurSitesACF'
import TestMap from '@/utils/components/Map/TestMap'
import MapComponent from '@/utils/components/Map'

function MapSection({ props }: { props: CartBlock }) {
    return (
        <>
            {props.default_image &&
                <div className='w-full bg-blue h-[900px] relative flex justify-center overflow-hidden'>
                    <div className='absolute top-0 left-0'>
                        <SphereLeft />
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <SphereRight />
                    </div>
                    <div className='w-[1440px] relative z-10 py-16'>
                        <h2 className='text-white px-4 2xl:px-0 text-3xl sm:text-5xl text-center sm:text-left' id={props.content_id.split('#')[1]}>{props.title}</h2>
                        <div className='mt-16 w-[100%] h-[632px] overflow-hidden'>
                            {/* <Image
                                width={3600}
                                height={1000}
                                src={props.default_image}
                                alt="hero"
                                className='absolute object-cover w-full h-[632px] -z-10'
                            /> */}
                            <MapComponent />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MapSection