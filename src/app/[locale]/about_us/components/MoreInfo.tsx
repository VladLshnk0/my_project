"use client";
import { useEffect, useRef, useState } from "react";
import IconPause from "./IconPause";
import IconPlay from "./IconPlay";
import type { MoreInfoBlockAboutUsACF } from "@/types/AboutUsACF";

export default function MoreInfo({ data }: { data: MoreInfoBlockAboutUsACF }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animation, setAnimation] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const indicator = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {       
            setAnimation(true);
        } else {
          setAnimation(false);
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
    <div
      className="py-10 lg:py-40 bg-[#92C0E9]"
    >
      <div className="max-w-[1440px] mx-auto overflow-x-clip flex justify-center items-center pr-4">
        <div
          className={`transition-all relative z-50 delay-1000 duration-[3000ms] ${
            animation ? "" : "scale-50 -translate-y-80"
          }`}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`hidden lg:flex justify-center border-2 border-white items-center left-[460px] bottom-[100px] text-white bg-gray opacity-70 absolute z-50 rounded-full h-12 w-12`}
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>
          <div
            className={`hidden lg:block rounded-full overflow-hidden relative right-52 h-[800px] w-[800px]`}
          >
            <video
              src={data.video_source}
              ref={videoRef}
              autoPlay
              loop
              muted
              itemType="video/mp4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div ref={indicator}></div>
        </div>
        <div className="flex flex-col pl-6 lg:pl-0 gap-3 text-white">
            <h2 className={`text-blue text-3xl hidden lg:block font-medium transition-all delay-500 duration-[2000ms] ${
            animation ? "scale-0 opacity-0 hidden" : "scale-100 opacity-100 -translate-y-80"
          }`} >{data.additional_info[0].title}</h2>
        <div
          className={`flex flex-col gap-3 transition-all delay-1000 duration-[3000ms] ${
            animation ? "md:opacity-100 md:scale-100" : "md:opacity-0 md:scale-0"
          }`}
        >
          {data.additional_info.map((info, index) => (
            <div key={index} className="flex gap-2">
              {/* <div className="text-xl font-semibold">{info.numer_text}</div> */}
              <div className="flex flex-col xl:gap-2">
                <h2 className="text-xl xl:text-2xl font-semibold" id={info.content_id.split('#')[1]}>
                  {info.title}
                </h2>
                <p className="lg:text-xs xl:text-base">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
