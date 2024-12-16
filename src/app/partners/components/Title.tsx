import { TopSectionPartners } from "@/types/acf";
import React from "react";
import Image from "next/image";

type TitleProps = {
  props: TopSectionPartners;
};

function Title(props: TitleProps) {

  const data = props.props;

  return (
    <div className="w-full max-w-[1440px] mt-32 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center px-2 sm:px-4 lg:px-16 w-full mb-16">
        <span className="h-[1px] w-1/3 bg-[#009999]" />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-medium text-black uppercase bg-white px-2 sm:px-4">
          {data.title}
        </h2>
        <span className="h-[1px] w-1/3 bg-[#009999]" />
      </div>
      <p className="text-center text-sm md:text-lg text-black w-full md:w-1/2 px-2 sm:px-4 pb-12">
        {data.text}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 w-full min-h-[584px]">
        <Image
          src={data.image_1.url}
          alt={""}
          width={364}
          height={486}
          className="xl:mt-10 object-cover h-full w-full"
        />
        <Image
          src={data.image_2.url}
          alt={""}
          width={364}
          height={486}
          className="object-cover h-full w-full mt-10 xl:mt-0"
        />
        <Image
          src={data.image_3.url}
          alt={""}
          width={364}
          height={486}
          className="xl:mt-10 object-cover h-full w-full"
        />
        <Image
          src={data.image_4.url}
          alt={""}
          width={364}
          height={486}
          className="mt-10 md:mt-0 object-cover h-full w-full"
        />
        <Image
          src={data.image_5.url}
          alt={""}
          width={364}
          height={486}
          className=" md:mt-10 xl:mt-0 object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Title;
