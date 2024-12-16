"use client";
import ClickAwayListener from "react-click-away-listener";
import type { SubMenuACF } from "@/types/acf";
import Link from "next/link";
import { useState } from "react";
import IconArrowDown from "./IconArrowDown";

export default function SubMenu({
  text,
  submenu,
  // subMenuLinks,
}: {
  text: string;
  submenu: SubMenuACF[];
  // subMenuLinks: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-white text-sm xl:text-base flex gap-4 items-center transition-all duration-100 hover:scale-105 ${
            text.length < 20 ? "text-nowrap" : ""
          }`}
        >
          {text}
          <IconArrowDown isDown={!isOpen} />
        </button>
        {isOpen && (
          <ul className="absolute bg-bg-color p-2" id="dynamic-sub-menu">
            {submenu.map((sub, index) => (
              <li key={index} className="py-1">
                <Link
                  href={sub.sub_link.link_url}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-turquoise transition-colors whitespace-nowrap"
                >
                  {sub.sub_link.link_text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
}
