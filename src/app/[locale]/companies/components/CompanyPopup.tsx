import React from 'react'
import ClickAwayListener from 'react-click-away-listener'
import Image from 'next/image'
import Link from 'next/link'
import { CompanyPostsACF } from '@/types/CompaniesACF'
import Cross from '@/utils/components/Cross'

function CompanyPopup({ post, close }: { post: CompanyPostsACF, close: () => void }) {

    const data = {
        title: post.acf.title,
        image: post.acf.background_image,
        description: post.acf.description,
        link: post.acf.link,
        logo: post.acf.logo,
        description_title: post.acf.description_title,
        category: post.acf.category,
        foundation: post.acf.foundation,
        headquarters: post.acf.headquarters,
        website: post.acf.website,
    }

    return (
        <ClickAwayListener onClickAway={close}>
            <div className='w-[1038px] h-[635px] bg-bg-color flex flex-row'>
                <div className='w-1/4 border-r-2 border-turquoise flex flex-col'>
                    <div className='relative w-full h-1/3'>
                        <Image src={data.image} layout='fill' objectFit='cover' alt='post' />
                        {data.logo &&
                            <div className='absolute w-full h-full flex items-center justify-center'>
                                <Image src={data.logo} width={200} height={200} alt='logo' />
                            </div>
                        }
                    </div>
                    <div className='w-full h-2/3 flex flex-col gap-8 mt-8 px-2'>
                        <div>
                            <h3 className='text-2xl text-blue'>{data.foundation.text}</h3>
                            <p className='text-blue text-2xl font-light'>{data.foundation.year}</p>
                        </div>
                        <div>
                            <h3 className='text-2xl text-blue'>{data.headquarters.text}</h3>
                            <p className='text-blue text-2xl font-light'>{data.headquarters.year}</p>
                        </div>
                        <div>
                            <h3 className='text-2xl text-blue'>{data.website.text}</h3>
                            <Link href={data.website.link} className='text-blue text-2xl font-light'>{data.website.link}</Link>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 m-8'>
                    <div className='flex flex-row justify-between'>
                        <h2 className='text-5xl text-blue'>{data.title}</h2>
                        <button onClick={close}>
                            <Cross />
                        </button>
                    </div>
                    {data.category && <p className='text-2xl text-bright-blue'>{data.category}</p>}
                    <div className='mt-8'>
                        {data.description_title && <h3 className='text-3xl text-blue'>{data.description_title}</h3>}
                        <p className='text-blue text-xl'>
                            {data.description}
                        </p>
                        <Link href={data.link.link_url} className='flex flex-row gap-2 mt-4 items-center font-medium hover:gap-4 transition-all duration-300'>
                            <span className='text-xl text-blue'>{post.acf.link.link_text}</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </ClickAwayListener>
    )
}

export default CompanyPopup