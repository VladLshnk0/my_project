import { BottomSectionContactUs } from '@/types/acf'
import Image from 'next/image';
import Link from 'next/link'

type BottomSectionProps = {
  props: BottomSectionContactUs
}

function BottomSection(props: BottomSectionProps) {

  const { button_text, bottom_text, bottom_image } = props.props

  return (
    <section className="relative h-full w-full max-h-[546px] max-w-[1440px]">
    <div className="absolute top-0 left-0 w-full h-[546px] -z-10">
      <Image
        src={bottom_image.url}
        alt={""}
        width={1440}
        height={546}
        quality={100}
        className="h-[546px] object-cover"
      />
      <div className="absolute w-full h-full bg-black/10 top-0 left-0" />
        
      </div>

      <div className="w-full h-[546px] flex flex-col justify-center items-center text-center px-[5%] gap-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bald uppercase text-white">{bottom_text}</h2>
        <Link href={"/catalog"} className="border-2 border-[#009999] text-white py-2 md:py-3 px-4 md:px-8 rounded-full backdrop-blur-sm text-sm md:text-lg font-semibold">
            {button_text}
        </Link>
      </div>
    </section>
  )
}

export default BottomSection