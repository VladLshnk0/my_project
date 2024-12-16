import Image from "next/image";
import Link from "next/link";
import CartButton from "./cart/CartButton";
import SearchParamsControlled from "./SearchParamsControlled";
import { Suspense } from "react";

function Header() {

  return (
    <header className="min-h-24 bg-[#009999] w-full mx-auto flex justify-center">
      <div className="flex flex-row flex-wrap lg900:flex-nowrap items-center w-full justify-between h-24 max-w-[1440px] px-2 sm:px-4">
        <Link href={"/"} className="block order-1">
          <Image src="/images/logo.png" alt="logo" width={150} height={100} />
        </Link>
        <nav className="flex flex-row gap-2 sm:gap-4 order-3 lg900:order-2 text-xs xs400:text-sm sm:text-xl text-white uppercase font-light">
          <Link href={"/catalog"} className="hover:scale-105 transition-all duration-300">
              Utleie
          </Link>
          <Link href={"/conditions"} className="hover:scale-105 transition-all duration-300">
              Betingelser
          </Link>
          <Link href={"/partners"} className="hover:scale-105 transition-all duration-300">
              Samarbeidpartnere
          </Link>
          <Link href={"/about_us"} className="hover:scale-105 transition-all duration-300">
              Om oss
          </Link>
        </nav>
        <div className="flex flex-row items-center gap-4 order-2 lg900:order-3">
          <Link
            href={"/contact_us"}
            className="border border-white rounded-full py-2 px-2 sm:px-4 group hover:bg-white transition-all duration-500"
          >
            <span className="text-sm sm:text-xl text-white uppercase font-light group-hover:text-[#009999] transition-all duration-300">
              Kontakt
            </span>
          </Link>
          <CartButton />
        </div>
      </div>
      <Suspense fallback={null}><SearchParamsControlled /></Suspense>
    </header>
  );
}

export default Header;
