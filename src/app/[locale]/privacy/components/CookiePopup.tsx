'use client'
import Cross from '@/utils/components/Cross'
import React, { useEffect } from 'react'
import { useState } from 'react'

function CookiePopup() {
    useEffect(() => {
        const cookiesAcceptedNorseaAtlantic = localStorage.getItem('cookiesAccepted') !== 'true'
        if (cookiesAcceptedNorseaAtlantic) {
            setShow(true)
        }
    }, [])
    const [show, setShow] = useState<boolean>()

    function acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true')
        setShow(false)
    }

    function declineCookies() {
        localStorage.setItem('cookiesAccepted', 'false')
        setShow(false)
    }


    return (
        <>
            {show &&
                <div className={show ? 'fixed bottom-4 right-4 w-[360px] h-48 bg-blue flex items-center justify-center p-8 transition-opacity duration-500 opacity-100 z-50' : 'fixed z-50 bottom-4 right-4 transition-opacity duration-500 opacity-0'}>
                    <div className='flex flex-col justify-between items-center gap-4'>
                        <p className='text-base text-white '>
                            We use cookies to get insights on how you use our website.
                        </p>
                        <div className='flex flex-row justify-between gap-4 w-full'>
                            <button
                                onClick={() => declineCookies()}
                                className='w-[50%] h-12 px-4 transition-all duration-200 text-white text-xl hover:underline'
                            >
                                Decline
                            </button>
                            <button
                                onClick={() => acceptCookies()}
                                className='border-turquoise border-4 bg-turquoise text-white text-xl w-[50%] h-12 px-4 transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px]'
                            >
                                Allow
                            </button>
                        </div>
                    </div>
                </div>}
            {!show &&
                <div className='fixed z-50 -bottom-8 right-8 p-2 h-10 bg-blue flex items-center justify-center rounded-t-md transition-all duration-1000 delay-200 hover:-translate-y-8'>
                    <button className='text-white text-xl pt-2 hover:underline' onClick={() => setShow(true)}>
                        Cookie Policy
                    </button>
                </div>
            }
        </>
    )
}

export default CookiePopup