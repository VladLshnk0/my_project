import type { MediaLinksACF } from "@/types/acf";
import Link from "next/link";

export default function SocialMedia({ media }: { media: MediaLinksACF }) {
  return (
    <div className="flex justify-center items-center gap-4 py-6 bg-blue w-full">
      <Link href={media.linkedin_url} target="__blant" className="h-12 w-12 flex justify-center items-center rounded-full bg-white text-blue font-bold leading-none text-4xl hover:scale-105 hover:text-turquoise transition-all duration-300">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-8 w-12 fill-current ">
          <path d="m0 0h20v20h-20z" fill="none" />
          <path d="m2.5 18h3v-11.1h-3zm1.5-16c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm6.6 6.6v-1.7h-3v11.1h3v-5.7c0-3.2 4.1-3.4 4.1 0v5.7h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
        </svg>
      </Link>
      <Link href={media.facebook_url} target="__blant" className="h-12 w-12 flex justify-center items-center rounded-full bg-white text-blue font-bold leading-none text-4xl hover:scale-105 hover:text-turquoise transition-all duration-300">f</Link>
    </div>
  );
}