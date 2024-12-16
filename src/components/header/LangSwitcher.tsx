// import { locales } from "@/types/constant";
import { useRouter, usePathname } from "next/navigation";
import { type ChangeEvent, useState } from "react";

export default function LangSwitcher() {
  // const [currentLang, setCurrentLang] = useState(lang.toUpperCase());
  // const justLangs = locales.map((locale) => locale.language.toUpperCase());
  // const uniqLangs = [...new Set(justLangs)];
  // const router = useRouter();
  // const pathname = usePathname();
  // function handlerChangeLang(e: ChangeEvent<HTMLSelectElement>) {
  //   setCurrentLang(e.target.value);
  //   const path = pathname.split("/").splice(2).join("/");
  //   router.push(`/${e.target.value.toLowerCase()}/${path}`);
  // }
  return (
      <div id="langswicher"></div>
          // <select
          //   name="languages"
          //   id="languages"
          //   value={currentLang}
          //   onChange={(e)=>handlerChangeLang(e)}
          //   className={`w-12 h-11 border text-sm bg-blue text-white border-turquoise flex items-center justify-center`}
          // >
          //   {uniqLangs.map((locale) => (
          //     <option key={locale} value={locale}>
          //       {locale}
          //     </option>
          //   ))}
          // </select>  
  );
}