import React from "react";
import pic from "../../../public/images/pictures/ArrowRightWhite.svg";
import Image from "next/image";

function ArrowRightWhite() {
  return (
    <div>
      <Image src={pic} alt="arrow" />
    </div>
  );
}

export default ArrowRightWhite;
