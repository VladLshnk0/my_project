import type { FooterAboutUsBlockAboutUsACF } from "@/types/AboutUsACF";
import Image from "next/image";
import Link from "next/link";

export default function FooterBlock({ data }: { data: FooterAboutUsBlockAboutUsACF }) {
  return (
    <div className="h-[404px] relative">
      <Image src={data.background_image} fill alt="Hero Image" className="object-cover" />
      <div className="relative z-40 text-white h-full max-w-[1440px] mx-auto pr-4 pl-6 flex flex-col gap-2 justify-center items-start">
        <div className="flex flex-col gap-2 md:flex-row">
          <Link href={'/'}>
            <Image src={data.logo} width={200} height={200} alt="Footer Logo" />
          </Link>
          <p className="md:w-1/3 md:text-2xl" id={data.content_id.split('#')[1]}>{data.text}</p>
        </div>
        <Link href={'/contact_us'} className="border-2 py-2 ml-0 md:ml-8 w-[150px] text-center transition-colors border-blue bg-turquoise hover:border-white hover:bg-transparent">{data.button_text}</Link>
      </div>
    </div>
  );
}