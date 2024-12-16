import { NewsACF, NewsPostsACF } from '@/types/NewsPageACF';
import { motion } from 'framer-motion';
import React from 'react'
import NewsItem from '../../news/components/NewsItem';

interface iProps {
    news: NewsPostsACF
    paginate: (direction: number) => void
    direction: number
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function NewsItemOurSites({ news, paginate, direction }: iProps) {


    const newsObject: NewsACF = {
        slug: news.acf.slug,
        category: news.acf.category,
        title: news.acf.title,
        date_full: news.acf.date_full,
        date_short: news.acf.date_short,
        image: news.acf.image,
        short_description: news.acf.short_description,
        paragraphs: news.acf.paragraphs,
        link: news.acf.link,
        hyper_link: news.acf.hyper_link,
        redirect_to_hyperlink: news.acf.redirect_to_hyperlink,
        content_id: news.acf.content_id
    }


  return (
        <NewsItem news={newsObject}  />
  )
}

export default NewsItemOurSites