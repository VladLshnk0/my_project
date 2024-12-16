import { NextResponse, type NextRequest } from "next/server";
import { getStaticHeader } from "./utils/fetchers/getStaticHeader";
import { availableLanguages, defaultLocale } from "./types/constant";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const data = await getStaticHeader();
  // const availableLanguages = data.acf.available_languages.split(",").map((lang) => lang.trim());
  // const defaultLocale = availableLanguages[0];
  function getLocaleFromPathname(pathname: string) {
    const [, language, ...rest] = pathname.split("/");
    if (!language) {
      return null;
    }
    if(availableLanguages.includes(language)){
      return language;
    }else{
      return null;
    }
  }
  const locale = getLocaleFromPathname(pathname);
  const lang = request.cookies.get("norseaLang");
  if (locale === null) {
  if(lang?.value){
    if(pathname === "/our_sites"){
      return NextResponse.redirect(
        new URL(
          `/${lang.value}${pathname}/green_maritime${request.nextUrl.search}`,
          request.nextUrl.href
        )
      );
    }else{
      return NextResponse.redirect(
        new URL(
          `/${lang.value}${pathname}${request.nextUrl.search}`,
          request.nextUrl.href
        )
      );
    }

  }else{
    if(pathname === "/our_sites"){
      return NextResponse.redirect(
        new URL(
          `/${defaultLocale}${pathname}/green_maritime${request.nextUrl.search}`,
          request.nextUrl.href
        )
      );
    }else{
      return NextResponse.redirect(
        new URL(
          `/${defaultLocale}${pathname}${request.nextUrl.search}`,
          request.nextUrl.href
        )
      );
    }
  }
  } else {
    if(lang?.value){
      if(lang.value === locale){
        return NextResponse.next();
      }else{
        const response = NextResponse.next();
        if (locale) {
          response.cookies.set("norseaLang", locale, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          });
        }
        return response;
      }
    }else{
      const response = NextResponse.next();
      if (locale) {
        response.cookies.set("norseaLang", locale, {
          path: "/",
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        });
      }
      return response;
    }
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
