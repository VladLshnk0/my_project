import { TitleBlockACF } from '@/types/acf'
import React, { useState } from 'react'


function TitleSection({ props }: { props: TitleBlockACF }) {



    return (
        <div className='container w-full max-w-[1440px] px-4'>
            <div className='my-16 mx-2 xl:mx-0'>
                <h2 className='text-5xl text-left text-blue' id={props.content_id.split('#')[1]}>{props.title}</h2>
                    <div className='flex flex-col gap-4 justify-between mt-8 md:w-[60%]'>
                        {props.description.split('\n').map((line: string, index: number) => (
                            <p key={index} className='text-blue text-2xl'>{line}</p>
                        ))}
                    {/* <button className='w-48 h-12 border-2 border-blue text-blue flex items-center justify-center transition-colors duration-200 hover:bg-blue hover:text-white'>
                        {props.text_on_button}
                    </button> */}
                </div>
            </div>

        </div>
    )
}

export default TitleSection