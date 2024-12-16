import type { HeroBlockAboutUsACF } from "@/types/AboutUsACF";
import Image from "next/image";

export default function HeroBlock({ data }: { data: HeroBlockAboutUsACF }) {
  return (
    <div className="h-[404px] relative mb-10">
      <Image src={data.image} fill alt="Hero Image" className="object-cover" />
      <div className="relative z-40 text-white h-full max-w-[1440px] mx-auto pr-4 pl-6 flex flex-col justify-center">
        <h1 className="text-3xl md:text-6xl" id={data.content_id.split('#')[1]}>{data.title}</h1>
        <p className="md:w-1/3" id="about-us-page">{data.description}</p>
      </div>
    </div>
  );
}
