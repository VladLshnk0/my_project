import Image from 'next/image'
import { ContactUsPartners } from '@/types/acf';

type Props = {
  props: ContactUsPartners;
};

function ContactUs(props: Props) {

  const data = props.props;

  return (
    <div className="w-full max-w-[1440px] relative">
      <Image
        src={data.background.url}
        alt={""}
        width={1440}
        height={455}
        className="object-cover w-full h-[500px]"
      />
      <div className="absolute w-full h-[500px] top-0 left-0 flex flex-col justify-center items-center gap-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bald uppercase text-white">{data.text}</h2>
        <button className="border-2 border-[#009999] text-white py-2 sm:py-3 px-4 sm:px-8 rounded-full text-sm sm:text-lg font-semibold">
            {data.button_text}
        </button>
      </div>
    </div>
  )
}

export default ContactUs