import React from 'react'
import Title from './components/Title'
import ShortDescription from './components/ShortDescription'
import FieldsList from './components/FieldsList'
import Pros from './components/Pros'
import OurValues from './components/OurValues'
import VirtualTour from './components/VirtualTour'
import Team from './components/Team'
import Contacts from './components/Contacts'
import { getStaticInvest } from '@/utils/fetchers/getStaticInvest'
import { InvestACF } from '@/types/acf'

async function page() {

  const data: InvestACF = await getStaticInvest();
  const heroSection = data.acf.hero_block;
  const description = data.acf.description_block;
  const benefits = data.acf.benefits_block;
  const images = data.acf.benefits_block.benefits.map(benefit => benefit.image)
  const values = data.acf.values_block;
  const virtualTour = data.acf.map_block;
  const team = data.acf.team_block;
  const contacts = data.acf.contact_block;

  return (
    <div className='flex flex-col items-center gap-8 md:gap-16'>
        <Title props={heroSection}/>
        <ShortDescription props={description}/>
        <FieldsList props={description.articles} />
        <Pros props={benefits} images={images}/>
        <OurValues props={values}/>
        <VirtualTour props={virtualTour}/>
        {/* <Team props={team} /> */}
        <Contacts props={contacts} />
    </div>
  )
}

export default page