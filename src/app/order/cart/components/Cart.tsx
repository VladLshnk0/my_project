"use client";
import { useCart, useOrder } from "@/utils/state/state";
import { useEffect, useState } from "react";
import ProductCartitem from "./ProductCartitem";
import { getCoupon } from "@/utils/fetchers/WooCommerce/getCoupon";
import Link from "next/link";

function Cart({methodes}:{methodes:any[] | undefined}) {
  console.log(methodes);
  const shippingOptions = methodes && methodes.filter(m=>m?.enabled).map((method) => {
    return {
      id: method?.id,
      name: method?.title,
      price: method?.settings?.cost ? method?.settings?.cost?.value?.replace(',', '.') : '0.00',
    };
  }).sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  const cart = useCart((state) => state.cart);
  const total = useCart((state) => state.total);
  const order = useOrder((state) => state.order);
  const setOrder = useOrder((state) => state.setOrder);

  const getCartTotal = useCart((state) => state.getCartTotal);
  const [totalPrice, setTotalPrice] = useState<number>(getCartTotal(cart));
  const [activeShipping, setActiveShipping] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (activeShipping) {
      setTotalPrice(getCartTotal(cart) + (parseFloat(activeShipping.price)*1.25));
    }else{
      setTotalPrice(getCartTotal(cart));
    }
  }, [cart, activeShipping, total]);
  useEffect(() => {
    if (shippingOptions && shippingOptions.length > 0)
    setActiveShipping(shippingOptions[0]);
  }, []);

// if(shippingOptions){  shippingOptions.push({
//       id: 0,
//       name: "Fraktalternativer vil bli oppdatert på betalingssiden.",
//       price: "0.00"
//   });}

  function handleChangePrice(type: string, price: number, amount: number) {
    if (type === "percent") {
      const discount = (price * amount) / 100;
      console.log(discount);
      return (price - discount).toFixed(2);
    }
    const discount = price - amount;
    return discount.toFixed(2);
  }

  const [coupon, setCoupon] = useState("");

  async function applyCoupon(coupon: string) {
    console.log(coupon);
    const data = await getCoupon(coupon);
    if (data) {
      console.log(data);
      setOrder({ ...order, coupon_lines: [{ code: coupon }] });
      const price = handleChangePrice(data[0].discount_type, totalPrice, +data[0].amount);
      console.log(price);
      setTotalPrice(parseFloat(price));
    }else{
      setOrder({ ...order, coupon_lines: [] });
      setTotalPrice(getCartTotal(cart));
      setError("Kupongen er ugyldig");
      setTimeout(() => {
        setError(null);
        setCoupon("");
      }, 2000);
    }
    console.log(order);
  }
 

  const mva = (totalPrice-(totalPrice / 1.25)).toFixed(2);


  if(cart.length === 0) {
    return (
      <div className="h-full w-full max-w-[1440px] flex flex-col items-center justify-center py-8 gap-16 relative">
        <h2 className="text-5xl text-black font-semibold">Din Kurv</h2>
        <h3 className="text-2xl text-black font-semibold">Din kurv er tom</h3>
        <Link href="/catalog" className="bg-[#82b835] text-white font-semibold mt-8 py-4 px-8 flex items-center justify-center">
          Gå til katalog
        </Link>
      </div>
    )
  }
  
  function handleFunc() {
    if (activeShipping) {
      setOrder({ ...order, shipping_lines: [{method_title: activeShipping.name, method_id: activeShipping.id, total: activeShipping.price }] });
    }
  }

  return (
    <div className="h-full w-full max-w-[1440px] flex flex-col lg:flex-row gap-16 mb-32">
      <div className="w-full lg:w-3/5">
        <h2 className="text-3xl lg:text-5xl text-black font-semibold mb-8">Din Kurv</h2>
        <div className="w-full flex flex-col gap-8">
          {cart.map((item: any, index) => (
            <ProductCartitem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-2/5 h-full border-2 border-[#F2F2F8] p-8 flex flex-col divide-y-2 gap-4">
        <h2 className="text-4xl font-medium">Totalt i handlekurven</h2>
        <span className="w-full flex flex-row justify-between pt-4 items-center">
          <span className="text-lg font-semibold">Delsum</span>
          <span className="text-2xl font-medium text-[#82b835]">{cart.reduce((acc, i)=>acc + parseInt(i.price)*i.quantity,0).toFixed(2)} kr</span>
        </span>
        <div className="pt-4">
          <span className="text-lg font-semibold">Frakt</span>
          <div className="flex flex-col gap-4 mt-4">
            {shippingOptions && shippingOptions.map((option, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-4"
              >
                <button onClick={() => {setActiveShipping(option);} }
                className="w-5 h-5 border-2 border-black flex justify-center items-center">
                  <span
                    className={
                      `w-4 h-4 ${activeShipping && activeShipping.id === option.id
                        ? 'bg-[#82b835]'
                        : 'bg-white'}`
                    }
                  />
                </button>
                <span className="w-full flex flex-row gap-1">
                  <span className="text-base font-medium">{option.name}</span>
                  {option.price > 0 && (
                    <span className="text-base font-medium text-[#82b835]">
                      {option.price} kr
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
          {/* <div className="w-full flex flex-row justify-start items-center mt-4 py-4 gap-4">
            <h3 className="font-semibold text-lg">Beregn frakt</h3>
            <span>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7595 8.57144L11.197 15.1339C11.1056 15.2257 10.9969 15.2985 10.8772 15.3482C10.7576 15.3979 10.6293 15.4235 10.4998 15.4235C10.3702 15.4235 10.2419 15.3979 10.1223 15.3482C10.0026 15.2985 9.89394 15.2257 9.80249 15.1339L3.23999 8.57144C3.05506 8.38651 2.95117 8.1357 2.95117 7.87417C2.95117 7.61265 3.05506 7.36183 3.23999 7.17691C3.42492 6.99198 3.67573 6.88809 3.93725 6.88809C4.19878 6.88809 4.44959 6.99198 4.63452 7.17691L10.5006 13.043L16.3666 7.17609C16.5516 6.99116 16.8024 6.88727 17.0639 6.88727C17.3254 6.88727 17.5762 6.99116 17.7612 7.17609C17.9461 7.36101 18.05 7.61183 18.05 7.87335C18.05 8.13488 17.9461 8.38569 17.7612 8.57062L17.7595 8.57144Z"
                  fill="black"
                />
              </svg>
            </span>
          </div> */}
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Rabattkode"
            className="w-7/12 px-2 border-2 border-[#F2F2F8] mt-4 py-4"
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            onClick={() => applyCoupon(coupon)}
            className="w-5/12 bg-[#727276] text-sm lg:text-base hover:bg-[#82b835] text-white font-semibold mt-4 uppercase"
          >
            Bruk Rabattkode
          </button>
          </div>
          {error && <p className="text-red-500 animate-pulse">{error}</p>}
        </div>
        <div className="w-full">
          <div className="w-full flex flex-row justify-between items-center mt-4">
            <span className="text-lg font-semibold ">Totalsum</span>
            <div>
              <span className="text-2xl font-medium text-[#82b835]">
                {totalPrice.toFixed(2)} kr
              </span>
              <span className="text-sm text-[#707070] flex flex-row gap-1">
                (inkl. <p className="text-[#82b835]">{mva} kr</p> MVA)
              </span>
            </div>
          </div>
          <Link href={'/order/checkout'} onClick={handleFunc} className="w-full bg-[#82b835] text-white font-semibold mt-8 py-4 flex items-center justify-center">
          Fortsett
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
