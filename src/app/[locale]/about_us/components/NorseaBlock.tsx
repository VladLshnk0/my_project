import type { NorseaBlockAboutUsACF } from "@/types/AboutUsACF";
import Gallery from "./Gallery";

export default function NorseaBlock({data}: {data: NorseaBlockAboutUsACF}) {
  return (
    <div className="flex flex-col md:flex-row gap-5 max-w-[1440px] pl-6 pr-4 mx-auto mb-10 text-blue">
      <div className="basis-full md:basis-1/2 md:mt-14">
      <h2 className="text-2xl md:text-5xl font-medium" id={data.content_id.split('#')[1]}>{data.title}</h2>
      <p className="mt-8 text-xl">{data.description}</p>
      </div>
      <Gallery images={data.gallery}/>
    </div>
  );
}