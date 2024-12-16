import type { IndustrialBlockACF } from "@/types/acf";
import ArrowRightWhite from "@/utils/components/ArrowRightWhite";
import Image from "next/image";
import Link from "next/link";

export default function IndustrialBlock({ props }: { props: IndustrialBlockACF }) {
  return (
    <div className="w-full max-w-[1440px] ">
      {/* <div className="sm:max-w-[1440px] w-full mx-auto items-center flex flex-col gap-8">
        <h1 id={props?.content_id.split('#')[1]} className="text-center text-blue md:mx-5 mx-0 text-3xl md:text-4xl lg:text-5xl font-medium">{props?.title}</h1>
        <div className="w-[100px] h-[3px] bg-turquoise" />
        <p className="text-center text-lg md:w-1/2 text-blue mx-5 md:mx-0">{props?.description}</p>
      </div> */}
      <div className="flex flex-col gap-8 w-full h-full bg-[#002949]">
        <div className="max-w-[1440px] h-1/2 flex flex-col md:flex-row gap-4 justify-center items-center mx-auto">
          <Image src={props?.shema_image} alt={props?.title} width={1152} height={643} className="object-cover md:w-1/2 h-full" />
          <div className="md:w-1/2 flex flex-col gap-4 mx-5 md:px-0">
            <h2 className="text-3xl md:text-5xl text-turquoise">{props?.title_description_2}</h2>
            <p className="text-left text-xl md:text-2xl  text-white">{props?.description_2}</p>
          </div>
        </div>
        <div className="flex flex-col max-w-[1440px] mx-auto justify-center gap-4 w-full h-1/2 min-h-[410px] relative">
          <Image src={props?.bg_image} alt={props?.title} width={1440} height={410} className="object-cover w-full h-full absolute top-0 left-0 z-0" />
          <div className=" bg-gradient-to-r from-[#002949]  absolute h-full w-full z-5" />
          <div className="bg-[#002949]/30 absolute h-full w-full z-5" />
          <div className="relative z-10 md:w-1/2 px-5 md:px-16">
            <p className="text-left text-xl md:text-2xl w-full text-white">{props?.description_3}</p>
            <div className="flex flex-row gap-4 mt-8">
              <Link href={props?.button_1?.link_url || "/"} className='relative w-[50%] md:w-48 bg-turquoise border text-xl flex items-center justify-center py-2 mt-2 text-white transition-colors duration-200 hover:bg-blue border-turquoise hover:bg-transparent'>
                <p className="text-xl mt-1 text-right">{props?.button_1.link_text}</p>
                <div className="absolute ml-2 right-2 md:right-4">
                  <ArrowRightWhite />
                </div>
              </Link>
              <Link href={props?.button_2?.link_url || "/"} className='relative w-[50%] md:w-48 bg-turquoise border text-xl flex items-center justify-center py-2 mt-2 text-white transition-colors duration-200 hover:bg-blue border-turquoise hover:bg-transparent'>
                <p className="text-xl mt-1 text-right">{props?.button_2.link_text}</p>
                <div className="absolute ml-2 right-2 md:right-4">
                  <ArrowRightWhite />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/*  */ }