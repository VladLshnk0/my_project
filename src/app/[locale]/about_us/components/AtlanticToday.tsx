"use client";
import type { AtlanticTodayBlockAboutUsACF } from "@/types/AboutUsACF";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AtlanticToday({
  data,
  text,
}: {
  data: AtlanticTodayBlockAboutUsACF;
  text: string;
}) {
  const [scale, setScale] = useState(false);

  const indicator = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setScale(true);
        } else {
          setScale(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (indicator.current) {
      observer.observe(indicator.current);
    }

    return () => {
      if (indicator.current) {
        observer.unobserve(indicator.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b overflow-hidden to-[#92C0E9] from-[#F2F2F2]">
    <div className="flex flex-col md:flex-row gap-5 max-w-[1440px] mx-auto md:h-[300px] pl-6 pr-4">
      <div className="flex flex-col gap-5 md:gap-0 md:items-center md:justify-between md:basis-1/2">
        <h2
          id={data.content_id.split("#")[1]}
          className={`text-blue text-3xl md:text-5xl w-[60%] font-medium transition-transform duration-[3000ms] ${
            scale && "md:scale-75"
          }`}
        >
          {data.title}
        </h2>
        {/* <div className="flex gap-4 items-center">
          <Image
            src={data.poster}
            width={1374}
            height={1374}
            alt="Atlantic Today Image"
            className={`object-cover ml-4 hidden md:block transition-transform duration-[3000ms] ${
              scale && "md:scale-125"
            }`}
          />
          <h2
            className={`text-blue hidden md:block text-3xl w-[75%] pl-10 shrink-0 font-medium transition-opacity opacity-0 delay-1000 duration-[3000ms] ${
              scale && 'md:opacity-100'
            }`}
          >
            {text}
          </h2>
        </div> */}
        <p className="md:hidden">{data.description}</p>
      </div>
      <div className="flex justify-center md:items-center md:basis-1/2">
        <p
          className={`hidden md:block transition-transform duration-[3000ms] 
          ${scale && 'md:-translate-y-20'}
          `}
        >
          {data.description}
        </p>
        {/* <Image
          src={data.poster}
          width={371}
          height={371}
          alt="Atlantic Today Image"
          className="object-cover md:hidden"
        /> */}
      </div>
      <div ref={indicator} />
    </div>
    </div>
  );
}
