'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import CountEditor from "./CountEditor";
import { useCart } from "@/utils/state/state";
import Link from "next/link";

type ProductContentProps = {
  product: any;
};

function ProductContent(props: ProductContentProps) {
  const product = props.product;
  const addToCart = useCart((state) => state.addToCart);
  const cart = useCart((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [isAddInCart, setIsAddInCart] = useState(false);
  const [productIHandleKurv, setProductIHandleKurv] = useState<any | null>(cart.filter((p) => p.id === product.id)[0] || null);
  useEffect(() => {
    if (cart.length > 0 && cart.filter((p) => p.id === product.id).length > 0) {
      setProductIHandleKurv(cart.filter((p) => p.id === product.id)[0]);
    }
  }, [isAddInCart, cart]);

  

  return (
    <div className="h-full w-full max-w-[1440px] px-2 sm:px-4 pb-4">
      <div className="w-full flex justify-start items-center py-8 gap-2">
        <Link className="hover:underline" href={"/"}>Hjem</Link> / 
        <Link className="hover:underline" href={"/catalog?category=" + product.categories?.[0].slug + "&categoryId=" + product.categories?.[0].id}>{product.categories?.[0].name}</Link> / 
        <Link className="hover:underline" href={"/product/" + product.slug}>{product.name}</Link>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src={product.images?.[0]?.src}
            alt={product.name}
            width={640}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-2xl lg:text-5xl font-medium">{product.name}</h2>
          <span className="text-sm flex flex-row gap-2 mt-8">
            <span className="font-bold">Produktnummer:</span>
            <span>{product.id}</span>
          </span>
          <span className="text-sm flex flex-row gap-2 mt-2">
            <span className="font-bold">Kategori:</span>
            <span>{product.categories?.[0]?.name}</span>
          </span>
          {(product.description || product.short_description) && <span className="text-sm flex flex-row gap-2 mt-2">
            <span className="font-bold">Beskrivelse:</span>
            <span>{product.description || product.short_description}</span>
          </span>}
          <p className="text-[#82B835] text-4xl font-bold mt-8">
            kr {(+product.price).toFixed(2)}
          </p>
          <span className="flex flex-row items-center gap-8 mt-16">
            <span className="text-2xl uppercase">Antall:</span>
            <CountEditor quantity={quantity} setQuantity={setQuantity} />
          </span>
          <span className="flex items-start">
            <button className="bg-[#82B835] text-white text-2xl px-8 py-4 mt-8 flex justify-start disabled:opacity-50"
              onClick={() => {addToCart(product, quantity); setIsAddInCart(isAddInCart => !isAddInCart)}}
              disabled={product.stock_status !== "instock" }
            >
              {product.stock_status !== "instock" ? "Ikke på larget" : 
              (productIHandleKurv && productIHandleKurv?.quantity) ? `I handlekurvet ${productIHandleKurv.quantity} stk.` : "Legg i handlekurv"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
