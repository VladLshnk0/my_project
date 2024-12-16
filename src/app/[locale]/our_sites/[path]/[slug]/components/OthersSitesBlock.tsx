import type { PostsACF } from "@/types/acf";
import Link from "next/link";
import ArrowRightWhite from "./ArrowRightWhite";

export default function OtherSitesBlock({other_sites, other_sites_text}: {other_sites: PostsACF[], other_sites_text: string}) {
  return (
    <div className="max-w-[1440px] mx-auto pr-4 pl-6 w-full">
        <div className="flex flex-col w-full gap-4 items-start">
            <h2 className="text-2xl md:text-4xl text-blue font-medium">{other_sites_text}</h2>
            <div className="flex justify-center flex-wrap w-full gap-5">
                {other_sites.map((site, index) => (
                    <Link href={site.acf.link.link_url} key={index} className="flex flex-col cursor-pointer transition-opacity opacity-100 hover:opacity-80 justify-between h-[416px] lg:basis-[31%] md:basis-[48%] basis-full" style={{
                      backgroundImage: `url(${site.acf.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}>
                      <span className="text-white font-medium mt-16 ml-4 mr-6">{site.acf.sub_title}</span>
                      <span className="text-white mb-4 ml-4 flex items-center gap-2 transition-colors hover:text-turquoise">
                      {site.acf.link.link_text}
                      <ArrowRightWhite/>
                      </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}