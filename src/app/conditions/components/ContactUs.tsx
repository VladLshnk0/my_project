import Image from "next/image";
import Link from "next/link";

function ContactUs({ title1, title2, button, image }: { title1: string; title2: string; button: string; image: string }) {
  return (
    <section className="relative h-full w-full max-h-[546px] max-w-[1440px]">
      <div className="absolute top-0 left-0 w-full h-[546px] -z-10">
      <Image
        src={image || "/images/ConditionsContactUs.png"}
        alt={""}
        width={1440}
        height={455}
        className="object-cover w-full h-[546px]"
      />
      <div className="absolute w-full h-full bg-black/10 top-0 left-0" />
      </div>
      <div className="w-full h-[546px] flex flex-col justify-center items-center text-center px-[5%] gap-8">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bald uppercase text-white">
          {title1}
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bald uppercase text-white">
          {title2}
        </h2>
        <Link href={'/contact_us'} className="border-2 border-[#009999] hover:bg-[#009999] text-white py-2 md:py-3 px-4 md:px-8 mt-8 rounded-full text-sm md:text-lg font-semibold">
            {button}
        </Link>
      </div>
    </section>
  );
}

export default ContactUs;
