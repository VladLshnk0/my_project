"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/utils/state/state";

type CartItemProps = {
  item: any;
};

function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const setTotal = useCart((state) => state.setTotal);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const [value, setValue] = useState(quantity.toString())
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
    <div className="flex flex-row items-center gap-4 pt-4 w-full h-full">
      <Image
        src={item?.images?.[0]?.src || "/images/placeholder.png"}
        alt={item.name}
        width={108}
        height={144}
        className="object-cover w-1/3 min-h-36"
      />
      <div className="w-full h-full justify-between flex flex-col">
        <div className="w-full justify-between flex flex-row">
          <span className="text-base w-2/3">{item.name}</span>
          <button
            onClick={() => removeFromCart(item.id)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 4.6875H16.3125V3.75C16.3125 3.20299 16.0952 2.67839 15.7084 2.29159C15.3216 1.9048 14.797 1.6875 14.25 1.6875H9.75C9.20299 1.6875 8.67839 1.9048 8.29159 2.29159C7.9048 2.67839 7.6875 3.20299 7.6875 3.75V4.6875H3.75C3.60082 4.6875 3.45774 4.74676 3.35225 4.85225C3.24676 4.95774 3.1875 5.10082 3.1875 5.25C3.1875 5.39918 3.24676 5.54226 3.35225 5.64775C3.45774 5.75324 3.60082 5.8125 3.75 5.8125H4.6875V19.5C4.6875 19.8481 4.82578 20.1819 5.07192 20.4281C5.31806 20.6742 5.6519 20.8125 6 20.8125H18C18.3481 20.8125 18.6819 20.6742 18.9281 20.4281C19.1742 20.1819 19.3125 19.8481 19.3125 19.5V5.8125H20.25C20.3992 5.8125 20.5423 5.75324 20.6477 5.64775C20.7532 5.54226 20.8125 5.39918 20.8125 5.25C20.8125 5.10082 20.7532 4.95774 20.6477 4.85225C20.5423 4.74676 20.3992 4.6875 20.25 4.6875ZM8.8125 3.75C8.8125 3.50136 8.91127 3.2629 9.08709 3.08709C9.2629 2.91127 9.50136 2.8125 9.75 2.8125H14.25C14.4986 2.8125 14.7371 2.91127 14.9129 3.08709C15.0887 3.2629 15.1875 3.50136 15.1875 3.75V4.6875H8.8125V3.75ZM18.1875 19.5C18.1875 19.5497 18.1677 19.5974 18.1326 19.6326C18.0974 19.6677 18.0497 19.6875 18 19.6875H6C5.95027 19.6875 5.90258 19.6677 5.86742 19.6326C5.83225 19.5974 5.8125 19.5497 5.8125 19.5V5.8125H18.1875V19.5ZM10.3125 9.75V15.75C10.3125 15.8992 10.2532 16.0423 10.1477 16.1477C10.0423 16.2532 9.89918 16.3125 9.75 16.3125C9.60082 16.3125 9.45774 16.2532 9.35225 16.1477C9.24676 16.0423 9.1875 15.8992 9.1875 15.75V9.75C9.1875 9.60082 9.24676 9.45774 9.35225 9.35225C9.45774 9.24676 9.60082 9.1875 9.75 9.1875C9.89918 9.1875 10.0423 9.24676 10.1477 9.35225C10.2532 9.45774 10.3125 9.60082 10.3125 9.75ZM14.8125 9.75V15.75C14.8125 15.8992 14.7532 16.0423 14.6477 16.1477C14.5423 16.2532 14.3992 16.3125 14.25 16.3125C14.1008 16.3125 13.9577 16.2532 13.8523 16.1477C13.7468 16.0423 13.6875 15.8992 13.6875 15.75V9.75C13.6875 9.60082 13.7468 9.45774 13.8523 9.35225C13.9577 9.24676 14.1008 9.1875 14.25 9.1875C14.3992 9.1875 14.5423 9.24676 14.6477 9.35225C14.7532 9.45774 14.8125 9.60082 14.8125 9.75Z"
                fill="#343330"
              />
            </svg>
          </button>
        </div>
        <div className="w-full justify-between flex flex-row items-end">
          <div className="text-base">
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
          <span className="text-lg font-medium text-[#82B835]">
            {(+item.price).toFixed(2)} kr
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
