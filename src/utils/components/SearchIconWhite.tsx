import pic from "../../../public/images/pictures/SearchIconWhite.svg";
import Image from "next/image";

function SearchIconWhite({ handler }: { handler: () => void }) {
  return (
    <div
      onClick={handler}
      className="text-gray hover:text-blue transition-colors cursor-pointer"
    >
      <Image src={pic} alt="arrow" />
    </div>
  );
}

export default SearchIconWhite;
