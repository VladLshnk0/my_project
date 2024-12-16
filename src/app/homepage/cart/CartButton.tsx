"use client";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import CartMini from "./CartMini";
import { useCart } from "@/utils/state/state";

function CartButton() {
  const [cartOpen, setCartOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [opacity, setOpacity] = useState(false);

  const cart = useCart((state) => state.cart);

  const quantityTotal = cart.length;

  const handleOpen = () => {
    setCartOpen(!cartOpen);
    setTimeout(() => {
      setOpacity(!opacity);
    }, 100);
    setTimeout(() => {
      setAnimation(!animation);
    }, 100);
  };

  const handleClose = () => {
    setAnimation(!animation);
    setTimeout(() => {
      setCartOpen(!cartOpen);
    }, 1000);
    setOpacity(!opacity);
  };

  useEffect(() => {
    if (animation && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [animation]);

  return (
    <>
      <button
        className="w-8 h-8 hover:scale-105 transition-all duration-300 relative"
        onClick={handleOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="Cart">
          <path
            d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
        </svg>
        {quantityTotal > 0 && (
          <span className="absolute w-6 h-5 -top-3 -right-2 bg-[#82B835] rounded-full flex items-center justify-center text-white text-sm">
            {quantityTotal}
          </span>
        )}
      </button>

      {cartOpen && (
        <div className="fixed z-20 top-0 right-0 w-full h-full">
          <div
            className={
              opacity
                ? "w-full h-full bg-black/20 relative opacity-100 transition-opacity duration-100"
                : "w-full h-full bg-black/20 opacity-0 transition-opacity duration-500"
            }
          >
            <ClickAwayListener onClickAway={handleClose}>
              <div
                className={
                  animation
                    ? "w-full md:w-1/2 lg:w-1/3 absolute z-50 h-full bg-white top-0 transition-all -right-[100%] md:-right-[50%] lg:-right-[33.33%] -translate-x-[100%]"
                    : "w-full md:w-1/2 lg:w-1/3 absolute z-50 h-full bg-white top-0 right-0 translate-x-[100%]  transition-all"
                }
              >
                <CartMini close={handleClose} />
              </div>
            </ClickAwayListener>
          </div>
        </div>
      )}
    </>
  );
}

export default CartButton;
