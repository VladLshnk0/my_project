'use client';

export default function RabattButton() {
  return (
    <button onClick={() => console.log("click")} className="border relative z-50 border-white py-2 px-4 mt-4 rounded-full text-white uppercase cursor-pointer">
          Få rabatt
        </button>
  );
}