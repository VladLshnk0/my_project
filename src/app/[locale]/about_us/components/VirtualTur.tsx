import PanoramView from "@/components/homepageComponents/PanoramView/PanoramView";
import type { VirtualTourBlockAboutUsACF } from "@/types/AboutUsACF";
import TestMap from "@/utils/components/Map/TestMap";

export default function VirtualTur({ data }: { data: VirtualTourBlockAboutUsACF}) {
  return (
    <div className="mb-20 flex flex-col gap-10">
      <div className="bg-turquoise">
      <div className="max-w-[1440px] pl-6 pr-6 py-10 mx-auto flex flex-col items-center justify-center gap-4 text-white">
      <h2 className="text-3xl md:text-5xl font-medium" id={data.content_id.split('#')[1]}>{data?.title}</h2>
        <p className=" text-lg md:w-1/2 text-center">{data?.description}</p>
      </div>
      </div>
      <div>
      <div className="max-w-[1440px] pl-6 pr-4 mx-auto">
        {/* <PanoramView /> */}
        <div className="w-full h-[600px]">
          <TestMap />
        </div>
      </div>
      </div>
    </div>
  );
}