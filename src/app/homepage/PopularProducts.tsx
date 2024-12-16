import Image from "next/image";
import Link from "next/link";
import { PopularProductsHomePage } from "@/types/acf";

type Props = {
    products: any[];
    data: PopularProductsHomePage;
}

function PopularProducts(props: Props) {
  const products = props.products;
  const data = props.data;

  return (
    <div className="max-w-[1440px] w-full my-8 sm:my-16 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-left uppercase">
        {data.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-8 w-full gap-4">
        {products.map((product) => (
          <Link href={'/product/' + product.slug} key={product.id} className="flex flex-col group">
            <Image
              src={product.images[0].src}
              alt={product.name}
              width={310}
              height={330}
              className="object-cover w-full h-[330px]"
            />
            <div className="pt-1 pb-4 group-hover:bg-[#F7F7F8] transition-colors duration-100">
              <p className="text-sm font-semibold text-[#707070]">
                {product.categories[0].name}
              </p>
              <h3 className="text-xl font-normal">{product.name}</h3>
              <p className="text-xl text-[#009999] font-semibold mt-2">
                {product.price} ,-
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/catalog" className="bg-[#009999] py-4 px-8 rounded-full">
          <p className="text-lg font-semibold text-white">
            {data.button_text}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default PopularProducts;
