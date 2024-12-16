"use client";

import { useState } from "react";
import IconBurger from "./IconBurger";
import MobilMenu from "./MobilMenu";
import type { HeaderACF } from "@/types/acf";

export default function Burger({
  header,
  // translatedLinks,
  // contactUsText,
  // subMenuLinks,
}: {
  header: HeaderACF;
  // translatedLinks: string[];
  // contactUsText: string;
  // subMenuLinks: string[][];
}) {
  const [isOpen, setIsOpen] = useState(false);
  function openBurgerMenu() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }
  return (
    <div>
      {!isOpen ? (
        <div
          className="text-white transition-colors hover:text-turquoise cursor-pointer"
          onClick={openBurgerMenu}
        >
          <IconBurger />
        </div>
      ) : (
        <MobilMenu
          setIsOpen={setIsOpen}
          header={header}
          // translatedLinks={translatedLinks}
          // contactUsText={contactUsText}
          // subMenuLinks={subMenuLinks}
        />
      )}
    </div>
  );
}
