import React from "react";
import Image from "next/image";
import { ContactInfoHomePage } from "@/types/acf";

type Props = {
  props: ContactInfoHomePage;
};

function ContactInfo(props: Props) {
  const data = props.props;

  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-12 my-8 md:my-16 max-w-[1440px] w-full h-full md:h-[589px] px-2 sm:px-4">
      <div className="w-full h-full md:w-[50%] flex flex-col">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-medium uppercase">{data.title}</h2>
        <p className="mt-4 text-lg font-light">{data.text}</p>
        <p className="text-[#009999] text-lg md:text-xl lg:text-3xl font-normal uppercase w-[55%] my-4">
          {data.address_title}
        </p>
        {data.address.split(`\n`).map((line, index) => (
          <p key={index} className="text-lg font-light">
            {line}
          </p>
        ))}
        {/* <p className="mt-4 text-lg font-light">{data.address}</p> */}
        {/* <p className="text-lg font-light">4016 Stavanger</p> */}
        <p className="text-[#009999] text-lg md:text-xl lg:text-3xl font-normal uppercase w-[55%] my-4">
          {data.phone_title}
        </p>
        {data.phone.split(`\n`).map((line, index) => (
          <p key={index} className="text-lg font-light">
            {line}
          </p>
        ))}
        {/* <p className="mt-4 text-lg font-light">Arne Hatløy 908 84 354</p>
        <p className="text-lg font-light">Jan M. Nilsen 982 09 476</p> */}
        <p className="text-[#009999] text-lg md:text-xl lg:text-3xl font-normal uppercase w-[55%] mt-4">
          {data.email_title}
        </p>
        <p className="mt-4 text-lg font-light">{data.email}</p>
      </div>
      <div className="h-full w-full md:w-[50%]">
        <Image
          src={data.image.url}
          alt="Conditions"
          width={750}
          height={589}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default ContactInfo;
