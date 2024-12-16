'use client'
import ArrowDownTurquoise from '@/utils/components/ArrowDownTurquoise'
import React, { use, useEffect, useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import NewsItem from './NewsItem'
import { ControllsBlockNewsACF, NewsPostsACF } from '@/types/NewsPageACF'

import Image from 'next/image'
import Link from 'next/link'

function NewsList({ news, props }: { news: NewsPostsACF[], props: ControllsBlockNewsACF }) {

  const [showFilters, setShowFilters] = useState(false)
  const [showCategory, setShowCategory] = useState(false)

  const [query, setQuery] = useState('')
  const [categoryActive, setCategoryActive] = useState('')
  const [filters, setFilters] = useState()

  const [newsList, setNewsList] = useState<NewsPostsACF[]>(news)


  function handleCategory(categoryItem: string) {
    // console.log(news[0].acf.category.includes(categoryItem))
    console.log(categoryItem.toLocaleLowerCase())
    console.log(news[0].acf.category[0].toLocaleLowerCase())
    console.log(news[0].acf.category.includes(categoryItem))
    if (categoryActive === categoryItem) {
      setCategoryActive('')
      return
    } else {
      setCategoryActive(categoryItem)
    }
  }

  useEffect(() => {
    setNewsList(news.filter((news) => news.acf.title.toLowerCase().includes(query.toLowerCase())))
  }, [query, news])

  useEffect(() => {
    if (categoryActive === '') {
      setNewsList(news)
      return
    }
    else {
      setNewsList(news.filter((news) => news.acf.category.includes(categoryActive)))
      // setNewsList([])
      // setNewsList(news.filter((news) => news.acf.category.map((category) => category.toLowerCase()).includes(categoryActive.toLowerCase())))
    }
  }, [categoryActive, news])


  return (
    <div className='default:max-w-[1440px] w-full px-5 md:px-16 overflow-hidden 2xl:px-5 my-16'>
      {/* <div className='w-full my-16 h-96 hidden flex-row'>
        <Image
          src={news[0].acf.image}
          alt={'news image'}
          width={500}
          height={500}
          quality={100}
          className='w-1/2 h-96'
        />
        <div className='w-1/2 flex flex-col ml-4'>
          <p className='text-blue font-light mb-4'>{news[0].acf.date_short}</p>
          <h1 className='text-3xl font-medium text-blue'>{news[0].acf.title}</h1>
          <p className='text-lg text-blue mt-5'>{news[0].acf.short_description}</p>
          <div className='flex flex-row w-full justify-between items-center mt-16'>
            <p className='text-blue font-light'>- {news[0].acf.category}</p>
            <Link href={`${news[0].acf.link.link_url}`} className='flex flex-row gap-2 mt-4 items-center font-medium hover:gap-4 transition-all duration-300'>
              <p className='text-xl text-blue'>{news[0].acf.link.link_text}</p>
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      <div className='flex flex-row justify-between '>
        <input
          type="text"
          className='w-full sm:w-[50%] bg-bg-color h-12 border-b border-blue px-4 outline-none'
          placeholder={props.search_text}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='hidden sm:flex flex-row w-[40%] justify-between'>
          <button
            className='bg-bg-color h-12 border-b border-blue px-4 outline-none w-[40%] flex items-center justify-between relative'
            onClick={() => setShowFilters(!showFilters)}
          >
            <p className='text-blue'>{props.filters_text}</p>
            <div className={showFilters ? 'rotate-180 transition-all transform duration-200' : 'rotate-0 transition-all transform duration-200'}>
              <ArrowDownTurquoise />
            </div>
            {showFilters && (
              <ClickAwayListener onClickAway={() => setShowFilters(false)}>
                <div className='absolute top-12 left-0 w-full bg-bg-color border border-blue z-20'>
                  {props.items_filter.map((filter, id) => (
                    <button key={id} className='w-full h-12 flex items-center justify-between px-4 hover:bg-blue group transition-colors duration-200'>
                      <p className='text-blue group-hover:text-white'>{filter.item}</p>
                      <p className='text-blue group-hover:text-white'>x</p>
                    </button>
                  ))}
                </div>
              </ClickAwayListener>
            )}
          </button>
          <button
            className='bg-bg-color h-12 border-b border-blue px-4 outline-none w-[50%] flex items-center justify-between relative'
            onClick={() => setShowCategory(!showCategory)}
          >
            <p className='text-blue'>{categoryActive == '' ? props.category_text : categoryActive}</p>
            <div className={showCategory ? 'rotate-180 transition-all transform duration-200' : 'rotate-0 transition-all transform duration-200'}>
              <ArrowDownTurquoise />
            </div>
            {showCategory && (
              <ClickAwayListener onClickAway={() => setShowCategory(false)}>
                <div className='absolute top-12 left-0 w-full bg-bg-color border border-blue z-20'>
                  {props.category_items.map((category, id) => (
                    <button
                      key={id}
                      className='w-full h-12 flex items-center justify-between px-4 hover:bg-blue group transition-colors duration-200'
                      onClick={() => handleCategory(category.item)}
                    >
                      <p className='text-blue group-hover:text-white'>{category.item}</p>
                      <p className='text-blue group-hover:text-white'>x</p>
                    </button>
                  ))}
                </div>
              </ClickAwayListener>
            )}
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
        {newsList?.map((news) => (
          <NewsItem key={news.acf.slug} news={news.acf} />
        ))}
      </div>
    </div>
  )
}

export default NewsList