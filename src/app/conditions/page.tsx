import TopSection from './components/TopSection'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'
import { getStaticBetingelser } from '@/utils/fetchers/getStaticBetingelser'

async function page() {
  const data = await getStaticBetingelser();
  console.log(data)
  const faqs = [data.acf.informasjon.bestilling, data.acf.informasjon.leieperiode, data.acf.informasjon.transport, 
    data.acf.informasjon.tilbakelevering, data.acf.informasjon.betaling];
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <TopSection title={data.acf.top_section.title} image={data.acf.top_section.image}/>
        <FAQ faqs={faqs}/>
        <ContactUs title1={data.acf.kontakt_oss.title1} title2={data.acf.kontakt_oss.title2} 
        button={data.acf.kontakt_oss.button_text} image={data.acf.kontakt_oss.image}/>
    </div>
  )
}

export default page