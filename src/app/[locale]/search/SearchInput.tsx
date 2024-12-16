'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchBlueIcon from "./SearchBlueIcon";

export default function SearchInput({text}: {text: string}) {
    const [searchTerm, setSearchTerm] = useState(text);
    const router = useRouter();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && searchTerm.trim().length > 0){
            router.push(`/search?searchText=${searchTerm}`);
        }
    };
    const handleSearch = () => {
        if (searchTerm.trim().length > 0) {
            router.push(`/search?searchText=${searchTerm}`);
        }
    };
  return (
    <div className="flex items-center w-full p-3 border border-turquoise md:w-[80%]">
      <input type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="h-full bg-transparent text-gray text-lg md:text-base w-full outline-none"
        placeholder={"Search"} />
        <SearchBlueIcon handler={handleSearch}/>
    </div>
  );
}