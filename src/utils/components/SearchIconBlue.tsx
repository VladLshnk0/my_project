import React from "react";
import pic from "../../../public/images/pictures/SearchIconBlue.svg";
import Image from "next/image";

function SearchIconBlue() {
  return (
    <div>
      <Image src={pic} alt="arrow" />
    </div>
  );
}

export default SearchIconBlue;
