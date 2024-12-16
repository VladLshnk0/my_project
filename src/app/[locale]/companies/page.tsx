import { getCompanyBySlug } from "@/utils/fetchers/getCompanyBySlug";
import { getCompanyPosts } from "@/utils/fetchers/getCompanyPosts";
import { getPosts } from "@/utils/fetchers/getPosts";
import { getStaticCompanies } from "@/utils/fetchers/getStaticCompanies";
import Title from "./components/Title";
import Introduction from "./components/Introduction";
import Partners from "./components/Partners";
import Posts from "./components/Posts";
import Comapnies from "./components/Comapnies";
import Synergy from "./components/Synergy";
import Become from "./components/Become";
import IndustrialBlock from "@/components/homepageComponents/IndustrialBlock";
import ReloadComponent from "@/utils/components/ReloadComponent";

export default async function page() {
  const companies_page = await getStaticCompanies();
  const posts = await getPosts();
  const company_posts = await getCompanyPosts();

  const heroSection = companies_page.acf.hero_block;
  const introduction = companies_page.acf.introduction_block;
  const partners = companies_page.acf.our_partners_block;
  const companies = companies_page.acf.companies_block;
  const synergy_block = companies_page.acf.synergy_block; 
  const become_block = companies_page.acf.become_block;


  return (
    <div className='flex flex-col items-center'>
      <Title props={heroSection} />
      <Introduction props={introduction} />
      <IndustrialBlock props={companies_page.acf.industrial_block}/>
      <Partners props={partners} posts={posts} />
      <Comapnies props={companies} companies={company_posts} />
      <Synergy props={synergy_block} />
      <Become props={become_block} />
      <ReloadComponent />
    </div>
  );
}