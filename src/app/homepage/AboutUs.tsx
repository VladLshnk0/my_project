import Link from "next/link";
import { AboutUsHomePage } from "@/types/acf";

type AboutUsProps = {
  props: AboutUsHomePage;
};

function AboutUs(props: AboutUsProps) {
  const data = props.props;

  return (
    <div className="h-full w-full max-w-[1440px] min-h-[488px] flex flex-col lg:flex-row gap-8 my-8 md:my-16 px-2 sm:px-4">
      <div className="w-full lg:w-1/2 flex flex-col h-full justify-center mt-8 md:mt-16">
        <p className="text-xl text-[#009999] uppercase">{data.small_title}</p>
        <h2 className="text-2xl lg:text-5xl font-medium uppercase mt-4 md:mr-16">
          {data.big_title}
        </h2>
        <p className="text-lg mt-6 mr-16">{data.text}</p>
        <Link
          href="/about_us"
          className="w-1/3 bg-[#009999] mt-12 flex items-center font-semibold text-white text-sm lg:text-lg justify-center h-12 lg:h-16 rounded-full"
        >
          {data.button_text}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row h-full md:h-[456px] gap-4">
        <div className="md:w-1/2 h-[256px] md:h-[456px]">
          <video
            src={data.video_one}
            loop
            autoPlay
            muted
            itemType="video/mp4"
            className="object-cover w-full h-full md:mt-16"
          />
        </div>
        <div className="md:w-1/2 h-[256px] md:h-[456px]">
          <video
            src={data.video_two}
            loop
            autoPlay
            muted
            itemType="video/mp4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
