'use client'
import React from 'react'
import FacebookBlueIcon from "@/utils/components/FacebookBlueIcon";
import LinkedInBlueIcon from "@/utils/components/LinkedInBlueIcon";
import { FacebookShareButton, LinkedinShareButton } from "next-share";
import Image from "next/image";
import Link from "next/link";
import { NewsPostsACF } from '@/types/NewsPageACF';
import ReloadComponent from '@/utils/components/ReloadComponent';

function Content({news}: { news: NewsPostsACF }) {
    return (
        <div className="w-full flex flex-col items-center">
            <Image src={news.acf.image} width={1000} height={800} alt={news.acf.title} className="w-full object-cover h-[400px]" />
            <div className="default:w-[1440px] pt-4">
                <Link href={`/news`} className="flex flex-row gap-2">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702M20.5 12.0002H3.67" stroke="#A7A8A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className="text-dark-gray uppercase ">All news</p>
                </Link>
                <div className="mx-2 sm:mx-0  sm:px-[5%]">
                    <h2 className="text-5xl font-medium text-blue mt-4">{news.acf.title}</h2>
                    <div className="my-8 px-2 sm:px-0 w-full border-b-2 border-gray flex flex-row justify-between">
                        <p className="text-dark-gray text-lg">{news.acf.date_short}</p>
                        <p className="text-dark-gray text-lg">{news.acf.category}</p>
                    </div>
                    <div className="w-full flex flex-col gap-4 mx-2 sm:mx-0 sm:px-[5%] items-stretch">
                        {news.acf.paragraphs.map((paragraph, index) => (
                            <div key={index}>
                                <p className="text-blue text-xl" id={paragraph.content_id}>{paragraph.paragraph}</p>
                            </div>
                        ))}
                        <div className="self-end flex flex-row justify-center items-center gap-4 my-4 pr-2 sm:pr-0">
                            <p className="text-blue text-xl font-bold">Share:</p>
                            <LinkedinShareButton
                                url={`https://norsea.vercel.app/news/${news.acf.slug}`}
                                title={news.acf.title}
                            >
                                <LinkedInBlueIcon />
                            </LinkedinShareButton>
                            <FacebookShareButton
                                url={`https://norsea.vercel.app/news/${news.acf.slug}`}
                                title={news.acf.title}
                            >
                                <FacebookBlueIcon />
                            </FacebookShareButton>
                        </div>
                    </div>
                </div>
            </div>
            <ReloadComponent />
        </div>
    )
}

export default Content