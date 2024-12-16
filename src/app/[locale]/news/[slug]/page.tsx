import React from 'react'
import { getNewsBySlug } from "@/utils/fetchers/getNewsBySlug";
import Content from './components/Content';


export default async function page({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug);

  return (
    <>
      {news ? (
        <Content news={news}/>
      )
        :
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl font-medium text-blue mt-4">News not found</h1>
        </div>
      }
    </>
  );
}