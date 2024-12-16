'use client';

export default function ScrollUp() {
  return (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="bg-transparent transition-colors border-2 rounded-full text-turquoise border-turquoise hover:border-gray hover:text-gray fixed right-2 bottom-10 z-[1000] w-9 h-9 p-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
        </svg>
    </button>
  );
}