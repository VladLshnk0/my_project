import { useCart } from "@/utils/state/state";
import React, { useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";

type CartMiniProps = {
  close: () => void;
};

function CartMini({ close }: CartMiniProps) {
  const cart = useCart();
  const getCartTotal = useCart((state) => state.getCartTotal);

  const total = Math.round(+getCartTotal(cart.cart).toFixed(2));

  return (
    <div className="w-full h-full relative z-0">
      <div className="scrollbar-hide pb-[330px] w-full h-full overflow-y-scroll flex flex-col">
        <div className="w-full flex flex-row justify-between px-4 py-8 border-b-2">
          <h2 className="text-2xl font-medium">Handlekurv</h2>
          <button onClick={close}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5308 24.47C25.6045 24.5386 25.6636 24.6214 25.7046 24.7134C25.7456 24.8054 25.7676 24.9047 25.7694 25.0054C25.7712 25.1061 25.7527 25.2062 25.7149 25.2996C25.6772 25.393 25.6211 25.4778 25.5499 25.549C25.4786 25.6202 25.3938 25.6764 25.3004 25.7141C25.207 25.7518 25.107 25.7703 25.0063 25.7686C24.9056 25.7668 24.8063 25.7447 24.7143 25.7038C24.6223 25.6628 24.5395 25.6037 24.4708 25.53L16.0008 17.0612L7.53082 25.53C7.38865 25.6625 7.2006 25.7346 7.0063 25.7311C6.812 25.7277 6.62661 25.649 6.4892 25.5116C6.35179 25.3742 6.27308 25.1888 6.26965 24.9945C6.26622 24.8002 6.33834 24.6121 6.47082 24.47L14.9396 16L6.47082 7.52997C6.33834 7.38779 6.26622 7.19975 6.26965 7.00545C6.27308 6.81114 6.35179 6.62576 6.4892 6.48835C6.62661 6.35093 6.812 6.27222 7.0063 6.26879C7.2006 6.26537 7.38865 6.33749 7.53082 6.46997L16.0008 14.9387L24.4708 6.46997C24.613 6.33749 24.801 6.26537 24.9953 6.26879C25.1896 6.27222 25.375 6.35093 25.5124 6.48835C25.6499 6.62576 25.7286 6.81114 25.732 7.00545C25.7354 7.19975 25.6633 7.38779 25.5308 7.52997L17.0621 16L25.5308 24.47Z"
                fill="#343330"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-screen flex flex-col divide-y-2 gap-4 px-4">
          {cart.cart.map((item) => (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-10 w-full h-40 bg-[#E5E5E5] left-0 bottom-0 p-4 flex flex-col opacity-100">
        <div className="flex flex-row w-full h-1/2 justify-between items-center">
          <span className="text-lg">Totalsum:</span>
          <span className="text-2xl font-medium">{total} kr</span>
        </div>
        <Link
          onClick={close}
          href={`/order/cart`}
          className="w-full h-1/2 bg-[#82B835] text-white text-xl flex items-center justify-center"
        >
          Gå til kassen
        </Link>
      </div>
    </div>
  );
}

export default CartMini;
