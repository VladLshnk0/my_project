import Title from './components/Title'
import Partners from './components/Partners'
import ContactUs from './components/ContactUs'
import { getStaticPartners } from '@/utils/fetchers/getStaticPartners'

async function page() {

  const data = await getStaticPartners()

  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <Title props={data.acf.top_section} />
        <Partners props={data.acf.partners}/>
        <ContactUs props={data.acf.contact_us}/>
    </div>
  )
}

export default page