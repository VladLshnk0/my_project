// import { googleTranslateArray } from "@/lib/googleTranslate";
import { LinkACF } from "@/types/acf";
import Link from "next/link";

export default async function FooterLinks({links}: {links: LinkACF[]}) {
    // const text_links = links.map((link) => link.link_text);
    // const translatedLinks = await googleTranslateArray(text_links, lang);
  return (
    <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
            <li key={index}>
            <Link href={link.link_url} className="text-blue text-sm xl:text-base hover:text-turquoise transition-color duration-200">
                {link.link_text}
            </Link>
            </li>
        ))}
    </ul>
  );
}