import Image from "next/image";
import { TopSectionHomePage } from "@/types/acf";

type TopSectionProps = {
  props: TopSectionHomePage;
};

function TopSection(props: TopSectionProps) {
  const data = props.props;

  return (
    <div className="relative h-full w-full max-h-[546px] max-w-[1440px]">
      <div className="absolute top-0 left-0 w-full h-[546px] -z-10">
        <Image
          src="/images/topsection1.jpg"
          alt={""}
          width={1440}
          height={546}
          quality={100}
          className="h-[546px] object-cover"
        />
        <div className="absolute w-full h-full bg-black/10 top-0 left-0" />
      </div>
      <div className="p-8 md:p-16 md:w-1/2 flex flex-col justify-between h-[546px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-5xl 2xl:text-7xl font-medium text-white">
            {data.title}
          </h2>
          {data.text.split('\n').map((text, index) => (
            <p key={index} className="text-lg font-normal text-white">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSection;
