import type { LinkACF } from "@/types/acf";
import Image from "next/image";
import Link from "next/link";

type HeroBlockProps = {
  title: string;
  banner: string;
  logo?: string;
  website: LinkACF;
  content_id: string;
};

export default function HeroBlock(props: HeroBlockProps) {
  return (
    <div className="h-[404px] relative">
      <Image
        src={props.banner}
        fill
        alt="Hero Image"
        className="object-cover"
      />
      <div className="relative z-40 text-white h-full max-w-[1440px] mx-auto pr-4 pl-6 flex flex-col justify-around">
        {props.logo && (
          <Image src={props.logo} width={267} height={100} alt="Logo" />
        )}
        <h1
          className="text-3xl md:text-6xl"
          id={props.content_id.split("#")[1]}
        >
          {props.title}
        </h1>
        {/* <Link
          href={props.website.link_url}
          target="_blank"
          className="py-2 border w-[200px] border-white text-center transition-colors hover:text-turquoise
        hover:border-turquoise"
        >
          {props.website.link_text}
        </Link> */}
      </div>
    </div>
  );
}
