'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ManBlue from "../ManBlue";
import ManOrange from "../ManOrange";
import ManRed from "../ManRed";

export default function TestMap() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  useEffect(() => {
    const yakor = sessionStorage.getItem("yakor");
    if (!searchParams.has("map")) {
      if(yakor && yakor.length > 0){
        window.location.href = `${pathName}#${yakor}?map=true&${searchParams.toString()}`;
      }else{
        window.location.href = `${pathName}?map=true&${searchParams.toString()}`;
      }
    }
  }, []);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-end mb-2 gap-6">
        <div className="flex flex-row gap-2 items-center">
          <ManBlue />
          <span className="text-blue font-light text-lg">With BIO3</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <ManOrange />
          <span className="text-blue font-light text-lg">General view of site</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <ManRed />
          <span className="text-blue font-light text-lg">Where are you now</span>
        </div>
      </div>
      <div id="NorSeaWidgetArea" className="w-full h-full"></div>
    </>
  );
}
