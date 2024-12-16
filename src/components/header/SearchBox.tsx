"use client";
import SearchBlueIcon from "@/app/[locale]/search/SearchBlueIcon";
import SearchIconWhite from "@/utils/components/SearchIconWhite";
import { searchGlobal } from "@/utils/fetchers/searchGlobal";
import useDebounce from "@/utils/hooks/useDebounce";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function SearchBox({ text }: { text: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  // const [searchResults, setSearchResults] = useState<any[]>([]);
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // useEffect(() => {
  //   if (debouncedSearchTerm.length > 0) {
  //     searchGlobal(debouncedSearchTerm).then((res) => {
  //       setSearchResults(res);
  //     });
  //   }
  // }, [debouncedSearchTerm]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    if (searchTerm.trim().length > 0) {
      router.push(`/search?searchText=${searchTerm}`);
      setSearchTerm("");
    }
  };
  const handleSearchSpeciel = () => {
      router.push(`/search`);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm.trim().length > 0){
      handleSearch();
    }
  };
  return (
    <>
    <div className="border border-turquoise bg-white h-11 px-2 my-4 hidden lg:flex flex-row items-center justify-between relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="h-full bg-white text-blue text-sm xl:text-base w-full outline-none"
        placeholder={text}
      />
        <SearchIconWhite handler={handleSearch}/>
      {/* {searchResults.length > 0 && (
        <ClickAwayListener onClickAway={() => {setSearchResults([]);setSearchTerm("")}}>
        <ul className="absolute bg-white px-1 z-50 left-0 border border-turquoise top-12 transition-colors flex flex-col gap-1">
          {searchResults.map((result, index) => (
            <Link href={result.content_id || "#"} key={index} onClick={() => {setSearchResults([]);setSearchTerm("")}} className="text-blue hover:text-turquoise py-1 border-b border-b-blue last:border-b-0">
              {result.content_id
                ? result.title ||
                  result.description?.slice(0, 15) ||
                  result.paragraph ||
                  result.text ||
                  result.fullname
                : ""}
            </Link>
          ))}
        </ul>
        </ClickAwayListener>
      )} */}
    </div>
    <div className="block lg:hidden text-white hover:text-turquoise">
      <SearchBlueIcon handler={handleSearchSpeciel}/>
    </div>
    </>
  );
}
