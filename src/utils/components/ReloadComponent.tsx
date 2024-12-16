'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ReloadComponent() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  useEffect(() => {
    const yakor = sessionStorage.getItem("yakor");
    if (!searchParams.has("currentLang")) {
      if(yakor && yakor.length > 0){
        window.location.href = `${pathName}#${yakor}?currentLang=true&${searchParams.toString()}`;
      }else{
        window.location.href = `${pathName}?currentLang=true&${searchParams.toString()}`;
      }
    }
  }, []);
  return (
    <>
    </>
  );
}
