import Title from '../components/Title'
import SitesList from '../components/SitesList'
import MapSection from '../components/MapSection'
import Invest from '../components/Invest'
import Contact from '../components/Contact'

import { getStaticOurSites } from '@/utils/fetchers/getStaticOurSites'

import { ArticlesBlock, CartBlock, ContactBlock, HeroBlock, InvestBlock, PostsBlock, ReportsBlock, StrategyBlock } from '@/types/OurSitesACF'
import { getPosts } from '@/utils/fetchers/getPosts'
import { getNewsByCategory } from '@/utils/fetchers/getNewsByCategory'
import News from '../components/News'
import Reports from '../components/Reports'
import Article from '../components/Article'
import IndustrialBlock from '@/components/homepageComponents/IndustrialBlock'
import ReloadComponent from '@/utils/components/ReloadComponent'

async function page({ params }: { params: { path: string } }) {

  const staticData = await getStaticOurSites(params.path);

  const heroBlock: HeroBlock = staticData.acf.hero_block;
  const postsBlock: PostsBlock = staticData.acf.posts_block;
  const cartBlock: CartBlock = staticData.acf.cart_block;
  const reports: ReportsBlock = staticData.acf.reports;
  const articles: ArticlesBlock = staticData.acf.articles;
  const investBlock: InvestBlock = staticData.acf.invest_block;
  const strategyBlock: StrategyBlock = staticData.acf.strategy_block;
  const contactBlock: ContactBlock = staticData.acf.contact_block;

  const data = await getPosts();
  const posts = data;

  const news = await getNewsByCategory(staticData.acf.hero_block.title);

  const response = await fetch(staticData.acf.pdf_file, { cache: 'no-cache' });
  const pdfArray = await response.arrayBuffer();
  const base64 = Buffer.from(pdfArray)?.toString('base64');


  return (
    <>
      {staticData ? <div className='flex flex-col items-center overflow-hidden'>
        <Title props={heroBlock} />
        <Invest investProps={investBlock} strategyProps={strategyBlock} id={params.path} />
        {articles?.articles.length > 0 && <Article articles={articles} />}
        {reports?.reports.length > 0 && <Reports reports={reports} />}
        {/* <MapSection props={cartBlock} /> */}
        {/* <SearchPannel props={postsBlock} /> */}
        <SitesList posts={posts} props={postsBlock} />
        {news && <News news={news} />}
        <Contact props={contactBlock} title={heroBlock.title} base64={base64} />
        <ReloadComponent />
      </div> : <h1 className="flex flex-col items-center text-2xl md:text-5xl font-medium text-center gap-5 max-w-[1440px] mx-auto my-10 text-blue">Page not found</h1>}
    </>
  )
}

export default page