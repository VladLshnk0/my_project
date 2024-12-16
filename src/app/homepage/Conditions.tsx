"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ConditionsHomePage } from "@/types/acf";

type Props = {
  props: ConditionsHomePage;
};

function Conditions(props: Props) {

  const data = props.props;

  console.log(data);

  const [active, setActive] = useState(0);

  return (
    <div className="max-w-[1440px] w-full my-16 px-2 sm:px-4">
      <div className="flex flex-row justify-between items-center px-8 md:px-16">
        <span className="h-[1px] w-1/3 bg-[#04306E4D]/30" />
        <h2 className="text-3xl md:text-5xl font-medium uppercase">{data.title}</h2>
        <span className="h-[1px] w-1/3 bg-[#04306E4D]/30" />
      </div>
      <div className="flex flex-row flex-wrap gap-2 md:gap-8 justify-center mt-8 text-sm md:text-lg font-medium uppercase">
        <button
          disabled={active === 0}
          onClick={() => setActive(0)}
          className={
            active === 0 ? "py-2 px-2 border-b-4 border-[#009999]" : "py-2 px-2 "
          }
        >
          <span
            className={
              active === 0
                ? "text-black"
                : "text-black/50"
            }
          >
            Bestilling
          </span>
        </button>
        <button
          disabled={active === 1}
          onClick={() => setActive(1)}
          className={
            active === 1 ? "py-2 px-2 border-b-4 border-[#009999]" : "py-2 px-2"
          }
        >
          <span
            className={
              active === 1
                ? "text-black"
                : "text-black/50"
            }
          >
            Hente selv / Transport
          </span>
        </button>
        <button
          disabled={active === 2}
          onClick={() => setActive(2)}
          className={
            active == 2 ? "py-2 px-2 border-b-4 border-[#009999]" : "py-2 px-2"
          }
        >
          <span
            className={
              active == 2
                ? "text-black"
                : "text-black/50"
            }
          >
            Tilbakelevering
          </span>
        </button>
        <button
          disabled={active === 3}
          onClick={() => setActive(3)}
          className={
            active == 3 ? "py-2 px-2 border-b-4 border-[#009999]" : "py-2 px-2"
          }
        >
          <span
            className={
              active == 3
                ? "text-black"
                : "text-black/50"
            }
          >
            Betaling
          </span>
        </button>
      </div>
      {active === 0 && <div className="flex flex-col w-full justify-center h-full md:h-[500px] md:flex-row gap-12 mt-16">
        <div className="order-2 md:order-1 h-full basis-full md:basis-1/2">
          <Image
            src={data.order.image}
            alt="Conditions"
            width={640}
            height={581}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="order-1 h-full md:order-2 basis-full md:basis-1/2 flex flex-col gap-8 justify-between">
        <div className="h-full">
          <span className="text-[#009999] text-xl font-normal uppercase">
            {data.order.name}
          </span>
          <h2 className="text-2xl lg:text-4xl font-medium uppercase mt-2">
            {data.order.title}
          </h2>
          <p className="mt-4 text-lg font-light">
            {data.order.text}
          </p>
          </div>
          <Link
            href="/conditions/#01"
            className="bg-[#009999] border border-[#009999] p-2 lg:py-4 lg:px-8 rounded-full max-w-[33%] 
            transition-colors duration-500 hover:bg-transparent text-sm lg:text-lg font-semibold text-white
             hover:text-[#009999] text-center"
          >
              Les mer
          </Link>
        </div>
      </div>}
      {active === 1 && <div className="flex flex-col h-full md:h-[500px] w-full justify-center md:flex-row gap-12 mt-16">
        <div className="order-2 md:order-1 basis-full h-full md:basis-1/2">
          <Image
            src={data.transport.image}
            alt="Conditions"
            width={640}
            height={581}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="order-1 md:order-2 basis-full h-full md:h-[500px] md:basis-1/2 flex flex-col gap-8 justify-between">
        <div className="h-full">
          <p className="text-[#009999] text-xl font-normal uppercase">
            {data.transport.name}
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium uppercase mt-2">
            {data.transport.title}
          </h2>
          <p className="mt-4 text-lg font-light">
            {data.transport.text}
          </p>
        </div>
          <Link
            href="/conditions/#03"
            className="bg-[#009999] border border-[#009999] p-2 lg:py-4 lg:px-8 rounded-full max-w-[33%] 
            transition-colors duration-500 hover:bg-transparent text-sm lg:text-lg font-semibold text-white
             hover:text-[#009999] text-center"
          >
              Les mer
          </Link>
        </div>
      </div>}
      {active === 2 && <div className="flex flex-col w-full h-full md:h-[500px] justify-center md:flex-row gap-12 mt-16">
        <div className="h-full order-2 md:order-1 basis-full md:basis-1/2">
          <Image
            src={data.return.image}
            alt="Conditions"
            width={640}
            height={581}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="order-1 md:order-2 basis-full h-full md:basis-1/2 flex flex-col gap-8 justify-between">
        <div className="h-full">
          <p className="text-[#009999] text-xl font-normal uppercase">
            {data.return.name}
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium uppercase mt-2">
            {data.return.title}
          </h2>
          <p className="mt-4 text-lg font-light">
            {data.return.text}
          </p>
          </div>
          <Link
            href="/conditions/#04"
            className="bg-[#009999] border border-[#009999] p-2 lg:py-4 lg:px-8 rounded-full max-w-[33%] 
            transition-colors duration-500 hover:bg-transparent text-sm lg:text-lg font-semibold text-white
             hover:text-[#009999] text-center"
          >
              Les mer
          </Link>
        </div>
      </div>}
      {active === 3 && <div className="flex flex-col w-full h-full md:h-[500px] justify-center md:flex-row gap-12 mt-16">
        <div className="h-full order-2 md:order-1 basis-full md:basis-1/2">
          <Image
            src={data.payment.image}
            alt="Conditions"
            width={640}
            height={581}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="order-1 md:order-2 h-full basis-full md:basis-1/2 flex flex-col gap-8 justify-between">
        <div className="h-full">
          <p className="text-[#009999] text-xl font-normal uppercase">
            {data.payment.name}
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium uppercase mt-2">
            {data.payment.title}
          </h2>
          <p className="mt-4 text-lg font-light">
            {data.payment.text}
          </p>
          </div>
          <Link
            href="/conditions/#05"
            className="bg-[#009999] border border-[#009999] p-2 lg:py-4 lg:px-8 rounded-full max-w-[33%] 
            transition-colors duration-500 hover:bg-transparent text-sm lg:text-lg font-semibold text-white
             hover:text-[#009999] text-center"
          >
              Les mer
          </Link>
        </div>
      </div>}
    </div>
  );
}

export default Conditions;
