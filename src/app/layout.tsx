import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./homepage/Header";
import Footer from "./homepage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dekket Bord",
  description: "Vi er spesialister på utleie av Figgjo porselen, glass, bestikk, serveringsutstyr og annet dekketøy til selskap og fest for private og bedrifter. Vi har kvalitetsvarer som foretrekkes av proffe aktører i bransjen! Vi er lokalisert i Stavanger og leverer daglig utstyr til hele Rogaland og Agder fylkene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
      <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/541928b8abe590fcd8634dd6/script.js"></script>
      </head>
      <body className={inter.className + " flex flex-col justify-between relative"} >
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
