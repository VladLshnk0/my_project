"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/utils/state/state";

type ProductCartitemProps = {
  item: any;
  index: number;
};

function ProductCartitem({ item, index }: ProductCartitemProps) {
  const updateQuantity = useCart((state) => state.updateQuantity);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const setTotal = useCart((state) => state.setTotal);
  const cart = useCart((state) => state.cart);
  const total = useCart((state) => state.total);
  const [quantity, setQuantity] = useState(item.quantity);
  const [value, setValue] = useState(item.quantity.toString())
  useEffect(() => {
    setQuantity(cart.filter((i) => i.id === item.id)[0].quantity);
    setValue(cart.filter((i) => i.id === item.id)[0].quantity.toString());
  }, [cart, total]);

  // const handleQuantityChange = (value: number) => {
  //   setQuantity(value);
  //   updateQuantity(item.id, value);
  // };

  const handleRemove = () => {
    removeFromCart(item.id);
  };
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(parseInt(e.target.value)) && parseInt(e.target.value) >= 0) {
      updateQuantity(item.id, parseInt(e.target.value));
      setValue(e.target.value)
      setQuantity(parseInt(e.target.value))
      setTotal()
    }else{
      updateQuantity(item.id, 1);
      setValue('')
      setQuantity(1)
      setTotal()
    }
  }

  return (
    <div key={index} className="w-full h-52 flex flex-row gap-8 relative">
      <Image
        src={item.images[0].src}
        alt={item.name}
        width={180}
        height={212}
        className="object-cover"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-medium text-xl">{item.name}</h2>
          <span className="text-[#82B835] text-2xl font-medium my-4">
            {(+item.price).toFixed(2)} kr
          </span>
          <span className="flex flex-row gap-1">
            <span className="font-medium text-sm">Produktnummer:</span>
            <span className="text-sm">{item.id}</span>
          </span>
          <span className="flex flex-row gap-1">
            <span className="font-medium text-sm">Kategori:</span>
            <span className="text-sm">{item.categories[0].name}</span>
          </span>
        </div>
        <div>
        <div className="w-28 flex flex-row items-center justify-between border-2 border-[#F2F2F8] p-2">
      <button onClick={() => {if(quantity > 1){updateQuantity(item.id, quantity-1); setQuantity(quantity - 1);setValue((quantity-1).toString());setTotal()}}}>
        <span className="text-[#727276] text-2xl">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9453 11.5C19.9453 11.643 19.8885 11.7801 19.7874 11.8812C19.6863 11.9823 19.5492 12.0391 19.4062 12.0391H3.59375C3.45078 12.0391 3.31367 11.9823 3.21258 11.8812C3.11148 11.7801 3.05469 11.643 3.05469 11.5C3.05469 11.357 3.11148 11.2199 3.21258 11.1188C3.31367 11.0177 3.45078 10.9609 3.59375 10.9609H19.4062C19.5492 10.9609 19.6863 11.0177 19.7874 11.1188C19.8885 11.2199 19.9453 11.357 19.9453 11.5Z"
              fill="#727276"
            />
          </svg>
        </span>
      </button>

      <input className="text-xl w-full text-center" value={value} onChange={handlerChange}/>

      <button onClick={() => {updateQuantity(item.id, quantity + 1); setQuantity(quantity + 1);setValue((quantity+1).toString());setTotal()}}>
        <span className="text-[#727276] text-2xl">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9453 11.5C19.9453 11.643 19.8885 11.7801 19.7874 11.8812C19.6863 11.9823 19.5492 12.0391 19.4062 12.0391H12.0391V19.4062C12.0391 19.5492 11.9823 19.6863 11.8812 19.7874C11.7801 19.8885 11.643 19.9453 11.5 19.9453C11.357 19.9453 11.2199 19.8885 11.1188 19.7874C11.0177 19.6863 10.9609 19.5492 10.9609 19.4062V12.0391H3.59375C3.45078 12.0391 3.31367 11.9823 3.21258 11.8812C3.11148 11.7801 3.05469 11.643 3.05469 11.5C3.05469 11.357 3.11148 11.2199 3.21258 11.1188C3.31367 11.0177 3.45078 10.9609 3.59375 10.9609H10.9609V3.59375C10.9609 3.45078 11.0177 3.31367 11.1188 3.21258C11.2199 3.11148 11.357 3.05469 11.5 3.05469C11.643 3.05469 11.7801 3.11148 11.8812 3.21258C11.9823 3.31367 12.0391 3.45078 12.0391 3.59375V10.9609H19.4062C19.5492 10.9609 19.6863 11.0177 19.7874 11.1188C19.8885 11.2199 19.9453 11.357 19.9453 11.5Z"
              fill="#727276"
            />
          </svg>
        </span>
      </button>
        </div>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <button className="text-[#82B835]" onClick={handleRemove}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.6875 6.64062H23.1094V5.3125C23.1094 4.53757 22.8015 3.79438 22.2536 3.24642C21.7056 2.69846 20.9624 2.39063 20.1875 2.39062H13.8125C13.0376 2.39063 12.2944 2.69846 11.7464 3.24642C11.1985 3.79438 10.8906 4.53757 10.8906 5.3125V6.64062H5.3125C5.10116 6.64062 4.89847 6.72458 4.74902 6.87402C4.59958 7.02347 4.51563 7.22616 4.51562 7.4375C4.51563 7.64884 4.59958 7.85153 4.74902 8.00098C4.89847 8.15042 5.10116 8.23438 5.3125 8.23438H6.64062V27.625C6.64062 28.1181 6.83652 28.5911 7.18522 28.9398C7.53392 29.2885 8.00686 29.4844 8.5 29.4844H25.5C25.9931 29.4844 26.4661 29.2885 26.8148 28.9398C27.1635 28.5911 27.3594 28.1181 27.3594 27.625V8.23438H28.6875C28.8988 8.23438 29.1015 8.15042 29.251 8.00098C29.4004 7.85153 29.4844 7.64884 29.4844 7.4375C29.4844 7.22616 29.4004 7.02347 29.251 6.87402C29.1015 6.72458 28.8988 6.64062 28.6875 6.64062ZM12.4844 5.3125C12.4844 4.96026 12.6243 4.62245 12.8734 4.37337C13.1224 4.1243 13.4603 3.98438 13.8125 3.98438H20.1875C20.5397 3.98438 20.8776 4.1243 21.1266 4.37337C21.3757 4.62245 21.5156 4.96026 21.5156 5.3125V6.64062H12.4844V5.3125ZM25.7656 27.625C25.7656 27.6954 25.7376 27.763 25.6878 27.8128C25.638 27.8626 25.5704 27.8906 25.5 27.8906H8.5C8.42955 27.8906 8.36199 27.8626 8.31217 27.8128C8.26236 27.763 8.23438 27.6954 8.23438 27.625V8.23438H25.7656V27.625ZM14.6094 13.8125V22.3125C14.6094 22.5238 14.5254 22.7265 14.376 22.876C14.2265 23.0254 14.0238 23.1094 13.8125 23.1094C13.6012 23.1094 13.3985 23.0254 13.249 22.876C13.0996 22.7265 13.0156 22.5238 13.0156 22.3125V13.8125C13.0156 13.6012 13.0996 13.3985 13.249 13.249C13.3985 13.0996 13.6012 13.0156 13.8125 13.0156C14.0238 13.0156 14.2265 13.0996 14.376 13.249C14.5254 13.3985 14.6094 13.6012 14.6094 13.8125ZM20.9844 13.8125V22.3125C20.9844 22.5238 20.9004 22.7265 20.751 22.876C20.6015 23.0254 20.3988 23.1094 20.1875 23.1094C19.9762 23.1094 19.7735 23.0254 19.624 22.876C19.4746 22.7265 19.3906 22.5238 19.3906 22.3125V13.8125C19.3906 13.6012 19.4746 13.3985 19.624 13.249C19.7735 13.0996 19.9762 13.0156 20.1875 13.0156C20.3988 13.0156 20.6015 13.0996 20.751 13.249C20.9004 13.3985 20.9844 13.6012 20.9844 13.8125Z"
              fill="#343330"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCartitem;
