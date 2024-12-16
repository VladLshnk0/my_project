import Link from "next/link";

type Props = {
  categories: any;
  activeCategory: string;
  activeCategoryId: string;
};

function CategoriesVertical(props: Props) {

  // console.log(props.categories)

  const categories = props.categories.map((category:any) => ({
    slug: category.slug,
    id: category.id,
    name: category.name,
    number_of_products: category.count,
    }));

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8">
      <h2 className="text-black font-medium text-sm md:text-xl lg:text-2xl uppercase">
        Kategorier {categories.length}
      </h2>
      <div className="flex flex-col gap-4 items-start text-xs md:text-sm lg:text-base">
        <Link key={'alle'} href={'/catalog'} scroll={false} className={`text-[#777777] font-normal ${props.activeCategory === '' && 'underline'}`}>Alle kategorier</Link>
        {categories.map((category: any) => (
          <Link key={category.name} href={{query: {category : category.slug, categoryId : category.id}}} scroll={false} className={`text-[#777777] font-normal ${props.activeCategory === category.slug && 'underline'}`}>
              {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesVertical;
