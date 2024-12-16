'use client'
import React, { useMemo, useState } from 'react'
import panoram from '../../../../public/images/panoramTest.jpg'
import panoramTwo from '../../../../public/images/panoramTwo.jpg'
import panoramThree from '../../../../public/images/PanoramThree.jpg'
import panoramFour from '../../../../public/images/PanoramFour.jpg'

import "@egjs/react-view360/css/view360.min.css";
import View360, { EquirectProjection } from "@egjs/react-view360";
import Image from 'next/image'
import Cross from '@/utils/components/Cross'

function PanoramView() {

    const panorams = [panoram, panoramTwo, panoramThree, panoramFour]

    const [options, setOptions] = useState([panoram, panoramTwo, panoramThree, panoramFour])

    const [isBlurred, setIsBlurred] = useState(true)

    const projections = useMemo(() => panorams.map((panoram) => new EquirectProjection({
        src: panoram.src,
    })), [options]);

    const testProjection = useMemo(() => new EquirectProjection({
        src: panoram.src,
    }), []);

    const text = 'Click on the screen to see the Full View:/n360° Panorama of Our Project'

    const [activePanoram, setActivePanoram] = useState(testProjection)


    function changePanoram(index: number) {
        setActivePanoram(projections[index])
    }

    return (
        <div className='relative w-full h-full flex items-center justify-center'>
            {isBlurred &&
                <div className='absolute z-30 cursor-pointer w-full h-full flex flex-col pt-[10%] items-center bg-blue/25' onClick={() => setIsBlurred(false)}>
                    <h1 className='text-center text-2xl md:text-4xl text-white'>
                        {text.split('/n').map((text, index) => (
                            <span key={index} className='block'>{text}</span>
                        ))}
                    </h1>
                    <div className='hidden md:block text-center mt-8'>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_713_931)">
                                <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.14" />
                                <circle cx="50" cy="50" r="49.5" stroke="white" />
                            </g>
                            <path d="M26.2793 59.2013C26.353 59.27 26.4121 59.3528 26.4531 59.4448C26.4941 59.5368 26.5162 59.6361 26.5179 59.7368C26.5197 59.8375 26.5012 59.9375 26.4635 60.0309C26.4257 60.1243 26.3696 60.2091 26.2984 60.2803C26.2272 60.3515 26.1423 60.4077 26.0489 60.4454C25.9555 60.4831 25.8555 60.5017 25.7548 60.4999C25.6541 60.4981 25.5548 60.4761 25.4628 60.4351C25.3708 60.3941 25.288 60.335 25.2193 60.2613L15.2193 50.2613C15.0789 50.1207 15 49.93 15 49.7313C15 49.5325 15.0789 49.3419 15.2193 49.2013L25.2193 39.2013C25.3615 39.0688 25.5496 38.9967 25.7439 39.0001C25.9382 39.0035 26.1235 39.0823 26.261 39.2197C26.3984 39.3571 26.4771 39.5425 26.4805 39.7368C26.4839 39.9311 26.4118 40.1191 26.2793 40.2613L16.8106 49.7313L26.2793 59.2013Z" fill="white" />
                            <path d="M73.7207 59.2013C73.647 59.27 73.5879 59.3528 73.5469 59.4448C73.5059 59.5368 73.4838 59.6361 73.4821 59.7368C73.4803 59.8375 73.4988 59.9375 73.5365 60.0309C73.5743 60.1243 73.6304 60.2091 73.7016 60.2803C73.7728 60.3515 73.8577 60.4077 73.9511 60.4454C74.0445 60.4831 74.1445 60.5017 74.2452 60.4999C74.3459 60.4981 74.4452 60.4761 74.5372 60.4351C74.6292 60.3941 74.712 60.335 74.7807 60.2613L84.7807 50.2613C84.9211 50.1207 85 49.93 85 49.7313C85 49.5325 84.9211 49.3419 84.7807 49.2013L74.7807 39.2013C74.6385 39.0688 74.4504 38.9967 74.2561 39.0001C74.0618 39.0035 73.8765 39.0823 73.739 39.2197C73.6016 39.3571 73.5229 39.5425 73.5195 39.7368C73.5161 39.9311 73.5882 40.1191 73.7207 40.2613L83.1894 49.7313L73.7207 59.2013Z" fill="white" />
                            <g clipPath="url(#clip0_713_931)">
                                <path d="M55.1661 44.9523C54.9254 44.9559 54.6865 44.995 54.4572 45.0684C54.3411 44.3106 53.51 43.7362 52.4589 43.7362C52.1402 43.7256 51.8226 43.7775 51.5239 43.8889C51.3339 43.5544 51.054 43.2798 50.7159 43.0961C50.3779 42.9125 49.9951 42.8273 49.6111 42.85C49.2756 42.8351 48.9415 42.9005 48.6364 43.0408C48.3313 43.1812 48.0642 43.3923 47.8572 43.6567C47.5078 43.4496 47.1084 43.3418 46.7022 43.345C46.2155 43.3128 45.7356 43.4727 45.3654 43.7903C44.9952 44.1079 44.7643 44.558 44.7222 45.0439V45.6C44.0744 45.8445 42.2105 46.7 41.7216 48.5578C41.2328 50.4156 41.9294 53.4467 43.3655 55.7567C44.331 57.2618 45.551 58.5873 46.9711 59.6739C47.0654 59.7419 47.1787 59.7783 47.295 59.7778H53.6139C53.7355 59.7765 53.8535 59.7358 53.95 59.6617C55.0474 58.6504 55.841 57.3531 56.2416 55.9156C56.9346 54.0228 57.2582 52.0147 57.195 50V46.6389C57.1454 46.148 56.905 45.6961 56.5255 45.3806C56.1461 45.0651 55.6579 44.9113 55.1661 44.9523ZM56.095 50C56.1617 51.9046 55.8565 53.8039 55.1966 55.5917C54.8509 56.7483 54.235 57.8061 53.4 58.6778H47.4539C46.2108 57.694 45.1373 56.5132 44.2761 55.1823C42.8278 52.8234 42.4428 50.1528 42.7605 48.8328C42.9271 48.3754 43.1878 47.9579 43.5257 47.6074C43.8636 47.2569 44.2712 46.9811 44.7222 46.7978V51.4728C44.7222 51.6187 44.7801 51.7586 44.8833 51.8617C44.9864 51.9649 45.1263 52.0228 45.2722 52.0228C45.4181 52.0228 45.558 51.9649 45.6611 51.8617C45.7643 51.7586 45.8222 51.6187 45.8222 51.4728V45.0439C45.8222 44.7567 46.1828 44.4328 46.7144 44.4328C47.2461 44.4328 47.625 44.7506 47.625 45.0439V48.5395H48.725V44.3839C48.725 44.2128 49.0794 43.95 49.6172 43.95C50.155 43.95 50.5522 44.2434 50.5522 44.4084V48.6189H51.6522V45.1112L51.7561 45.0378C51.9717 44.9026 52.2228 44.8345 52.4772 44.8423C53.0455 44.8423 53.3939 45.1112 53.3939 45.2578V49.23H54.5V46.2539C54.7015 46.1169 54.9408 46.0464 55.1844 46.0523C55.71 46.0523 56.1133 46.3639 56.1133 46.6267L56.095 50Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_b_713_931" x="-2" y="-2" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_713_931" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_713_931" result="shape" />
                                </filter>
                                <clipPath id="clip0_713_931">
                                    <rect width="22" height="22" fill="white" transform="translate(38 39)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='block md:hidden text-center mt-4'>
                        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_713_931)">
                                <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.14" />
                                <circle cx="50" cy="50" r="49.5" stroke="white" />
                            </g>
                            <path d="M26.2793 59.2013C26.353 59.27 26.4121 59.3528 26.4531 59.4448C26.4941 59.5368 26.5162 59.6361 26.5179 59.7368C26.5197 59.8375 26.5012 59.9375 26.4635 60.0309C26.4257 60.1243 26.3696 60.2091 26.2984 60.2803C26.2272 60.3515 26.1423 60.4077 26.0489 60.4454C25.9555 60.4831 25.8555 60.5017 25.7548 60.4999C25.6541 60.4981 25.5548 60.4761 25.4628 60.4351C25.3708 60.3941 25.288 60.335 25.2193 60.2613L15.2193 50.2613C15.0789 50.1207 15 49.93 15 49.7313C15 49.5325 15.0789 49.3419 15.2193 49.2013L25.2193 39.2013C25.3615 39.0688 25.5496 38.9967 25.7439 39.0001C25.9382 39.0035 26.1235 39.0823 26.261 39.2197C26.3984 39.3571 26.4771 39.5425 26.4805 39.7368C26.4839 39.9311 26.4118 40.1191 26.2793 40.2613L16.8106 49.7313L26.2793 59.2013Z" fill="white" />
                            <path d="M73.7207 59.2013C73.647 59.27 73.5879 59.3528 73.5469 59.4448C73.5059 59.5368 73.4838 59.6361 73.4821 59.7368C73.4803 59.8375 73.4988 59.9375 73.5365 60.0309C73.5743 60.1243 73.6304 60.2091 73.7016 60.2803C73.7728 60.3515 73.8577 60.4077 73.9511 60.4454C74.0445 60.4831 74.1445 60.5017 74.2452 60.4999C74.3459 60.4981 74.4452 60.4761 74.5372 60.4351C74.6292 60.3941 74.712 60.335 74.7807 60.2613L84.7807 50.2613C84.9211 50.1207 85 49.93 85 49.7313C85 49.5325 84.9211 49.3419 84.7807 49.2013L74.7807 39.2013C74.6385 39.0688 74.4504 38.9967 74.2561 39.0001C74.0618 39.0035 73.8765 39.0823 73.739 39.2197C73.6016 39.3571 73.5229 39.5425 73.5195 39.7368C73.5161 39.9311 73.5882 40.1191 73.7207 40.2613L83.1894 49.7313L73.7207 59.2013Z" fill="white" />
                            <g clipPath="url(#clip0_713_931)">
                                <path d="M55.1661 44.9523C54.9254 44.9559 54.6865 44.995 54.4572 45.0684C54.3411 44.3106 53.51 43.7362 52.4589 43.7362C52.1402 43.7256 51.8226 43.7775 51.5239 43.8889C51.3339 43.5544 51.054 43.2798 50.7159 43.0961C50.3779 42.9125 49.9951 42.8273 49.6111 42.85C49.2756 42.8351 48.9415 42.9005 48.6364 43.0408C48.3313 43.1812 48.0642 43.3923 47.8572 43.6567C47.5078 43.4496 47.1084 43.3418 46.7022 43.345C46.2155 43.3128 45.7356 43.4727 45.3654 43.7903C44.9952 44.1079 44.7643 44.558 44.7222 45.0439V45.6C44.0744 45.8445 42.2105 46.7 41.7216 48.5578C41.2328 50.4156 41.9294 53.4467 43.3655 55.7567C44.331 57.2618 45.551 58.5873 46.9711 59.6739C47.0654 59.7419 47.1787 59.7783 47.295 59.7778H53.6139C53.7355 59.7765 53.8535 59.7358 53.95 59.6617C55.0474 58.6504 55.841 57.3531 56.2416 55.9156C56.9346 54.0228 57.2582 52.0147 57.195 50V46.6389C57.1454 46.148 56.905 45.6961 56.5255 45.3806C56.1461 45.0651 55.6579 44.9113 55.1661 44.9523ZM56.095 50C56.1617 51.9046 55.8565 53.8039 55.1966 55.5917C54.8509 56.7483 54.235 57.8061 53.4 58.6778H47.4539C46.2108 57.694 45.1373 56.5132 44.2761 55.1823C42.8278 52.8234 42.4428 50.1528 42.7605 48.8328C42.9271 48.3754 43.1878 47.9579 43.5257 47.6074C43.8636 47.2569 44.2712 46.9811 44.7222 46.7978V51.4728C44.7222 51.6187 44.7801 51.7586 44.8833 51.8617C44.9864 51.9649 45.1263 52.0228 45.2722 52.0228C45.4181 52.0228 45.558 51.9649 45.6611 51.8617C45.7643 51.7586 45.8222 51.6187 45.8222 51.4728V45.0439C45.8222 44.7567 46.1828 44.4328 46.7144 44.4328C47.2461 44.4328 47.625 44.7506 47.625 45.0439V48.5395H48.725V44.3839C48.725 44.2128 49.0794 43.95 49.6172 43.95C50.155 43.95 50.5522 44.2434 50.5522 44.4084V48.6189H51.6522V45.1112L51.7561 45.0378C51.9717 44.9026 52.2228 44.8345 52.4772 44.8423C53.0455 44.8423 53.3939 45.1112 53.3939 45.2578V49.23H54.5V46.2539C54.7015 46.1169 54.9408 46.0464 55.1844 46.0523C55.71 46.0523 56.1133 46.3639 56.1133 46.6267L56.095 50Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_b_713_931" x="-2" y="-2" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_713_931" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_713_931" result="shape" />
                                </filter>
                                <clipPath id="clip0_713_931">
                                    <rect width="22" height="22" fill="white" transform="translate(38 39)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            }
            <div className={isBlurred ? 'w-full relative blur-[2px] z-0' : 'w-full relative z-0'}>
                {isBlurred && <div className='absolute top-0 left-0 w-full h-full z-20' onClick={() => setIsBlurred(false)} />}
                {!isBlurred &&
                    <button className='absolute top-5 right-5 z-30' onClick={() => setIsBlurred(true)}>
                        <Cross />
                    </button>
                }
                <View360 className="is-16by9" projection={activePanoram} />
                <div className='absolute bottom-5 w-full z-10 flex flex-row justify-center gap-4 md:gap-16 px-2 md:px-0'>
                    {options.map((panoram, index) => (
                        <button
                            key={index}
                            onClick={() => changePanoram(index)}
                            className='w-20 h-14 md:w-36 md:h-20 p-[1px] bg-white hover:bg-turquoise transition-colors duration-200'
                        >
                            <Image
                                src={panoram.src}
                                alt={''}
                                width={150}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PanoramView