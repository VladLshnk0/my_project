import { ContactUsPartners } from "@/types/acf";
import Image from "next/image";
import Link from "next/link";

type Props = {
  props: ContactUsPartners;
};

function ContactUs(props: Props) {

  const data = props.props;

  return (
    <section className="relative h-full w-full max-h-[546px] max-w-[1440px]">
    <div className="absolute top-0 left-0 w-full h-[546px] -z-10">
      <Image
        src={data.background.url}
        alt={""}
        width={1440}
        height={546}
        quality={100}
        className="h-[546px] object-cover"
      />
      <div className="absolute w-full h-full bg-black/10 top-0 left-0" />
        
      </div>
      <div className="h-[546px] flex flex-col justify-center items-center gap-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase text-white">{data.text}</h2>
        <Link href={'/contact_us'} className="border-2 border-[#009999] hover:bg-[#009999] transition-colors duration-500 text-white py-2 md:py-4 px-4 md:px-8 rounded-full text-sm md:text-lg font-semibold">
            {data.button_text}
        </Link>
      </div>
    </section>
  );
}

export default ContactUs;
