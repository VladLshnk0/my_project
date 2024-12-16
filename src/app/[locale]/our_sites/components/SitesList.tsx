'use client'
import ArrowRightDownBlue from '@/utils/components/ArrowRightDownBlue'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { PostsACF } from '@/types/acf'
import SearchIconBlue from '@/utils/components/SearchIconBlue'
import { PostsBlock } from '@/types/OurSitesACF'
import ArrowDownTurquoise from '@/utils/components/ArrowDownTurquoise'

import { getSearchSites } from '@/utils/fetchers/searchSites'


function SitesList({ posts, props }: { posts: PostsACF[], props: PostsBlock }) {

    // const sites = posts
    const [sites, setSites] = useState<PostsACF[]>(posts.length > 4 ? posts.slice(0, 4) : posts)
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetchSites()
    }, [query])

    async function fetchSites() {
        const data = await getSearchSites(query)
        setSites(data)
    }

    return (
        <>
        {sites && sites.length > 0 && <div>
            <div className='default:w-[1440px] px-5 w-full mt-20 b-16'>
                <h2 className='text-5xl font-medium text-blue'>{props.title}</h2>
                <p className='text-2xl text-blue mt-4'>{props.sub_title}</p>
            </div>
            <div className='default:w-[1440px] px-5 flex flex-col items-center gap-8 mt-8 mb-16'>
                {sites.map(site => (
                    <Link href={site.acf.link.link_url} key={site.acf.title} id={site.acf.content_id.split('#')[1]} className='cursor-pointer flex flex-col sm:flex-row gap-4 w-full h-[510px] sm:h-80 border border-gray bg-white hover:scale-[1.02] transition-all duration-300 ease-in-out'>
                        <span className='w-full h-[210px] sm:w-1/2 sm:h-full bg-blue'>
                            <Image width={1000} height={400} src={site.acf.image} alt='site' className='w-full h-full object-cover' />
                        </span>
                        <span className='w-full sm:w-1/2 h-full flex flex-col relative px-2 sm:px-0'>
                            <span className='sm:mt-8 text-blue text-xl sm:text-2xl sm:mr-16'>{site.acf.title}</span>
                            <span className='sm:mt-4 text-blue text-lg font-light sm:mr-16'>{site.acf.description}</span>
                            <span className='absolute bottom-0 right-0 pr-4 pb-2 flex flex-row gap-8 items-end'>
                                <span className='text-blue text-lg font-light'>{site.acf.link.link_text}</span>
                                <span className='mb-2'>
                                    <ArrowRightDownBlue />
                                </span>
                            </span>
                        </span>
                    </Link>
                ))}
                {posts.length > 4 && posts.length !== sites.length && <button onClick={() => setSites(posts)} className='mt-8 hover:bg-bg-color hover:text-blue border border-blue text-lg font-light py-2 px-20 bg-blue text-white transition-colors duration-200 ease-in-out'>{props.button_more_text}</button>}
            </div>
        </div>}
        </>
    )
}

export default SitesList