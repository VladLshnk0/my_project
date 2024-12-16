import type { InformasjonACF } from "@/types/acf";

function FAQ({ faqs }:{ faqs: InformasjonACF[] }) {
  
  return (
    <div className="w-full max-w-[1440px] flex flex-col divide-y-2 px-2 sm:px-4 divide-[#F7F7F8]">
      {faqs.map((info) => (
        <div key={info.number} className="flex flex-col md:flex-row mb-8 pt-4">
          <div className="w-full md:w-1/2 flex flex-col">
            <span className="text-base md:text-xl text-[#009999] font-semibold">{info.number}</span>
            <h2 id={info.number} className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase">{info.title}</h2>
          </div>
          <div className="w-full md:w-1/2 mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                {info.subtitle1 && info.subtitle1 !== "" && <h3 className="text-base sm:text-xl md:text-2xl text-[#009999]">{info.subtitle1}</h3>}
                {info.paragraph1 && info.paragraph1 !== "" && <p className={`text-sm md:text-lg ${info.paragraph1.includes('@') ? 'text-[#009999]' : ''}`}>{info.paragraph1}</p>}
              </div>

              <div className="flex flex-col gap-4">
                {info.subtitle2 && info.subtitle2 !== "" && <h3 className="text-base sm:text-xl md:text-2xl text-[#009999]">{info.subtitle2}</h3>}
                {info.paragraph2 && info.paragraph2 !== "" && <p className={`text-sm md:text-lg ${info.paragraph2.includes('@') ? 'text-[#009999]' : ''}`}>{info.paragraph2}</p>}
              </div>

              <div className="flex flex-col gap-4">
                {info.subtitle3 && info.subtitle3 !== "" && <h3 className="text-base sm:text-xl md:text-2xl text-[#009999]">{info.subtitle3}</h3>}
                {info.paragraph3 && info.paragraph3 !== "" && <p className={`text-sm md:text-lg ${info.paragraph3.includes('@') ? 'text-[#009999]' : ''}`}>{info.paragraph3}</p>}
              </div>

              <div className="flex flex-col gap-4">
                {info.subtitle4 && info.subtitle4 !== "" && <h3 className="text-base sm:text-xl md:text-2xl text-[#009999]">{info.subtitle4}</h3>}
                {info.paragraph4 && info.paragraph4 !== "" && <p className={`text-sm md:text-lg ${info.paragraph4.includes('@') ? 'text-[#009999]' : ''}`}>{info.paragraph4}</p>}
              </div>

              <div className="flex flex-col gap-4">
                {info.subtitle5 && info.subtitle5 !== "" && <h3 className="text-base sm:text-xl md:text-2xl text-[#009999]">{info.subtitle5}</h3>}
                {info.paragraph5 && info.paragraph5 !== "" && <p className={`text-sm md:text-lg ${info.paragraph5.includes('@') ? 'text-[#009999]' : ''}`}>{info.paragraph5}</p>}
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
