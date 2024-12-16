'use client'
import ArrowLeftBlue from '@/utils/components/ArrowLeftBlue';
import ArrowRightBlue from '@/utils/components/ArrowRightBlue';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import CompanyItem from '../../companies/components/CompanyItem';
import NewsItemOurSites from './NewsItemOurSites';
import { NewsACF, NewsPostsACF } from '@/types/NewsPageACF';


const props = {
    title: 'News',
    description: 'The latest news from our company',
    content_id: 'news'
}


function News({news }: {news: NewsPostsACF[]}) {
    const [[page, direction], setPage] = useState([0, 0]);

    // console.log(`News`,news)

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const [currentX, setCurrentX] = useState(0)
    const carusel = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const [moveCount, setMoveCount] = useState(1)
    const [widthCarusel, setWidthCarusel] = useState(0)

    const [isOpened, setIsOpened] = useState(false)
    const [actualPostIndex, setActualPostIndex] = useState(0)

    function handleOpen(index: number) {
        setIsOpened(true)
        setActualPostIndex(index)
    }

    useEffect(() => {
        if (carusel.current?.scrollWidth && carusel.current?.offsetWidth) {
            setWidth(carusel.current?.scrollWidth - carusel.current?.offsetWidth)
            setWidthCarusel(carusel.current.offsetWidth)
        }
        const getwidth = () => {
            if (carusel.current?.scrollWidth && carusel.current?.offsetWidth) {
                setWidth(carusel.current?.scrollWidth - carusel.current?.offsetWidth)
                setWidthCarusel(carusel.current.offsetWidth)
            }
        }

        window.addEventListener("resize", getwidth);
        return () => window.removeEventListener("resize", getwidth)
    }, [news])

    function getCurrentItemWidth() {
        if (widthCarusel > 1024 && news.length >= 3) { return widthCarusel / 3 }
        else if (widthCarusel > 768 && news.length >= 2) { return widthCarusel / 2 }
        else { return widthCarusel }
    }
    function getSizeIndex() {
        if (widthCarusel > 1024 && news.length >= 3) { return 3 }
        else if (widthCarusel > 768 && news.length >= 2) { return 2 }
        else { return 1 }
    }

    const handlePrev = () => {
        if (moveCount > 1 && moveCount <= news.length - getSizeIndex() + 1) {
            setCurrentX(prev => prev + getCurrentItemWidth())
            setMoveCount(prev => prev - 1)
        }
        // console.log(moveCount, products.length - getSizeIndex())
    }

    const handleNext = () => {
        if (moveCount > 0 && moveCount <= news.length - getSizeIndex()) {
            setCurrentX(prev => prev - getCurrentItemWidth())
            setMoveCount(prev => prev + 1)
        }
        // console.log(moveCount, products.length - getSizeIndex())
    };

    return (
        <>
            {(news && news.length > 0)&& <div className='w-screen sm:max-w-[1440px] px-5 mt-16 flex flex-col gap-4'>
                {/* {isOpened &&
                    <div
                        className='fixed w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center z-10'
                    >
                        <CompanyPopup post={companies[actualPostIndex]} close={() => setIsOpened(false)} />
                    </div>
                } */}
                <h2 className='text-3xl sm:text-5xl text-blue' id={props.content_id.split('#')[1]}>{props.title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-xl text-blue'>{props.description}</p>
                    <div className='flex gap-4'>
                        <button onClick={handlePrev} disabled={moveCount === 1}>
                            <ArrowLeftBlue disabled={moveCount === 1}/>
                        </button>
                        <button onClick={handleNext} disabled={moveCount === news.length - getSizeIndex() + 1}>
                            <ArrowRightBlue disabled={moveCount === news.length - getSizeIndex() + 1}/>
                        </button>
                    </div>
                </div>
                <div className='relative flex my-8'>
                    <motion.div ref={carusel} className="overflow-hidden min-w-full">
                        <motion.div animate={{ x: currentX }} transition={{ duration: 1.0, type: "spring", delay: 0.2}} className="flex gap-2">
                            {news.map((newsItem: any, index: number) => (
                                <motion.div key={index} className='min-w-full md:min-w-[50%] lg:min-w-[33%]' onClick={() => handleOpen(index)}>
                                    <NewsItemOurSites news={newsItem} paginate={paginate} direction={direction} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>}
        </>
    )
}

export default News