import React from "react";
import Image from "next/image";
import { OurVisionType } from "@/types/acf";

type Props = {
  props: OurVisionType;
};

function OurVision(props: Props) {

  const data = props.props;

  return (
    <div className="w-full max-w-[1440px] px-2 sm:px-4">
      <div className="flex items-start">
        <div className="border border-[#009999] py-2 md:py-4 px-4 md:px-8 rounded-full my-16 max-w-48">
          <p className="text-sm md:text-lg font-normal text-[#009999] w-full text-center">
            {data.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 lg:gap-16">
          <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
            {data.title_1}
          </h2>
          <p className="text-black text-sm md:text-lg lg:mr-16">
            {data.text_1}
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-8 lg:gap-16">
          <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
            {data.title_2}
          </h2>
          <p className="text-black text-sm md:text-lg lg:mr-16">
            {data.text_2}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-4 mt-16 lg:mt-32">
        <div className="h-[400px] lg:h-[590px] bg-slate-600 w-full">
        <video
            src={data.video_2}
            loop
            autoPlay
            muted
            itemType="video/mp4"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[400px] lg:h-[590px] bg-slate-600 w-full">
        <video
            src={data.video_1}
            loop
            autoPlay
            muted
            itemType="video/mp4"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[400px] lg:h-[590px] bg-slate-600 w-full">
        <video
            src={data.video_3}
            loop
            autoPlay
            muted
            itemType="video/mp4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default OurVision;
