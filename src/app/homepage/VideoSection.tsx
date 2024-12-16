import Link from "next/link";
import { VideoSectionHomePage } from "@/types/acf";

type Props = {
  props: VideoSectionHomePage;
};

function VideoSection(props: Props) {
  const data = props.props;

  return (
    <section className="relative w-full max-w-[1440px] h-[400px] md:h-[800px] tall:h-[80vh] md:mb-16">
      <video
        className="block absolute object-cover -z-2 w-[100%] h-[400px] md:h-[800px] tall:h-[80vh]"
        src={data.video}
        loop
        autoPlay
        muted
        itemType="video/mp4"
      />
      <div className="relative md:w-full px-2 md:px-16 h-full flex flex-col items-center justify-center py-4 md:py-16 bg-black/50">
        <h2 className="text-white text-xl md:text-3xl lg:text-5xl text-center uppercase">
          {data.text}
        </h2>
        <Link
          href="/contact_us"
          className="border-2 border-[#009999] text-sm md:text-lg hover:bg-[#009999] transition-colors duration-500 font-semibold text-white w-full text-center py-4 px-8 rounded-full mt-20 max-w-[33%]"
        >
            {data.button_text}
        </Link>
      </div>
    </section>
  );
}

export default VideoSection;
