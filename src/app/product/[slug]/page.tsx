import ProductContent from "./components/ProductContent";
import { getProducts } from "@/utils/fetchers/WooCommerce/getProducts";
import { getProductBySlug } from "@/utils/fetchers/WooCommerce/getProductBySlug";
import RelativedProducts from "./components/RelativedProducts";
import { getProductByCategory } from "@/utils/fetchers/WooCommerce/getProductByCategory";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const data = await getProducts(`10`);
  const products = await getProducts(data.total.toString());

  console.log(`products length`,products.products.length);

  if (products.products.length === 0) {
    return [];
  } else {
    return products.products.map((data: any) => ({
      slug: data.slug,
    }));
  }
}

async function page({ params: { slug } }: PageProps) {
  const product = await getProductBySlug(slug);
  const relproducts = await getProductByCategory(product?.categories?.[0]?.id?.toString());
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 pb-8 items-center">
      <ProductContent product={product} />
      <RelativedProducts relproducts={relproducts?.filter(p=>p.id !== product.id)?.slice(0, 4)} />
    </div>
  );
}

export default page;
