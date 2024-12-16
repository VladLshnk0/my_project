import { getNews } from "@/utils/fetchers/getNews";
import { getStaticNews } from "@/utils/fetchers/getStaticNews";
import Title from "./components/Title";
import News from "@/components/homepageComponents/News";
import NewsList from "./components/NewsList";
import ReloadComponent from "@/utils/components/ReloadComponent";

export default async function page() {
  const staticdata = await getStaticNews();
  const news = await getNews();

  return (
    <div className="flex flex-col items-center justify-center">
      <Title props={staticdata.acf.hero_block} />
      <NewsList news={news} props={staticdata.acf.controlls_block} />
      <ReloadComponent />
    </div>
  );
}