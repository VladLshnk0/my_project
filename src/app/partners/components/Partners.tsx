import Image from "next/image";
import { PartnersSectionPartners } from "@/types/acf";
import Link from "next/link";

type Props = {
  props: PartnersSectionPartners;
};

function Partners(props: Props) {

  const data = props.props;

  const partners = [
    {
      id: 1,
      name: data.partner_1.name,
      description: data.partner_1.description,
      image: data.partner_1.photo,
      logo: data.partner_1.logo,
      link: data.partner_1.link,
    },
    {
      id: 2,
      name: data.partner_2.name,
      description: data.partner_2.description,
      image: data.partner_2.photo,
      logo: data.partner_2.logo,
      link: data.partner_2.link,
    },
    {
      id: 3,
      name: data.partner_3.name,
      description: data.partner_3.description,
      image: data.partner_3.photo,
      logo: data.partner_3.logo,
      link: data.partner_3.link,
    },
    {
      id: 4,
      name: data.partner_4.name,
      description: data.partner_4.description,
      image: data.partner_4.photo,
      logo: data.partner_4.logo,
      link: data.partner_4.link,
    },
    {
      id: 5,
      name: data.partner_5.name,
      description: data.partner_5.description,
      image: data.partner_5.photo,
      logo: data.partner_5.logo,
      link: data.partner_5.link,
    },
    {
      id: 6,
      name: data.partner_6.name,
      description: data.partner_6.description,
      image: data.partner_6.photo,
      logo: data.partner_6.logo,
      link: data.partner_6.link,
    },
  ];

  return (
    <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-4 my-16 lg:my-32 px-2 sm:px-4">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="w-full bg-[#F7F7F8] p-4 flex flex-col"
        >
          <div className="flex justify-between">
            <div className="">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="w-48 h-48">
              <Image
                src={partner.image}
                alt={partner.name}
                width={290}
                height={181}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 -mt-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase">{partner.name}</h2>
              <p className="text-sm lg:text-lg">{partner.description}</p>
            </div>
            <Link href={partner.link || "/"} target="_blank" className="w-[48px] h-[48px] bg-[#009999] rounded-full flex items-center justify-center hover:opacity-70">
              <svg
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5298 16.53L12.5298 26.53C12.3877 26.6625 12.1996 26.7346 12.0053 26.7312C11.811 26.7278 11.6256 26.6491 11.4882 26.5117C11.3508 26.3742 11.2721 26.1889 11.2687 25.9946C11.2652 25.8003 11.3374 25.6122 11.4698 25.47L20.9386 16L11.4698 6.53003C11.3374 6.38785 11.2652 6.19981 11.2687 6.00551C11.2721 5.81121 11.3508 5.62582 11.4882 5.48841C11.6256 5.35099 11.811 5.27228 12.0053 5.26885C12.1996 5.26543 12.3877 5.33755 12.5298 5.47003L22.5298 15.47C22.6703 15.6107 22.7492 15.8013 22.7492 16C22.7492 16.1988 22.6703 16.3894 22.5298 16.53Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Partners;
