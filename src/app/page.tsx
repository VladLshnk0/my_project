import Image from "next/image";
import TopSection from "./homepage/TopSection";
import ChooseCategory from "./homepage/ChooseCategory";
import AboutUs from "./homepage/AboutUs";
import PopularProducts from "./homepage/PopularProducts";
import Conditions from "./homepage/Conditions";
import VideoSection from "./homepage/VideoSection";
import ContactInfo from "./homepage/ContactInfo";
import { getStaticHome } from "@/utils/fetchers/getStaticHome";
import { getProducts } from "@/utils/fetchers/WooCommerce/getProducts";
import { getCategories } from "@/utils/fetchers/WooCommerce/getCategories";

export default async function Home() {

  const home = await getStaticHome();
  // console.log(home.acf.conditions);

  const categoriesWC = await getCategories();
  const categories = categoriesWC && categoriesWC?.filter((category:any) => category.count > 0);

  const {products} = await getProducts("8");

  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <TopSection props={home.acf.top_section} />
      <ChooseCategory props={categories}/>
      <AboutUs props={home.acf.about_us} />
      <PopularProducts products={products.slice(0, 4)} data={home.acf.popular_products} />
      <Conditions props={home.acf.conditions} />
      <PopularProducts products={products.slice(4, 8)} data={home.acf.popular_products}  />
      <VideoSection props={home.acf.video_section} />
      <ContactInfo props={home.acf.contact_us} />
    </main>
  );
}
