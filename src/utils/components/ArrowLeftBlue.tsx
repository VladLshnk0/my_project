import pic from "../../../public/images/pictures/ArrowLeftBlue.svg";
import Image from "next/image";

function ArrowLeftBlue({ disabled }: { disabled?: boolean }) {
  return (
    <span
      className={`transition-colors ${
        disabled === true
          ? "cursor-none text-gray"
          : "text-blue cursor-pointer hover:text-turquoise"
      } `}
    >
      <Image src={pic} alt="arrow" />
    </span>
  );
}

export default ArrowLeftBlue;
