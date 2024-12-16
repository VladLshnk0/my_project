import { IntroductionCompaniesBlockACF } from "@/types/CompaniesACF";
import React from "react";
import Image from "next/image";

function Introduction({ props }: { props: IntroductionCompaniesBlockACF }) {
  const paragraphs = props.paragraphs.map((paragraph) => {
    if (paragraph.paragraph.includes(":")) {
      const split = paragraph.paragraph.split(":");
      return(
      <p className="text-lg sm:text-xl text-blue font-bold mt-4">
        {split[0]}: <span className="font-normal">{split[1]}</span>
      </p>
      )
    }
    return (
      <p className="text-lg sm:text-xl text-blue mt-4">{paragraph.paragraph}</p>
    );
  });

  return (
    <div className="default:w-[1440px] flex flex-col sm:flex-row justify-between mt-16 gap-8">
      <div className="sm:w-5/12">
        <h2
          className="text-3xl text-blue sm:text-5xl mb-8"
          id={props.content_id.split("#")[1]}
        >
          {props.title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg sm:text-xl text-blue mt-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="sm:w-7/12">
        <Image
          width={1440}
          height={800}
          src={props.image}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Introduction;
