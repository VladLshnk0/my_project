export default function ChevronLeft({direction = "left"}:{direction?: "left" | "right"}) {
  return (
    <div className={`${direction === "left" ? '' : 'rotate-180'} w-11 h-11 flex justify-center rounded-full border items-center`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}
