import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#009999] w-full mx-auto flex justify-center">
      <div className="flex flex-col divide-y divide-[#26a8a8] items-center px-2 sm:px-4 justify-between w-full max-w-[1440px]">
        <div className="w-full flex flex-col sm:flex-row gap-8 md:gap-32 py-16">
          <div className="flex flex-col">
            <h2 className="text-base text-white uppercase font-semibold">
              Dekket bord AS
            </h2>
            <p className="text-sm text-[#ccebeb] font-light mt-4">
              Sjøhagen 11, Hillevåg
            </p>
            <p className="text-sm text-[#ccebeb] font-light">
              Postboks 3120, Hillevåg
            </p>
            <p className="text-sm text-[#ccebeb] font-light">4095 Stavanger</p>
            <p className="text-sm text-[#ccebeb] font-light">
              Org.nr. 987 687 754
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base text-white uppercase font-semibold">
              Kontakt
            </h2>
            <p className="text-sm text-[#ccebeb] font-light mt-4">Telefon</p>
            <p className="text-sm text-[#ccebeb] font-light">
              Arne Hatløy 908 84 354
            </p>
            <p className="text-sm text-[#ccebeb] font-light">
              Jan M.Nilsen 982 09 476
            </p>
            <div className="flex flex-row gap-2 items-center mt-4">
              <p className="text-sm text-[#ccebeb] font-light ">E-post:</p>
              <Link href="mailto:info@dekketbord.no" className="text-[#99d6d6]">
                info@dekketbord.no
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between py-4">
          <div className="order-2 sm:order-1">
          <span className="text-base text-[#ccebeb] font-light">
          Utviklet av{" "}
            <Link
              href="https://advanz.no/"
              className="text-white font-medium pl-1 hover:underline"
            >
              Advanz
            </Link>
          </span>
          </div>
          <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-2 text-sm md:text-base text-[#ccebeb] font-light">
          <Link href={'/privacy'} className="hover:underline">Personvernerklæring</Link>
          <Link href={'/cookies'} className="hover:underline">Informasjonskapsler</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
