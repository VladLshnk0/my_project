'use client';
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function AnalyticsComponent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [pagePath, setPagePath] = useState<string>("");
    useEffect(() => {
      const url = pathname + (searchParams.toString() && searchParams.toString() !== '' ? '?' + searchParams.toString() : "");
      setPagePath(url);
  }, [pathname, searchParams]);
  return (
    <Script
    async
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      console.log("pagePath: " + '${pathname + (searchParams.toString() && searchParams.toString() !== '' ? '?' + searchParams.toString() : "")}');
    gtag('event', 'page_view', {
    'send_to': 'G-9T31RRNYHM',
    'value': '${pathname + (searchParams.toString() && searchParams.toString() !== '' ? '?' + searchParams.toString() : "")}',
    });
    console.log("gtag page_view: " + '${pathname + (searchParams.toString() && searchParams.toString() !== '' ? '?' + searchParams.toString() : "")}');`,
    }}
    >
    </Script>
  );
}