import { getPosts } from "@/utils/fetchers/getPosts";
import { getPostsBySlug } from "@/utils/fetchers/getPostsBySlug";
import HeroBlock from "./components/HeroBlock";
import MainBlock from "./components/MainBlock";
import OtherSitesBlock from "./components/OthersSitesBlock";
import ReloadComponent from "@/utils/components/ReloadComponent";

export default async function page({ params }: { params: { slug: string } }) {
    const other_sites = await getPosts();
    const site = await getPostsBySlug(params.slug);
    const sites = other_sites.length > 3 ? other_sites.filter((post) => post.acf.slug !== params.slug) : other_sites;
  return (
    <>
      {site ? 
      <div className="flex flex-col gap-6 mb-10">
        <ReloadComponent />
        <HeroBlock banner={site.acf.banner} title={site.acf.title} 
        logo={site.acf.logo} website={site.acf.web_site} content_id={site.acf.content_id}/>
        <MainBlock subtitle={site.acf.sub_title} paragraphs={site.acf.paragraphs} 
            images={site.acf.gallery} gallery_text={site.acf.gallery_text}/>
        {other_sites && <OtherSitesBlock other_sites={sites.slice(0,3)} other_sites_text={site.acf.other_sites_text}/>}
      </div> : 
      <h1 className="flex flex-col items-center text-2xl md:text-5xl font-medium text-center gap-5 max-w-[1440px] mx-auto my-10 text-blue">Site not found</h1>}
    </>
  );
}