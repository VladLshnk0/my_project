import { getStaticContactUs } from "@/utils/fetchers/getStaticContactUs";
import Form from "./components/Form";
import Map from "./components/Map";
import IndustrialBlock from "@/components/homepageComponents/IndustrialBlock";
import ReloadComponent from "@/utils/components/ReloadComponent";

export default async function page() {
  const data = await getStaticContactUs();
  console.log("Data", data);
  const response = await fetch(data.acf.form_block.pdf, { cache: 'no-cache' });
  console.log("Response", response);
  const pdfArray = await response.arrayBuffer();
  console.log("pdfArray", pdfArray);
  const base64 = Buffer.from(pdfArray)?.toString('base64');

  return (
    <div className="md:pt-20" 
      style={{backgroundImage: `url(${data.acf.hero_block.bg_image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 500px'}}>
      <div className="flex flex-col gap-8 max-w-[1440px] mx-auto md:pl-6 md:pr-4">
        <h1 className="hidden md:block text-5xl text-white font-semibold">{data.acf.hero_block.title}</h1>
        <div>
        <Form props={data.acf.form_block} base64={base64}/>
        {/* <Image src={data.acf.hero_block.default_image} alt="hero" width={3600} height={1000} className="object-cover" /> */}
        <Map />
        <IndustrialBlock props={data.acf.industrial_block}/>
        </div>
      </div>
      <ReloadComponent />
    </div>
    // <div className="flex flex-col items-center mx-auto pl-6 pr-4 sm:pr-0 sm:pl-0">
    //   <Background props={hero_block} />
    //   <Form props={form_block} />
    //   <HeroBlock props={hero_block} />
    // </div>
  );
}