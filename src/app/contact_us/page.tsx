import Creds from './components/Creds'
import Map from './components/Map'
import BottomSection from './components/BottomSection'
import { getStaticContactUs } from '@/utils/fetchers/getStaticContactUs';

async function page() {

  const staticData = await getStaticContactUs();
  console.log("static data: ", staticData.acf);

  return (
    <div className='h-full w-full flex flex-col items-center relative'>
        <Creds props={staticData.acf.info}/>
        <Map/>
        <BottomSection props={staticData.acf.bottom_section}/>
    </div>
  )
}

export default page