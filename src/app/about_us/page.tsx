import React, { Suspense } from 'react'
import TopSection from './components/TopSection'
import OurPhilosophy from './components/OurPhilosophy'
import OurHistory from './components/OurHistory'
import OurServices from './components/OurServices'
import OurVision from './components/OurVision'
import OurPreviousProjects from './components/OurPreviousProjects'
import ContactUs from './components/ContactUs'
import { getStaticAboutUs } from '@/utils/fetchers/getStaticAboutUs'

async function page() {

  const data = await getStaticAboutUs()

  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <TopSection props={data.acf.top_section} />
        <OurPhilosophy props={data.acf.top_section.text} />
        <OurHistory historyProps={data.acf.our_history} teamProps={data.acf.our_team} />
        <OurServices props={data.acf.our_services} />
        <OurVision props={data.acf.our_vision} />
        <OurPreviousProjects props={data.acf.our_work} />
        <ContactUs props={data.acf.contact_us} />
    </div>
  )
}

export default page