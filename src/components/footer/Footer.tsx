import type { FooterACF } from "@/types/acf";
import SocialMedia from "./SocialMedia";
import Navigation from "./Navigation";
import CopyRight from "./Copyright";
import { getStaticFooter } from "@/utils/fetchers/getStaticFooter";


export default async function Footer() {
  const footer = await getStaticFooter();
  return (
    <footer className="flex flex-col w-full">
      <SocialMedia media={footer.acf.media_links} />
      <div className="flex flex-col items-center">
        {/* Без цього діву на великих екранах ці два компоненти з'їзжджають на початок екрану.
        Корректне відображення футеру пріорітетніше зараз, ніж його адаптація, дизайну якої у нас немає, як і таски */}
        <Navigation navigation={footer.acf.navigation_group.column} />
        <CopyRight copyright={footer.acf.footer_group} />
      </div>
    </footer>
  );
}
