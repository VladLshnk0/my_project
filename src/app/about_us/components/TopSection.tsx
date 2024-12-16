import Link from "next/link";
import { TopSectionAboutUs } from "@/types/acf";
import Image from "next/image";

type Props = {
  props: TopSectionAboutUs;
};

function TopSection(props: Props) {

  const data = props.props;

  return (
    <section className="relative h-full w-full max-h-[546px] max-w-[1440px]">
    <div className="absolute top-0 left-0 w-full h-[546px] -z-10">
      <Image
        src={data.background.url}
        alt={""}
        width={1440}
        height={546}
        quality={100}
        className="h-[546px] object-cover"
      />
      <div className="absolute w-full h-full bg-black/10 top-0 left-0" />
        
      </div>
      <div className="md:w-full px-2 md:px-16 h-[546px] flex flex-col items-center justify-end py-24">
        <div className="flex flex-row justify-between items-center px-16 w-full">
          <span className="h-[1px] w-1/3 bg-[#009999]" />
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-white uppercase">{data.title}</h2>
          <span className="h-[1px] w-1/3 bg-[#009999]" />
        </div>
        <span
          className="border block border-white py-4 px-8 rounded-full mt-8 max-w-[33%]"
        >
          <p className="text-xs sm:text-lg font-normal text-white w-full text-center">
            {data.button_text}
          </p>
        </span>
        <Link href={'#yakor'} scroll={true} className="block border border-white rounded-full p-4 mt-8">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5298 18.53L16.5298 27.53C16.3892 27.6705 16.1986 27.7493 15.9998 27.7493C15.8011 27.7493 15.6105 27.6705 15.4698 27.53L6.46985 18.53C6.33737 18.3878 6.26524 18.1998 6.26867 18.0055C6.2721 17.8112 6.35081 17.6258 6.48822 17.4884C6.62564 17.351 6.81102 17.2723 7.00532 17.2688C7.19963 17.2654 7.38767 17.3375 7.52985 17.47L15.2498 25.1887V5C15.2498 4.80109 15.3289 4.61032 15.4695 4.46967C15.6102 4.32902 15.8009 4.25 15.9998 4.25C16.1988 4.25 16.3895 4.32902 16.5302 4.46967C16.6708 4.61032 16.7498 4.80109 16.7498 5V25.1887L24.4698 17.47C24.612 17.3375 24.8001 17.2654 24.9944 17.2688C25.1887 17.2723 25.3741 17.351 25.5115 17.4884C25.6489 17.6258 25.7276 17.8112 25.731 18.0055C25.7344 18.1998 25.6623 18.3878 25.5298 18.53Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default TopSection;
