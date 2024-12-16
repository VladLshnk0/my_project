'use client'

import { PostACF, PostsACF } from '@/types/acf'
import React, { useState } from 'react'
import Image from 'next/image'
import CompanyPopup from './CompanyPopup'
import ClickAwayListener from 'react-click-away-listener'


function Posts({ props }: { props: PostsACF[] }) {

    const [isOpened, setIsOpened] = useState(false)
    const [actualPostIndex, setActualPostIndex] = useState(0)

    function handleOpen(index: number) {
        setIsOpened(true)
        setActualPostIndex(index)
    }

    return (
        <div className='default:w-[1440px] sm:px-5 mt-8 flex flex-col sm:grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-y-16'>
            {/* {isOpened &&
                <div
                    className='fixed w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center'
                >
                        <CompanyPopup post={props.acf.posts[actualPostIndex]} close={() => setIsOpened(false)} />
                        
                </div>
            } */}
            {props.map((post: PostsACF, index: number) => (
                <div key={index} className='w-full sm:h-[480px] flex flex-col gap-4 cursor-pointer' onClick={() => handleOpen(index)}>
                    <Image src={post.acf.image} width={720} height={400} alt='post' className='overflow-hidden h-[252px] sm:h-[400px]' />
                    <h2 className='text-2xl text-blue sm:w-[60%]' id={post.acf.content_id.split('#')[1]}>{post.acf.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Posts