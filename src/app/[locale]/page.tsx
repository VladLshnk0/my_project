import { getStaticHome } from "@/utils/fetchers/getStaticHome";

import Title from "../../components/homepageComponents/Title";
import TitleSection from "@/components/homepageComponents/TitleAndImagesSection";
import ImageComponent from "@/components/homepageComponents/ImageComponent";
import AboutUsSection from "@/components/homepageComponents/AboutUsSection";
import ContactUs from "@/components/homepageComponents/ContactUs";
import Pros from "@/components/homepageComponents/Pros";
import News from "@/components/homepageComponents/News";
import VirtualTour from "@/components/homepageComponents/VirtualTour";
import { getNews } from "@/utils/fetchers/getNews";
import IndustrialBlock from "@/components/homepageComponents/IndustrialBlock";
import WhyInvestHere from "@/components/homepageComponents/WhyInvestHere";

export default async function Home() {
  const home = await getStaticHome();
  const postnews = await getNews();
  const heroSection = home.acf.hero_block;
  const title = home.acf.title_block;
  const invest = home.acf.invest_block;
  const benefits = home.acf.benefits_block;
  const aboutUs = home.acf.about_block;
  const news = home.acf.news_block;
  const contact = home.acf.contact_block;
  const virtualTur = home.acf.virtual_tur;

  const response = await fetch(contact.pdf, { cache: 'no-cache' });
  const pdfArray = await response.arrayBuffer();
  const base64 = Buffer.from(pdfArray)?.toString('base64');
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Title props={heroSection}/>
      <TitleSection props={title}/>
      <ImageComponent props={title.sites}/>
      <IndustrialBlock props={home.acf.industrial_block}/>
      <VirtualTour props={virtualTur} />
      <Pros props={invest}/>
      <WhyInvestHere props={benefits}/>
      <AboutUsSection props={aboutUs}/>
      <News props={news} posts={postnews}/>
      <ContactUs props={contact} base64={base64}/>
    </main>
  );
}
