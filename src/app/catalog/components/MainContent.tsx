import CategoriesHorisontal from "./CategoriesHorisontal";
import CategoriesVertical from "./CategoriesVertical";
import ProductsList from "./ProductsList";

type Props = {
  categories: any;
  products: any;
  activeCategory: string;
  activeCategoryId: string;
};

async function MainContent(props: Props) {

  const categories = props.categories && Array.isArray(props.categories) && props.categories?.filter((category: any) => category.count > 0);


  return (
    <div className="w-full max-w-[1440px] mt-8 flex flex-col gap-8 md:gap-12 px-2 sm:px-4">
      <CategoriesHorisontal categories={categories} activeCategory={props.activeCategory ?? ""} activeCategoryId={props.activeCategoryId ?? ""}/>
      <div className="flex flex-row">
        <div className="w-1/3 md:w-1/5">
          <CategoriesVertical categories={categories} activeCategory={props.activeCategory ?? ""} activeCategoryId={props.activeCategoryId ?? ""}/>
        </div>
        <div className="w-2/3 md:w-4/5">
     
          <ProductsList products={props.products} activeCategory={props.activeCategory ?? ""} activeCategoryId={props.activeCategoryId ?? ""}/>
  
        </div>
      </div>
    </div>
  );
}

export default MainContent;

