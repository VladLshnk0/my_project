export default function IconArrowDown({isDown}:{isDown:boolean}) {
  return (
    <span className={`${isDown ? '' : 'rotate-180'} transition-transform m-0 p-0`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </span>
  );
}
