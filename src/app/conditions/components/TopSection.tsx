import Image from 'next/image'

function TopSection({title, image}: {title: string, image: string}) {
  return (
    <section className="relative h-full w-full max-h-[546px] max-w-[1440px]">
      <div className="absolute top-0 left-0 w-full h-[546px] -z-10">
        <Image
          src={image || "/images/Conditions1.png"}
          alt={""}
          width={1440}
          height={546}
          quality={100}
          className="h-[546px] object-cover"
        />
        <div className="absolute w-full h-full bg-black/10 top-0 left-0" />
      </div>
      <div className="w-full h-[546px] flex flex-col justify-center items-center text-center px-[5%] gap-8">
        <div className="flex flex-row justify-between items-center px-16 w-full">
          <span className="h-[1px] w-1/3 bg-[#009999]" />
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-white uppercase">{title}</h2>
          <span className="h-[1px] w-1/3 bg-[#009999]" />
        </div>
      </div>
    </section>
  )
}

export default TopSection