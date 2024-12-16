import { useCart } from "@/utils/state/state";
import { useState } from "react";

export default function EditComponent({item}: {item: any}) {
    const [edit, setEdit] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity); 
    const [value, setValue] = useState(item.quantity.toString())
    const updateQuantity = useCart((state) => state.updateQuantity);
    const setTotal = useCart((state) => state.setTotal);
    const removeFromCart = useCart((state) => state.removeFromCart);
    function handlerEdit() {
      setEdit(true);
    }
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
<div className="flex flex-row justify-between items-center py-2">
                <span className="flex flex-row items-center gap-1 md:gap-2 overflow-hidden">
                  {!edit && <div className="w-5 h-5 cursor-pointer" onClick={handlerEdit}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8836 5.25795L12.7413 2.11568C12.6499 2.02427 12.5414 1.95175 12.422 1.90227C12.3025 1.8528 12.1745 1.82733 12.0452 1.82733C11.916 1.82733 11.7879 1.8528 11.6685 1.90227C11.5491 1.95175 11.4406 2.02427 11.3491 2.11568L2.67891 10.7866C2.58732 10.8779 2.51469 10.9864 2.46521 11.1059C2.41574 11.2253 2.39039 11.3534 2.39063 11.4827V14.625C2.39063 14.8861 2.49434 15.1364 2.67894 15.321C2.86355 15.5056 3.11393 15.6094 3.375 15.6094H6.51727C6.64657 15.6096 6.77465 15.5842 6.89412 15.5348C7.01359 15.4853 7.12208 15.4127 7.21336 15.3211L15.8836 6.65014C15.975 6.55873 16.0475 6.45021 16.097 6.33077C16.1465 6.21133 16.1719 6.08332 16.1719 5.95404C16.1719 5.82476 16.1465 5.69675 16.097 5.57732C16.0475 5.45788 15.975 5.34936 15.8836 5.25795ZM6.61641 14.7241C6.59016 14.7505 6.5545 14.7654 6.51727 14.7656H3.375C3.33771 14.7656 3.30194 14.7508 3.27556 14.7244C3.24919 14.698 3.23438 14.6623 3.23438 14.625V11.4827C3.23453 11.4455 3.24945 11.4098 3.27586 11.3836L9.5625 5.09623L12.903 8.43748L6.61641 14.7241ZM15.2866 6.05389L13.5 7.84053L10.1595 4.49998L11.9461 2.71264C11.9592 2.69956 11.9747 2.68919 11.9917 2.68211C12.0088 2.67504 12.0271 2.67139 12.0456 2.67139C12.0641 2.67139 12.0824 2.67504 12.0994 2.68211C12.1165 2.68919 12.132 2.69956 12.1451 2.71264L15.2866 5.8549C15.2997 5.86796 15.3101 5.88347 15.3172 5.90054C15.3242 5.91762 15.3279 5.93591 15.3279 5.95439C15.3279 5.97287 15.3242 5.99117 15.3172 6.00825C15.3101 6.02532 15.2997 6.04083 15.2866 6.05389Z"
                        fill="#929292"
                      />
                    </svg>
                  </div>}
                  <p className="text-sm truncate w-full md:w-48">{item.name}</p>
                </span>
                {edit ? <div className="w-24 flex flex-row items-center justify-between border-2 border-[#F2F2F8] p-1">
      <button type="button" onClick={() => {if(quantity > 1){updateQuantity(item.id, quantity-1); setQuantity(quantity - 1);setValue((quantity-1).toString());setTotal()}}}>
        <span className="text-[#727276] text-2xl">
                    -
        </span>
      </button>

      <input className="text-xl w-full text-center outline-none" value={value} onChange={handlerChange}/>

      <button type="button" onClick={() => {updateQuantity(item.id, quantity + 1); setQuantity(quantity + 1);setValue((quantity+1).toString());setTotal()}}>
        <span className="text-[#727276] text-2xl">
          +
        </span>
      </button>
        </div> : <span className="w-5">x{item.quantity}</span>}
                {edit ? <button type="button"
                  onClick={() => setEdit(false)}
                  className="w-5 h-5  flex items-center justify-center"
                >
                  X
                </button> : <button type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="w-5 h-5  flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1875 3.51562H12.2344V2.8125C12.2344 2.40224 12.0714 2.00879 11.7813 1.71869C11.4912 1.4286 11.0978 1.26563 10.6875 1.26562H7.3125C6.90224 1.26563 6.50879 1.4286 6.21869 1.71869C5.9286 2.00879 5.76562 2.40224 5.76562 2.8125V3.51562H2.8125C2.70061 3.51562 2.59331 3.56007 2.51419 3.63919C2.43507 3.71831 2.39063 3.82561 2.39062 3.9375C2.39063 4.04939 2.43507 4.15669 2.51419 4.23581C2.59331 4.31493 2.70061 4.35938 2.8125 4.35938H3.51562V14.625C3.51562 14.8861 3.61934 15.1365 3.80394 15.3211C3.98855 15.5057 4.23893 15.6094 4.5 15.6094H13.5C13.7611 15.6094 14.0115 15.5057 14.1961 15.3211C14.3807 15.1365 14.4844 14.8861 14.4844 14.625V4.35938H15.1875C15.2994 4.35938 15.4067 4.31493 15.4858 4.23581C15.5649 4.15669 15.6094 4.04939 15.6094 3.9375C15.6094 3.82561 15.5649 3.71831 15.4858 3.63919C15.4067 3.56007 15.2994 3.51562 15.1875 3.51562ZM6.60938 2.8125C6.60938 2.62602 6.68345 2.44718 6.81532 2.31532C6.94718 2.18345 7.12602 2.10938 7.3125 2.10938H10.6875C10.874 2.10938 11.0528 2.18345 11.1847 2.31532C11.3165 2.44718 11.3906 2.62602 11.3906 2.8125V3.51562H6.60938V2.8125ZM13.6406 14.625C13.6406 14.6623 13.6258 14.6981 13.5994 14.7244C13.5731 14.7508 13.5373 14.7656 13.5 14.7656H4.5C4.4627 14.7656 4.42694 14.7508 4.40056 14.7244C4.37419 14.6981 4.35938 14.6623 4.35938 14.625V4.35938H13.6406V14.625ZM7.73438 7.3125V11.8125C7.73438 11.9244 7.68993 12.0317 7.61081 12.1108C7.53169 12.1899 7.42439 12.2344 7.3125 12.2344C7.20061 12.2344 7.09331 12.1899 7.01419 12.1108C6.93507 12.0317 6.89062 11.9244 6.89062 11.8125V7.3125C6.89062 7.20061 6.93507 7.09331 7.01419 7.01419C7.09331 6.93507 7.20061 6.89062 7.3125 6.89062C7.42439 6.89062 7.53169 6.93507 7.61081 7.01419C7.68993 7.09331 7.73438 7.20061 7.73438 7.3125ZM11.1094 7.3125V11.8125C11.1094 11.9244 11.0649 12.0317 10.9858 12.1108C10.9067 12.1899 10.7994 12.2344 10.6875 12.2344C10.5756 12.2344 10.4683 12.1899 10.3892 12.1108C10.3101 12.0317 10.2656 11.9244 10.2656 11.8125V7.3125C10.2656 7.20061 10.3101 7.09331 10.3892 7.01419C10.4683 6.93507 10.5756 6.89062 10.6875 6.89062C10.7994 6.89062 10.9067 6.93507 10.9858 7.01419C11.0649 7.09331 11.1094 7.20061 11.1094 7.3125Z"
                      fill="#343330"
                    />
                  </svg>
                </button>}

                <span className="w-20 flex justify-end">
                  kr {(+item.price).toFixed(2)}
                </span>
              </div>

  );
}