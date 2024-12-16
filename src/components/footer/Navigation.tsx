// import { googleTranslateArray } from "@/lib/googleTranslate";
import type { ColumnACF } from "@/types/acf";
import FooterLinks from "./FooterLinks";
import Link from "next/link";
import ArrowRightWhite from "@/utils/components/ArrowRightWhite";

export default async function Navigation({
  navigation,
}: {
  navigation: ColumnACF[];
}) {
  // const titles = navigation.map((column) => column.title);
  // const translatedTitles = await googleTranslateArray(titles, lang);
  return (
    <nav className="w-[99%] max-w-[1440px] pb-2 pt-6 px-4 flex flex-col md:flex-row justify-between gap-4 md:gap-10 xl:gap-16">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 xl:gap-16">
        {navigation.map((column, index) => (
          <div key={index}>
            {column.title ? (
              <h2 className="text-blue text-xl uppercase mb-2 xl:text-2xl font-semibold">
                {column.title}
              </h2>
            ) : (
              <h2 className="text-blue text-xl uppercase mb-2 h-8 xl:text-2xl font-semibold" />
            )}
            <FooterLinks links={column.footer_links} />
          </div>
        ))}
      </div>
      <div className="place-content-end flex flex-col gap-4 min-w-26%]">
        <h2 className="text-blue text-xl font-medium">Visit our main page:</h2>
        <div className="w-full h-16 flex flex-row gap-2 items-center border-2 border-blue bg-white p-2">
          <p className="text-blue min-w-1/2">Welcome to NorSea Group</p>
          <Link
            href={"http://www.norseagroup.com"}
            target="_blank"
            className="text-xl border border-turquoise flex gap-2 items-center justify-center p-2 text-white
                  transition-colors duration-500 bg-turquoise group"
          >
            <p className="group-hover:translate-x-1 transition-all duration-200">Visit Site</p>
            <div className="group-hover:translate-x-1 transition-all duration-200">
              <ArrowRightWhite />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
