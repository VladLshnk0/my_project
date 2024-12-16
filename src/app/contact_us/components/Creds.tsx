import Image from "next/image";
import { InfoContactUs } from "@/types/acf";

type CredsProps = {
  props: InfoContactUs;
};

function Creds(props: CredsProps) {
  const {
    title,
    text,
    address_title,
    address,
    phone_title,
    phone,
    email_title,
    email,
    image,
  } = props.props;

  return (
    <div className="w-full max-w-[1440px] mt-16 flex flex-col md:flex-row gap-8 px-2 sm:px-4">
      <div className="w-full md:w-[50%] flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium uppercase">{title}</h2>
        <p className="text-lg font-light mt-4">{text}</p>
        <h3 className="mt-8 text-base sm:text-2xl font-medium uppercase text-[#009999]">
          {address_title}
        </h3>
        <p className="text-lg font-light mt-4 w-1/3">{address}</p>
        <h3 className="mt-8 text-base sm:text-2xl font-medium uppercase text-[#009999]">
          {phone_title}
        </h3>
        <div className="text-lg mt-4 flex flex-col">
          {phone.split("\n").map((phoneData, index) => (
            <div key={index} className="flex flex-row  gap-2">
              <p className="">{phoneData.split("#")[0]}</p>
              <p className="font-light">{phoneData.split("#")[1]}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-8 text-base sm:text-2xl font-medium uppercase text-[#009999]">
          {email_title}
        </h3>
        <p className="text-lg font-medium mt-4">{email}</p>
      </div>
      <Image
        src={image.url}
        alt="contact us"
        width={1440}
        height={1080}
        className="w-full md:w-[50%] h-full object-contain"
      />
    </div>
  );
}

export default Creds;
