import type { HeaderACF } from "@/types/acf";
import Image from "next/image";
import IconX from "./IconX";
import Link from "next/link";
import IconArrowDown from "./IconArrowDown";
import { useState } from "react";
import LangSwitcher from "./LangSwitcher";

export default function MobilMenu({
  setIsOpen,
  header,
  // translatedLinks,
  // contactUsText,
  // subMenuLinks
}: {
  setIsOpen: (isOpen: boolean) => void;
  header: HeaderACF;
  // translatedLinks: string[], contactUsText: string, subMenuLinks: string[][]
}) {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  function closeMobileMenu() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div className="fixed overflow-hidden z-[1000] top-0 left-0 right-0 bottom-0 w-screen h-screen bg-blue flex flex-col justify-between">
      <div>
      <div className="flex justify-between items-center mr-4">
        <Image src={header.acf.logo} width={120} height={80} alt={"Logo"} />
        <div
          className="text-white transition-colors hover:text-turquoise cursor-pointer"
          onClick={closeMobileMenu}
        >
          <IconX />
        </div>
      </div>
      <nav className="flex flex-col gap-2 w-36 ml-4" id="mobil-menu">
        {header.acf.navigation.map((item, index) => (
          <div key={index} className="flex flex-col">
            {item.sub_menu ? (
              <div>
                <button
                  onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}
                  className="text-white flex items-center gap-1 transition-underline hover:underline whitespace-nowrap"
                >
                  {item.link.link_text}
                  <IconArrowDown isDown={!isOpenSubMenu} />
                </button>
                {isOpenSubMenu && (
                  <ul className="pl-4">
                    {item.sub_menu.map((sub, i) => (
                      <li key={i} className="py-1">
                        <Link
                          onClick={closeMobileMenu}
                          href={sub.sub_link.link_url}
                          className="hover:text-turquoise text-white font-semibold transition-colors whitespace-nowrap"
                        >
                          {sub.sub_link.link_text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                onClick={closeMobileMenu}
                href={item.link.link_url}
                className="text-white transition-underline hover:underline whitespace-nowrap"
              >
                {item.link.link_text}
              </Link>
            )}
          </div>
        ))}
        <Link
          onClick={closeMobileMenu}
          href={header.acf.contact_us.link_url}
          className="text-white transition-underline hover:underline whitespace-nowrap"
        >
          {header.acf.contact_us.link_text}
        </Link>
      </nav>
      </div>
      <div className="flex self-end mb-4 mr-4">
        <LangSwitcher />
      </div>
    </div>
  );
}
