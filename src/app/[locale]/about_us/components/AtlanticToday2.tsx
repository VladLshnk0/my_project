import type { AtlanticTodayBlockAboutUsACF } from "@/types/AboutUsACF";
import Image from "next/image";

export default function AtlanticToday2({
  data,
}: {
  data: AtlanticTodayBlockAboutUsACF;
  text: string;
}) {

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-5 max-w-[1440px] mx-auto pl-6 pr-4 mb-20 mt-32 md:mt-0">
      <div className="h-[400px] w-full basis-full md:basis-1/2 order-2 md:order-1">
      <Image
            src={data.poster}
            width={400}
            height={400}
            alt="Atlantic Today Image"
            className={`object-fill w-full h-full`}
          />
      </div>
      <div className="flex flex-col gap-5 basis-full md:basis-1/2 order-1 md:order-2">
        <h2
          id={data.content_id.split("#")[1]}
          className={`text-blue text-2xl md:text-5xl font-medium`}
        >
          {data.title}
        </h2>
        <p className="text-blue text-xl">{data.description}</p>
      </div>
    </div>
  );
}
