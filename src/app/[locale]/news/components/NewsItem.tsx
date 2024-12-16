import { NewsACF } from '@/types/NewsPageACF'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NewsItem({ news }: { news: NewsACF }) {

    const categoryList = news.category.map((category, index) => (
        category + (index < news.category.length - 1 ? '  |  ' : '')
    ))

    return (
        <Link href={news.redirect_to_hyperlink ? `${news.hyper_link.link_url}` : `${news.link.link_url}`} target={news.redirect_to_hyperlink ? '_blank' : '_self'} className='w-full max-w-[440px] h-[440px] bg-white flex flex-col justify-between group gap-4 border-bg-color border-2 hover:border-turquoise transition-all duration-200'>
                <span className='flex flex-col p-1'>
                {news.image && (
                    <img src={news.image} alt={news.title} className='w-full h-[200px] object-contain bg-gray' />
                )}
                <span className='p-4 flex flex-col gap-2'>
                    <span className='flex flex-row items-center gap-4'>
                        <span className='text-gray text-base xl:text-lg group-hover:text-blue transition-colors duration-500'>{news.date_short}</span>
                        <span className='text-gray text-base xl:text-lg group-hover:text-blue transition-colors duration-500'>{'|'}</span>
                        <span className='text-gray text-sm xl:text-lg group-hover:text-blue transition-colors duration-500'>{categoryList}</span>
                    </span>
                    <span className='text-xl text-blue group-hover:text-turquoise transition-colors duration-500'>{news.title}</span>
                </span>
                </span>
                <span className='p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-end w-full'>
                    <span className='flex flex-row gap-2 items-center font-medium group/link'>
                        <span className='text-xl text-blue'>{news.link.link_text}</span>
                        <span className='group-hover/link:translate-x-2 transition-all duration-300'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                            </svg>
                        </span>
                    </span>
                </span>
        </Link>
    )
}

export default NewsItem