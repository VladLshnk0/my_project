'use client'
import { CompaniesCompaniesBlockACF, CompanyPostsACF } from '@/types/CompaniesACF'
import React, { useEffect, useRef, useState } from 'react'
import CompanyItem from './CompanyItem'
import ArrowLeftBlue from '@/utils/components/ArrowLeftBlue'
import ArrowRightBlue from '@/utils/components/ArrowRightBlue'

import { motion } from 'framer-motion'
import CompanyPopup from './CompanyPopup'

function Comapnies({ props, companies }: { props: CompaniesCompaniesBlockACF, companies: CompanyPostsACF[] }) {

    const [[page, direction], setPage] = useState([0, 0]);


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
    }, [companies])


    function getCurrentItemWidth() {
        if (widthCarusel > 1024 && companies.length >= 3) { return widthCarusel / 3 }
        else if (widthCarusel > 768 && companies.length >= 2) { return widthCarusel / 2 }
        else { return widthCarusel }
    }
    function getSizeIndex() {
        if (widthCarusel > 1024 && companies.length >= 3) { return 3 }
        else if (widthCarusel > 768 && companies.length >= 2) { return 2 }
        else { return 1 }
    }

    const handlePrev = () => {
        if (moveCount > 1 && moveCount <= companies.length - getSizeIndex() + 1) {
            setCurrentX(prev => prev + getCurrentItemWidth())
            setMoveCount(prev => prev - 1)
        }
        // console.log(moveCount, products.length - getSizeIndex())
    }

    const handleNext = () => {
        if (moveCount > 0 && moveCount <= companies.length - getSizeIndex()) {
            setCurrentX(prev => prev - getCurrentItemWidth())
            setMoveCount(prev => prev + 1)
        }
        // console.log(moveCount, products.length - getSizeIndex())
    };

    return (
        <>
        {companies && companies.length > 0 ?<div className='default:w-[1440px] px-5 mt-16'>
            {/* {isOpened &&
                <div
                    className='fixed w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center z-10'
                >
                    <CompanyPopup post={companies[actualPostIndex]} close={() => setIsOpened(false)} />
                </div>
            } */}
            <h2 className='text-3xl sm:text-5xl text-blue' id={props.content_id.split('#')[1]}>{props.title}</h2>
            <div className='flex flex-row w-full justify-between items-end mt-4'>
                <p className='text-xl text-blue sm:w-[60%]'>{props.description}</p>
                <div className='hidden sm:flex flex-row gap-4'>
                    <button onClick={handlePrev} disabled={moveCount === 1}>
                        <ArrowLeftBlue disabled={moveCount === 1}/>
                    </button>
                    <button onClick={handleNext} disabled={moveCount === companies.length - getSizeIndex() + 1}>
                        <ArrowRightBlue disabled={moveCount === companies.length - getSizeIndex() + 1}/>
                    </button>
                </div>
            </div>
            <div className='relative w-full my-8'>
                <motion.div ref={carusel} className="overflow-hidden">
                    <motion.div animate={{ x: currentX }} className="flex">
                        {companies.map((company, index) => (
                            <motion.div key={index} className='min-w-full md:min-w-[50%] gap-4 lg:min-w-[33%] mr-4'>
                                <CompanyItem company={company} paginate={paginate} direction={direction} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div> : <h1>Companies are not founded.</h1>}
        </>
    )
}

export default Comapnies