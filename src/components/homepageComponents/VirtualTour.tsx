'use client'
import React from 'react'
import PanoramView from './PanoramView/PanoramView'
import { VirtualTurACF } from '@/types/acf'
import TestMap from '@/utils/components/Map/TestMap'
import MapComponent from '@/utils/components/Map'

function VirtualTour({ props }: { props: VirtualTurACF }) {
    return (
        <div className='mt-16 default:w-[1440px] px-5 w-full mx-auto'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='text-5xl text-turquoise uppercase w-full sm:text-center' id={props.content_id.split('#')[1]}>{props.title}</h2>
                <p className='text-3xl sm:text-5xl text-blue sm:w-[75%] text-left sm:text-center mb-16'>
                    {props.sub_title}
                </p>
                <div className='w-full h-[600px]'>
                    {/* <PanoramView /> */}
                    <TestMap />
                </div>
            </div>
        </div>
    )
}

export default VirtualTour