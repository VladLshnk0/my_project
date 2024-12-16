import Image from "next/image";
import type { HeaderACF } from "@/types/acf";
import Link from "next/link";
import SubMenu from "./SubMenu";
import Burger from "./Burger";
import LangSwitcher from "./LangSwitcher";
import SearchBox from "./SearchBox";
import { getStaticHeader } from "@/utils/fetchers/getStaticHeader";
// import { googleTranslate, googleTranslateArray } from "@/lib/googleTranslate";

async function Header() {
  const header = await getStaticHeader();
  // let subMenuLinks:string[][] = [];
  // const links = header.acf.navigation.map((item) => {
  //   if(item.sub_menu) {
  //     const subLinks = item.sub_menu.map((sub) => sub.sub_link.link_text);
  //     if(subLinks) {
  //       subMenuLinks.push(subLinks);
  //     }else{
  //       subMenuLinks.push([]);
  //     }
  //   }
  //   return item.link.link_text
  // });
  // if(subMenuLinks.length > 0){
  //   subMenuLinks = await Promise.all(subMenuLinks.map(async (subLinks) => {
  //     if(subLinks.length > 0){
  //       const temp = await googleTranslateArray(subLinks, lang);
  //       return temp;
  //     }else{return []};
  //   }));
    
  // } 

  // const translatedLinks = await googleTranslateArray(links, lang);
  // const searchText = await googleTranslate(header.acf.search_text, lang);
  // const contactUsText = await googleTranslate(header.acf.contact_us.link_text, lang);
  return (
    <header className="bg-blue">
    <div className="max-w-[1440px] mx-auto flex flex-row items-center justify-between pr-4">
      <div className="flex items-center">
        <Link href={"/"}><Image src={header.acf.logo} width={140} height={80} alt={"Logo"} /></Link>
        <nav className="hidden md:flex w-full items-center gap-[8px] lg:gap-[16px]">
          {header.acf.navigation.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full"
            >
              {item.sub_menu ? (
                <SubMenu text={item.link.link_text} submenu={item.sub_menu} 
                //subMenuLinks={subMenuLinks[index]} 
                />
              ) : (
                <Link
                  href={item.link.link_url}
                  className={`text-white text-[14px] xl:text-[16px] transition-all duration-100 hover:scale-105`}
                  style={{ whiteSpace: item.link.link_text.length < 30 ? "nowrap" : "normal" }}
                >
                  {item.link.link_text}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <SearchBox text={header.acf.search_text} />
        <Link
          href={header.acf.contact_us.link_url}
          className="h-11 border border-turquoise text-sm xl:text-base bg-turquoise px-3 hidden md:flex items-center justify-center transition-colors hover:bg-transparent text-white whitespace-nowrap"
        >
          {header.acf.contact_us.link_text}
        </Link>
        <div className="block md:hidden">
            <Burger header={header}
            // translatedLinks={translatedLinks} 
            // contactUsText={contactUsText}
            // subMenuLinks={subMenuLinks}
            />
        </div>
        
        <LangSwitcher />
      </div>
    </div>
    </header>
  );
}

export default Header;
