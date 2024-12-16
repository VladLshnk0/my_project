import { getStaticAboutUs } from "@/utils/fetchers/getStaticAboutUs";
import HeroBlock from "./components/HeroBlock";
import NorseaBlock from "./components/NorseaBlock";
import AtlanticToday2 from "./components/AtlanticToday2";
import MoreInfo2 from "./components/MoreInfo2";
import OurAmbition from "./components/OurAmbition";
import FooterBlock from "./components/FooterBlock";
import VirtualTur from "./components/VirtualTur";

export default async function page() {
    const about = await getStaticAboutUs();
  return (
    <div className="flex flex-col">
      <HeroBlock data={about.acf.hero_block}/>
      <NorseaBlock data={about.acf.norsea_block}/>
      <VirtualTur data={about.acf.virtual_tur_block}/>
      <AtlanticToday2 data={about.acf.atlantic_today_block} text={about.acf.more_info_block.additional_info[0].title}/>
      <MoreInfo2 data={about.acf.more_info_block}/>
      {/* <OurAmbition data={about.acf.our_ambition_block}/> */}
      <FooterBlock data={about.acf.footer_about_us_block}/>
    </div>
  );
}