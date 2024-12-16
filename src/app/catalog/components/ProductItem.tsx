"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/utils/state/state";

function ProductItem(data: any) {
  const product = data.data;
  console.log("Product", product);
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState("1");
  const addToCart = useCart((state) => state.addToCart);
  const cart = useCart((state) => state.cart);
  const [isAddInCart, setIsAddInCart] = useState(false);
  const [productIHandleKurv, setProductIHandleKurv] = useState<any | null>(
    cart.filter((p) => p.id === product.id)[0] || null
  );
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !Number.isNaN(parseInt(e.target.value)) &&
      parseInt(e.target.value) >= 0
    ) {
      setValue(e.target.value);
      setQuantity(parseInt(e.target.value));
    } else {
      setValue("");
      setQuantity(1);
    }
  };
  useEffect(() => {
    if (cart.length > 0 && cart.filter((p) => p.id === product.id).length > 0) {
      setProductIHandleKurv(cart.filter((p) => p.id === product.id)[0]);
    }
  }, [isAddInCart, cart]);
  return (
    <div className="w-full flex flex-col gap-4 group">
      <Link href={`product/${product?.slug}`} className="w-full">
        <div className="w-full h-60 sm:h-80 bg-slate-400">
          <Image
            src={product?.images?.[0]?.src || "/images/placeholder.png"}
            alt={product?.name}
            width={237}
            height={302}
            className="object-contain w-full h-full"
          />
        </div>
      </Link>
      <div className="flex flex-col">
        <span className="text-[#777777] font-normal text-sm">
          {product?.name}
        </span>
        <span className="text-black font-medium text-base mt-1">
          {product?.categories?.[0]?.name}
        </span>

        {+product?.price < +product?.regular_price ? (
          <span className="flex gap-2">
            <span className="text-black line-through font-medium text-xl mt-2">
              kr {(+product?.price).toFixed(2)}
            </span>
            <span className="text-[#009999] font-medium text-xl mt-2">
              kr {(+product?.price).toFixed(2)}
            </span>
          </span>
        ) : (
          <span className="text-[#009999] font-medium text-xl mt-2">
            kr {(+product?.price).toFixed(2)}
          </span>
        )}
        <div className="opacity-0 group-hover:opacity-100 px-1 transition-opacity h-10 flex justify-between items-center mt-4 gap-2">
          <div className="p-1 border border-[#009999] flex rounded-md">
            <button className="block"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  setValue((quantity - 1).toString());
                }
              }}
            >
              <span className="text-[#009999] text-lg block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9453 11.5C19.9453 11.643 19.8885 11.7801 19.7874 11.8812C19.6863 11.9823 19.5492 12.0391 19.4062 12.0391H3.59375C3.45078 12.0391 3.31367 11.9823 3.21258 11.8812C3.11148 11.7801 3.05469 11.643 3.05469 11.5C3.05469 11.357 3.11148 11.2199 3.21258 11.1188C3.31367 11.0177 3.45078 10.9609 3.59375 10.9609H19.4062C19.5492 10.9609 19.6863 11.0177 19.7874 11.1188C19.8885 11.2199 19.9453 11.357 19.9453 11.5Z"
                    fill="#009999"
                  />
                </svg>
              </span>
            </button>

            <input
              className="text-lg w-10 text-center block outline-none"
              value={value}
              onChange={handlerChange}
            />

            <button className="block"
              onClick={() => {
                setQuantity(quantity + 1);
                setValue((quantity + 1).toString());
              }}
            >
              <span className="text-[#009999] text-lg block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9453 11.5C19.9453 11.643 19.8885 11.7801 19.7874 11.8812C19.6863 11.9823 19.5492 12.0391 19.4062 12.0391H12.0391V19.4062C12.0391 19.5492 11.9823 19.6863 11.8812 19.7874C11.7801 19.8885 11.643 19.9453 11.5 19.9453C11.357 19.9453 11.2199 19.8885 11.1188 19.7874C11.0177 19.6863 10.9609 19.5492 10.9609 19.4062V12.0391H3.59375C3.45078 12.0391 3.31367 11.9823 3.21258 11.8812C3.11148 11.7801 3.05469 11.643 3.05469 11.5C3.05469 11.357 3.11148 11.2199 3.21258 11.1188C3.31367 11.0177 3.45078 10.9609 3.59375 10.9609H10.9609V3.59375C10.9609 3.45078 11.0177 3.31367 11.1188 3.21258C11.2199 3.11148 11.357 3.05469 11.5 3.05469C11.643 3.05469 11.7801 3.11148 11.8812 3.21258C11.9823 3.31367 12.0391 3.45078 12.0391 3.59375V10.9609H19.4062C19.5492 10.9609 19.6863 11.0177 19.7874 11.1188C19.8885 11.2199 19.9453 11.357 19.9453 11.5Z"
                    fill="#009999"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <button
              className="bg-[#82B835] text-white flex justify-center text-sm p-2 rounded-lg items-center gap-1 disabled:opacity-50"
              onClick={() => {
                addToCart(product, quantity);
                setIsAddInCart((isAddInCart) => !isAddInCart);
              }}
              disabled={product.stock_status !== "instock"}
            >
              {product.stock_status !== "instock"
                ? "Ikke på larget"
                : productIHandleKurv && productIHandleKurv?.quantity
                ? <span className="flex gap-1 items-center">
                  <span><svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="Cart">
                <path
                  d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"
                  fill="#ffffff"
                  className="color000000 svgShape"
                ></path>
              </svg></span>
                  <span>{`${productIHandleKurv.quantity} stk.`}</span>
                </span>
                : <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="Cart">
                <path
                  d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"
                  fill="#ffffff"
                  className="color000000 svgShape"
                ></path>
              </svg>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
