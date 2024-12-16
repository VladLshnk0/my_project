import { OurHistoryType, OurTeamType } from "@/types/acf";
import Image from "next/image";

type Props = {
  historyProps: OurHistoryType;
  teamProps: OurTeamType;
};

function OurHistory({ historyProps, teamProps }: Props) {
  const history = historyProps;
  const team = teamProps;

  return (
    <div className="w-full max-w-[1440px] px-2 sm:px-4">
      <div className="flex items-start">
        <div className="border border-[#009999] py-2 md:py-4 px-4 md:px-8 rounded-full mt-8 max-w-44">
          <p className="text-sm md:text-lg font-normal text-[#009999]  w-full text-center">
            {history.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col py-8 md:py-16 gap-8 md:gap-16">
            <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase">
              {history.title}
            </h2>
            <p className="text-black text-sm md:text-lg md:mr-8 lg:mr-16">{history.text}</p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[590px] bg-[#009999]">
            <Image
              src={history.image.url}
              alt={""}
              width={590}
              height={590}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 order-2 md:order-1 h-[400px] md:h-[590px] bg-[#009999]">
            <Image
              src={team.image.url}
              alt={""}
              width={590}
              height={590}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col py-8 md:py-16 gap-8 md:gap-16 order-1 md:order-2">
            <h2 className="text-black text-2xl md:text-3xl lg:text-5xl font-medium uppercase md:ml-8 lg:ml-16">
              {team.title}
            </h2>
            <p className="text-black text-sm md:text-lg md:ml-8 lg:ml-16">
              {team.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurHistory;
