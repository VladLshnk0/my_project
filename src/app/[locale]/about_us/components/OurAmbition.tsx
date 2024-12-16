'use client';
import type { OurAmbitionBlockAboutUsACF } from "@/types/AboutUsACF";
import { useEffect, useRef, useState } from "react";

export default function OurAmbition({data}:{data:OurAmbitionBlockAboutUsACF}) {
    const indicator = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setAnimate(true);
            } else {
              setAnimate(false);
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
    <div className="py-10 md:py-40 bg-gradient-to-b overflow-hidden from-[#92C0E9] to-[#F2F2F2]">
      <div ref={indicator} className="max-w-[1440px] mx-auto pl-6 pr-4 flex flex-col gap-4 md:gap-40">
        <h2 className="text-blue text-3xl md:text-5xl font-medium" id={data.content_id.split('#')[1]}>{data.title}</h2>
        <p className={`md:w-1/2 md:self-end transition-all delay-500 duration-[2000ms] ${animate && 'md:-translate-y-40'}`}>{data.description}</p>
      </div>
    </div>
  );
}