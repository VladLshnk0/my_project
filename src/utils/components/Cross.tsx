import React from "react";
import pic from "../../../public/images/pictures/Cross.svg";
import Image from "next/image";

function Cross() {
  return (
    <div>
      <Image src={pic} alt="arrow" />
    </div>
  );
}

export default Cross;
