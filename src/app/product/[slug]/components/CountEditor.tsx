import { useState } from "react";

type CountEditorProps = {
  quantity: number;

  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

function CountEditor({ quantity, setQuantity }: CountEditorProps) {
  const [value, setValue] = useState(quantity.toString())
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(parseInt(e.target.value)) && parseInt(e.target.value) >= 0) {
      setValue(e.target.value)
      setQuantity(parseInt(e.target.value))
    }else{
      setValue('')
      setQuantity(1)
    }
  }
  return (
    <div className="py-4 px-2 w-32 border border-[#009999] rounded-md flex flex-row items-center justify-between">
      <button onClick={() => {if(quantity > 1){setQuantity(quantity - 1);setValue((quantity-1).toString())}}}>
        <span className="text-[#009999] text-2xl">
          <svg
            width="23"
            height="23"
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

      <input className="text-2xl w-full text-center outline-none" value={value} onChange={handlerChange}/>

      <button onClick={() => {setQuantity(quantity + 1);setValue((quantity+1).toString())}}>
        <span className="text-[#009999] text-2xl">
          <svg
            width="23"
            height="23"
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
  );
}

export default CountEditor;
