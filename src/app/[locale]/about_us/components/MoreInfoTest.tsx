"use client";
import { useEffect, useRef, useState } from "react";
import IconPause from "./IconPause";
import IconPlay from "./IconPlay";
import type { MoreInfoBlockAboutUsACF } from "@/types/AboutUsACF";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

export default function MoreInfoTest({ data }: { data: MoreInfoBlockAboutUsACF }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
    const indicator = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.2, 2], { clamp: false });
  

  
  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div ref={indicator}
      className="pb-10 lg:pb-40 bg-[#92C0E9]"
    >
      <div className="max-w-[1440px] mx-auto overflow-x-clip flex justify-center items-center pr-4">
        <motion.div
          className={`relative z-50`}
            style={{ scale }}
            transition={{ duration: 0.5, delay: 0.5}}
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
        </motion.div>
        <div className="flex flex-col pl-6 lg:pl-0 gap-3 text-white">
            <motion.h2 className={`text-blue text-3xl hidden lg:block font-medium relative`}
             transition={{ duration: 2, delay: 1}}>{data.additional_info[0].title}</motion.h2>
        <div id="list"
          className={`flex flex-col gap-3 md:opacity-0 md:scale-0`}
        >
          {data.additional_info.map((info, index) => (
            <div key={index} className="flex gap-2">
              <div className="text-xl font-semibold">{info.numer_text}</div>
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