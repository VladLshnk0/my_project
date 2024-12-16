import { MapBlockACF } from '@/types/acf'
import PanoramView from '@/components/homepageComponents/PanoramView/PanoramView'
import TestMap from '@/utils/components/Map/TestMap'
import MapComponent from '@/utils/components/Map'

function VirtualTour({ props }: { props: MapBlockACF }) {
    return (
        <div className='max-w-[1440px] pl-6 pr-4 w-full flex flex-col md:gap-8 gap-4'>
            <h2 className='text-3xl font-medium md:text-5xl text-blue' id={props.content_id.split('#')[1]}>{props.title}</h2>
            <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center sm:justify-between'>
                <p className='w-full text-blue text-xl'>{props.description}</p>
                {/* <button className='w-48 h-12 border-2 border-blue flex items-center justify-center bg-blue text-white hover:bg-transparent hover:text-blue transition-colors duration-200 mt-8 sm:mt-0'>
                    {props.button_text}
                </button> */}
            </div>
            {/* <PanoramView /> */}
            <div className='w-full h-[600px]'>
            <TestMap />
            </div>
            
        </div>
    )
}

export default VirtualTour