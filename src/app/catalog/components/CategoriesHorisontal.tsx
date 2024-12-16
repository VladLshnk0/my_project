import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  categories: any;
  activeCategory: string;
  activeCategoryId: string;
};

function CategoriesHorisontal(props: Props) {
  const categories = props.categories.map((category: any) => ({
    id: category.id,
    slug: category.slug,
    name: category.name,
    number_of_products: category.count,
    image: category.image?.src,
  }));

  return (
    <div className="w-full max-w-[1440px] border-b-2 pb-8 border-b-[#009999]">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {categories.map((category: any) => (
          <Link key={category.name} href={{query: {category : category.slug, categoryId : category.id}}} scroll={false} 
          className={`w-40 border ${props.activeCategory === category.slug ? 'border-[#009999]' : 'border-transparent'}`}>
            <div className="w-full h-40 bg-[#009999] ">
              <Image
                src={category.image}
                alt={category.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm font-normal ">{category.name}</p>
            {/* <p className="text-sm font-normal text-[#777777]">
              {category.number_of_products} Produkter
            </p> */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesHorisontal;
