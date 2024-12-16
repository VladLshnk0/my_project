import { BenefitsBlockACF } from '@/types/acf'
import Image from 'next/image'

function Pros({ props, images }: { props: BenefitsBlockACF, images: string[] }) {

    const pros = props.benefits

    return (
        <div className='max-w-[1440px] pl-6 pr-4'>
            <h2 className='text-blue font-medium text-3xl md:text-5xl' id={props.content_id.split('#')[1]}>{props.title}</h2>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8'>
                {pros && pros.map((pro, index) => (
                    <div key={index} className={'w-full h-64 bg-light-blue border-2 border-gray relative overflow-hidden'}>
                        <Image src={images[index]} fill alt={'Image'} className='object-fill'/>
                        {index === 0 &&
                            <div className='relative z-10 w-full h-full flex flex-col justify-start items-center'>
                                <p className='text-blue text-2xl xl:text-4xl font-medium mt-4 w-[80%] text-center'>{pro?.title}</p>
                                <div className='border-b-2 border-white w-32 mt-4' />
                            </div>
                        }
                        {index === 1 &&
                            <div className='relative z-10 pl-[40%] h-full flex flex-col justify-start items-center'>
                                <p className='text-blue text-2xl xl:text-4xl font-medium mt-4 w-[80%] text-left'>{pro?.title}</p>
                            </div>
                        }
                        {index === 2 &&
                            <div className='relative z-10 w-full pr-[35%] h-full flex flex-col justify-start items-center'>
                                <p className='text-blue text-2xl xl:text-4xl font-medium mt-4 w-[80%] text-center'>{pro?.title}</p>
                                <div className='border-b-2 border-turquoise w-32 mt-4' />
                                
                                <p className='text-blue text-base xl:text-2xl font-medium mt-4'>{pro?.text?.split('/n')[0]}</p>
                                <p className='text-blue text-sm font-light mt-2'>{pro?.text?.split('/n')[1]}</p>
                            </div>
                        }
                        {index === 3 &&
                            <div className='relative z-10 w-full h-full flex flex-col justify-start items-center'>
                                <p className='text-blue text-2xl xl:text-4xl font-medium mt-4 w-[80%] text-center'>{pro?.title}</p>
                                <div className='border-b-2 border-white w-32 mt-4' />
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pros