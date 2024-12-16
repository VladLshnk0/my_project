import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center gap-5 max-w-[1440px] mx-auto my-10 text-blue">
        <h1 className="text-2xl md:text-5xl font-medium">Something wrong. Error 404</h1>
        <h2 className="text-2xl md:text-5xl font-medium">Page not found</h2>
        <h3 className="text-lg md:text-2xl font-medium">Try again.</h3>
        <Link href="/" className="underline hover:no-underline">Main page </Link>
    </div>
  );
}