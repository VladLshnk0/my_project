import { MoreInfoBlockAboutUsACF } from "@/types/AboutUsACF";
import Image from "next/image";
import VideoComponent from "./VideoComponent";

export default function MoreInfo2({ data }: { data: MoreInfoBlockAboutUsACF }) {
  return (
    <div className="flex flex-col gap-10 max-w-[1440px] pl-6 pr-4 mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-xl">
        <div className="p-10 text-blue bg-light-blue md:col-span-3">
          <h2
            className="text-2xl font-semibold mb-5"
            id={data.additional_info[0].content_id.split("#")[1]}
          >
            {data.additional_info[0].title}
          </h2>
          <p>{data.additional_info[0].description}</p>
        </div>
        <div className="p-10 text-white bg-turquoise md:col-span-2">
          <h2
            className="text-2xl font-semibold mb-5"
            id={data.additional_info[1].content_id.split("#")[1]}
          >
            {data.additional_info[1].title}
          </h2>
          <p>{data.additional_info[1].description}</p>
        </div>
        <div className="p-10 text-white bg-turquoise md:col-span-2">
          <h2
            className="text-2xl font-semibold mb-5"
            id={data.additional_info[2].content_id.split("#")[1]}
          >
            {data.additional_info[2].title}
          </h2>
          <p>{data.additional_info[2].description}</p>
        </div>
        <div className="p-10 text-blue bg-light-blue md:col-span-3">
          <h2
            className="text-2xl font-semibold mb-5"
            id={data.additional_info[3].content_id.split("#")[1]}
          >
            {data.additional_info[3].title}
          </h2>
          <p>{data.additional_info[3].description}</p>
        </div>
        <div className="p-10 text-white bg-grass md:col-span-3">
          <h2
            className="text-2xl font-semibold mb-5"
            id={data.additional_info[4].content_id.split("#")[1]}
          >
            {data.additional_info[4].title}
          </h2>
          <p>{data.additional_info[4].description}</p>
        </div>
        <div className="md:col-span-2 h-[300px]">
        <Image src={data.some_image} width={468} height={398} alt="Some image" className="w-full h-full object-cover"/>
        </div>
      </div>
      <h2 className="text-3xl text-blue font-semibold">{data.video_text}</h2>
      <VideoComponent video={data.video_source} poster={data.video_poster}/>
    </div>
  );
}
