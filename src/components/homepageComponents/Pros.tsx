import { InvestBlockACF } from '@/types/acf'

function Pros({ props }: { props: InvestBlockACF }) {

    return (
        <div className='py-8 mt-32 pt-32 md:mt-0 md:pb-16 max-w-[1440px]'>
            <h2 className='text-blue md:text-center md:text-7xl font-medium text-left text-5xl mx-4 md:mx-0 mt-8 sm:mt-0' id={props.content_id.split('#')[1]}>{props.title}</h2>
            <div className='mx-[5%] flex flex-col md:flex-row gap-2 md:gap-8 md:mt-16 divide-y-2 md:divide-y-0 divide-blue'>
                <div className='flex flex-col md:w-1/3 mt-16 md:mt-0 items-center text-center justify-start'>
                    <h3 className='text-6xl md:text-8xl text-turquoise mt-16 md:mt-0' id={props.articles[0].content_id.split('#')[1]}>{props.articles[0].text_number}</h3>
                    <p className='text-2xl font-semibold xl:min-h-16 2xl:min-h-0 text-blue flex items-center'>{props.articles[0].title}</p>
                    <p className='mt-4 text-lg font-light text-blue'>
                    {props.articles[0].description}
                    </p>
                    {/* <Link href={props.articles[0].link.link_url} className='hidden flex-row gap-2 mt-4 items-center font-medium hover:font-bold hover:gap-4 transition-all duration-500'>
                        <p className='text-xl text-blue'>Les mer</p>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                            </svg>
                        </div>
                    </Link> */}
                </div>
                <div className='flex flex-col md:w-1/3 mt-16 md:mt-0 items-center text-center justify-start'>
                    <h3 className='text-6xl md:text-8xl text-turquoise mt-16 md:mt-0' id={props.articles[1].content_id.split('#')[1]}>{props.articles[1].text_number}</h3>
                    <p className='text-2xl font-semibold xl:min-h-16 2xl:min-h-0 text-blue flex items-center'>{props.articles[1].title}</p>
                    <p className='mt-4 text-lg font-light text-blue'>
                    {props.articles[1].description}
                    </p>
                    {/* <Link href={props.articles[1].link.link_url} className='flex flex-row gap-2 mt-4 items-center font-medium hover:gap-4 transition-all duration-300'>
                        <p className='text-xl text-blue'>Les mer</p>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                            </svg>
                        </div>
                    </Link> */}
                </div>
                <div className='flex flex-col md:w-1/3 mt-16 md:mt-0 items-center text-center justify-start'>
                    <h3 className='text-6xl md:text-8xl text-turquoise mt-16 md:mt-0' id={props.articles[2].content_id.split('#')[1]}>{props.articles[2].text_number}</h3>
                    <p className='text-2xl font-semibold xl:min-h-16 2xl:min-h-0 text-blue flex items-center'>{props.articles[2].title}</p>
                    <p className='mt-4 text-lg font-light text-blue'>
                    {props.articles[2].description}
                    </p>
                    {/* <Link href={props.articles[2].link.link_url} className='flex flex-row gap-2 mt-4 items-center font-medium hover:font-bold hover:gap-4 transition-all duration-500'>
                        <p className='text-xl text-blue'>Les mer</p>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                            </svg>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Pros