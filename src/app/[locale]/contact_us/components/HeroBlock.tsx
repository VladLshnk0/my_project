import { HeroBlockContactUsACF } from "@/types/ContactUsACF";
import React from "react";
import Image from "next/image";

function HeroBlock({ props }: { props: HeroBlockContactUsACF }) {
  return (
    <div className="pt-80"
      // className="flex flex-col mt-10 md:mt-20"
    >
      {/* <div className="flex flex-col gap-5 md:gap-20 mx-10 mb-10 md:mb-20">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between order-2 md:order-1">
          {props.contacts.slice(0, 2).map((contact, index) => (
            <div
              key={index}
              className="flex flex-col md:p-0 md:border-0 p-16 border-2 border-gray md:basis-1/4 text-blue justify-center text-left md:text-xl font-semibold"
              id={contact.content_id?.split("#")[1]}
            >
              <span>{contact.text}</span>
              <span>{contact.information}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center order-1 md:order-2 lg:mr-20">
          <h2
            className="text-5xl md:text-[80px] text-light-blue"
            id={props.content_id.split("#")[1]}
          >
            {props.title}
          </h2>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between order-3">
          {props.contacts.slice(-2).map((contact, index) => (
            <div
              key={index}
              className="flex flex-col md:p-0 md:border-0 p-16 border-2 border-gray md:basis-1/4 text-blue justify-center text-left md:text-xl font-semibold"
              id={contact.content_id?.split("#")[1]}
            >
              <span>{contact.text}</span>
              <span>{contact.information}</span>
            </div>
          ))}
        </div>
      </div> */}
      <div className="">
        <Image
          src={props.default_image}
          alt="default image"
          width={1440}
          height={484}
        />
      </div>
      {/* <div className="flex flex-col divide-y-2 divide-gray w-full gap-8 pb-16">
        {props.contact_people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pt-4"
            id={person.content_id?.split("#")[1]}
          >
            <p className="text-xl text-blue md:text-3xl md:basis-1/3">
              {person.place_description}
            </p>
            <div className="flex flex-col gap-2 md:basis-1/3">
              <h4 className="text-3xl font-medium text-blue">
                {person.full_name}
              </h4>
              <p className="text-lg text-blue">{person.about_person}</p>
            </div>
            <div className="flex flex-col font-medium gap-2 md:basis-1/3">
              <div className="flex gap-2 justify-start">
                <span className="text-blue basis-1/2">{person.phone.text}:</span>
                <span className="text-turquoise basis-1/2">
                  {person.phone.information}
                </span>
              </div>
              <div className="flex gap-2 justify-start">
                <span className="text-blue basis-1/2">{person.email.text}:</span>
                <span className="text-turquoise basis-1/2">
                  {person.email.information}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default HeroBlock;
