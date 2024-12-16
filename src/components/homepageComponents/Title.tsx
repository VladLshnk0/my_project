'use client'
import { HeroBlockACF } from "@/types/acf";
import Link from "next/link";
import { useEffect, useRef } from "react";


function Title({ props }: { props: HeroBlockACF }) {

  const videoRef = useRef(null as any);

  const videoMobileRef = useRef(null as any);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  useEffect(() => {
    videoMobileRef.current.play();
  }, []);

  return (
    <div className='relative w-full h-screen xl:h-[800px] tall:h-[80vh] bg-blue/40 flex justify-center'>
      <video className='hidden md:block absolute object-cover -z-2 w-[100%] h-screen xl:h-[800px] tall:h-[80vh] opacity-60' src={props.video_url} loop autoPlay ref={videoRef} muted itemType='video/mp4' />
      <video className='block md:hidden absolute object-cover -z-2 w-[100%] h-screen xl:h-[800px] tall:h-[80vh] opacity-60' src={props.video_mobile_url} loop autoPlay ref={videoMobileRef} playsInline muted itemType='video/mp4' />
      <div className='relative default:w-[1440px] px-5 h-screen sm:h-full flex flex-col justify-between sm:justify-center py-16 sm:py-0'>
        <h2 className='text-white text-2xl sm:text-4xl lg:text-7xl' id={props.content_id.split('#')[1]}>
          {props.title.split('/n').map((line: string, index: number) => (
            <div key={index}>{line}</div>
          ))}
        </h2>
        <div className="flex flex-col gap-4 mt-16">
          <p className="text-white text-lg sm:text-xl lg:text-4xl">{props.get_started_text}</p>
          <Link
            href={'/contact_us'}
            className='w-48 border text-xl hover:border-white flex items-center justify-center mt-2 py-2 text-white transition-colors duration-200 bg-blue border-blue hover:bg-transparent'
          >
            {props.contact_button_text}
          </Link>
          {/* <button
            className='w-48 border text-xl hover:border-white flex items-center justify-center py-2 mt-12 text-white transition-colors duration-200 bg-blue border-blue hover:bg-transparent'
            >
            {props.get_started_button_text}
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Title