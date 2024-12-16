"use client";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

type Props = {
  products: any;
  activeCategory: string;
  activeCategoryId: string;
};

function ProductsList(props: Props) {
  const products = props.products;

  // const productsList = products.map((product: any) => ({
  //   name: product.name,
  //   slug: product.slug,
  //   category: product.categories[0].name,
  //   price: product.price,
  //   regular_price: product.regular_price,
  //   image: product.images[0]?.src,
  // }));

  const [shownProducts, setShownProducts] = useState(products.slice(0, 8));
  const [hasMore, setHasMore] = useState(true);

  const loadMoreProducts = () => {
    const currentLength = shownProducts.length;
    const moreProducts = products.slice(currentLength, currentLength + 8);
    if (moreProducts.length > 0) {
      setShownProducts((prev: any) => [...prev, ...moreProducts]);
    } else {
      setHasMore(false); // No more products to load
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // Load more if user is at the bottom
    if (scrollTop + windowHeight >= fullHeight - 50 && hasMore) {
      loadMoreProducts();
    }
  };

  useEffect(() => {
    setShownProducts(products.slice(0, 8));
    setHasMore(true);
  }, [props.activeCategory, props.activeCategoryId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shownProducts, hasMore]);

  return (
    <div>
      <div className="w-full pl-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8 mb-16 border-l-2 border-[#F2F2F2]">
        {shownProducts.map((product: any) => (
          <ProductItem data={product} key={product.slug}/>
        ))}
      </div>
      {hasMore && products.lenght > 8 && <div className="text-center">Loading...</div>}
    </div>
  );
}

export default ProductsList;
