import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsBlockACF } from "@/types/acf";
import { NewsPostsACF } from "@/types/NewsPageACF";
import ArrowLink from "./ArrowLink";

function News({
  props,
  posts,
}: {
  props: NewsBlockACF;
  posts: NewsPostsACF[];
}) {
  return (
    <div className="mt-16 max-w-[1440px] pl-6 pr-4 mb-16 flex flex-col gap-8">
      <h2
        className="text-blue text-5xl font-medium"
        id={props.content_id.split("#")[1]}
      >
        {props.title}
      </h2>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-4 basis-full md:basis-1/2">
          <Link href={posts[0].acf.link.link_url} target={posts[0].acf.link.link_url.includes('https') ? '_blank' : '_self'} className="w-full basis-[75%] cursor-pointer border-2 border-blue flex flex-col hover:border-turquoise transition-colors duration-300 group">
            <span className="w-full basis-1/2 flex flex-col gap-4 p-4">
              <span
                className="text-blue text-2xl font-bold group-hover:text-turquoise transition-colors duration-300"
                id={posts[0].acf.content_id.split("#")[1]}
              >
                {posts[0].acf.title}
              </span>
              {posts[0].acf.short_description && (
                <span className="text-blue text-[16px]">
                  {posts[0].acf.short_description}
                </span>
              )}
              <ArrowLink href={posts[0].acf.link.link_url} text={posts[0].acf.link.link_text} />
            </span>
            {posts[0].acf.image && (
              <span className="w-full basis-1/2 bg-blue overflow-hidden">
                <Image
                  src={posts[0].acf.image}
                  alt="article"
                  width={1000}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </span>
            )}
          </Link>
          <div className="flex basis-[25%] flex-col sm:flex-row gap-4">
            <Link href={posts[2].acf.link.link_url} target={posts[2].acf.link.link_url.includes('https') ? '_blank' : '_self'} className="w-full basis-full cursor-pointer sm:basis-1/2 border-2 flex flex-col justify-between gap-4 border-blue p-4 group hover:border-turquoise transition-colors duration-300">
              <span
                id={posts[2].acf.content_id.split("#")[1]}
                className="text-blue text-2xl font-bold group-hover:text-turquoise transition-colors duration-300"
              >
                {posts[2].acf.title}
              </span>
              {posts[2].acf.short_description && (
                <span className="text-blue text-[16px] mt-4">
                  {posts[2].acf.short_description}
                </span>
              )}
              <ArrowLink href={posts[2].acf.link.link_url} text={posts[2].acf.link.link_text} />
            </Link>
            <Link href={posts[3].acf.link.link_url} target={posts[3].acf.link.link_url.includes('https') ? '_blank' : '_self'} className="w-full basis-full cursor-pointer sm:basis-1/2 flex flex-col justify-between group gap-4 border-2 border-blue p-4 hover:border-turquoise transition-colors duration-300">
              <span
                id={posts[3].acf.content_id.split("#")[1]}
                className="text-blue text-2xl font-bold group-hover:text-turquoise transition-colors duration-300"
              >
                {posts[3].acf.title}
              </span>
              {posts[3].acf.short_description && (
                <span className="text-blue text-[16px]">
                  {posts[3].acf.short_description}
                </span>
              )}
              <ArrowLink href={posts[3].acf.link.link_url} text={posts[3].acf.link.link_text} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 basis-full md:basis-1/2">
          <Link href={posts[1].acf.link.link_url} target={posts[1].acf.link.link_url.includes('https') ? '_blank' : '_self'} className="w-full basis-[25%] border-2 cursor-pointer border-blue flex flex-col sm:flex-row group hover:border-turquoise transition-colors duration-300">
            {posts[1].acf.image && (
              <span className="basis-full sm:basis-1/2 bg-blue overflow-hidden">
                <Image
                  src={posts[1].acf.image}
                  alt="article"
                  width={500}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </span>
            )}
            <span className="basis-full sm:basis-1/2 flex flex-col gap-4 justify-between p-4">
              <span
                id={posts[1].acf.content_id.split("#")[1]}
                className="text-blue text-2xl font-bold group-hover:text-turquoise transition-colors duration-300"
              >
                {posts[1].acf.title}
              </span>
              {posts[1].acf.short_description && (
                <span className="text-blue text-[16px]">
                  {posts[1].acf.short_description}
                </span>
              )}
              <ArrowLink href={posts[1].acf.link.link_url} text={posts[1].acf.link.link_text} />
            </span>
          </Link>
          <Link href={posts[4].acf.link.link_url} target={posts[4].acf.link.link_url.includes('https') ? '_blank' : '_self'} className="w-full basis-[75%] cursor-pointer border-2 border-blue flex flex-col gap-4 group hover:border-turquoise transition-colors duration-300">
            <span className="basis-full flex flex-col gap-4 md:basis-1/2 p-4">
              <span
                id={posts[4].acf.content_id.split("#")[1]}
                className="text-blue text-2xl font-bold group-hover:text-turquoise transition-colors duration-300"
              >
                {posts[4].acf.title}
              </span>
              {posts[4].acf.short_description && (
                <span className="text-blue text-[16px]">
                  {posts[4].acf.short_description}
                </span>
              )}
              <ArrowLink href={posts[4].acf.link.link_url} text={posts[4].acf.link.link_text} />
            </span>
            {posts[4].acf.image && (
              <span className="relative basis-full md:basis-1/2 bg-blue">
                <Image
                  src={posts[4].acf.image}
                  alt="article"
                  width={500}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </span>
            )}
          </Link>
        </div>
      </div>
      <div>
        <Link
          href={"/news"}
          className="w-48 h-12 border-2 hover:text-blue border-blue flex items-center justify-center bg-blue hover:bg-transparent text-white transition-colors duration-200"
        >
          {props.text_on_button}
        </Link>
      </div>
    </div>
  );
}

export default News;
