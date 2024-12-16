// import { googleTranslate } from "@/lib/googleTranslate";
import type { FooterGroupACF } from "@/types/acf";
import Link from "next/link";

export default async function CopyRight({copyright}:{copyright: FooterGroupACF}) {
    // const right_text = await googleTranslate(copyright.all_right_text, lang);
    // const policy_text = await googleTranslate(copyright.link_privacy_policy.link_text, lang);
  return (
    <div className="max-w-[1440px] p-4 flex flex-col gap-2 md:flex-row justify-between text-blue text-sm xl:text-base w-full">
        <span className="order-2 md:order-1">{copyright.all_right_text}</span>
        <div className="order-1 md:order-2 flex flex-col md:flex-row gap-2">
        <Link href={copyright.link_privacy_policy.link_url} className="hover:text-turquoise transition-all duration-100">{copyright.link_privacy_policy.link_text}</Link>
        <Link href={copyright.link_terms.link_url} className="hover:text-turquoise transition-all duration-100">{copyright.link_terms.link_text}</Link>
        </div>
    </div>
  );
}