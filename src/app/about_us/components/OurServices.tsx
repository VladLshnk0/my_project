import Image from "next/image";
import { OurServicesType } from "@/types/acf";

type Props = {
  props: OurServicesType;
};

function OurServices(props: Props) {

  const data = props.props;

  return (
    <div className="w-full max-w-[1440px] px-2 sm:px-4">
      <div className="flex items-start">
        <div className="border border-[#009999] py-2 md:py-4 px-4 md:px-8 rounded-full my-16 max-w-48">
          <p className="text-sm md:text-lg font-normal text-[#009999] w-full text-center">
           {data.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col py-8 md:py-16 gap-8 md:gap-16">
            <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
             {data.service_1.title}
            </h2>
            <p className="text-black text-sm md:text-lg md:mr-8 lg:mr-16">
              {data.service_1.text}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[590px] bg-[#009999]">
            <Image
              src={data.service_1.image}
              alt={""}
              width={590}
              height={590}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col py-8 md:py-16 gap-8 md:gap-16">
            <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
              {data.service_2.title}
            </h2>
            <p className="text-black text-sm md:text-lg md:mr-8 lg:mr-1">
              {data.service_2.text}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[590px] bg-[#009999]">
            <Image
              src={data.service_2.image.url}
              alt={""}
              width={590}
              height={590}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
