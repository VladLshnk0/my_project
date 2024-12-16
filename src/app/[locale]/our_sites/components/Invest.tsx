import Image from 'next/image'
import Link from 'next/link'
import { InvestBlock, StrategyBlock } from '@/types/OurSitesACF'

function Invest({ investProps, strategyProps, id }: { investProps: InvestBlock, strategyProps: StrategyBlock, id: string }) {

    const articles = investProps.items

    return (
        <div className='mt-16 flex flex-col items-center'>

            <div className='md:w-full xl:max-w-[1440px] px-5 lg:pl-5 lg:px-0 flex flex-col lg:flex-row gap-16 lg:gap-8 mt-16 h-full'>
                <div className='w-full lg:w-1/2 flex flex-col lg:pl-10'>
                    <h3 className='text-5xl text-blue' id={strategyProps.content_id.split('#')[1]}>{strategyProps.title}</h3>
                    {strategyProps.paragraphs && strategyProps.paragraphs.map((item, index) => (
                        <p key={index} id={item.content_id.split('#')[1]} className='text-lg text-blue mt-4 text-wrap'>{item.paragraph}</p>
                    ))}
                </div>
                <div className='w-full lg:w-1/2 flex flex-col h-full divide-y-4 divide-blue border-y-4 border-blue uppercase sm:mr-10'>
                    {strategyProps.paragraphs && strategyProps.strategies.map((strategy, index) => (
                        <div
                            key={index}
                            // href={strategy.link.link_url}
                            className='text-2xl sm:text-lg xl:text-2xl 2xl:text-3xl text-blue pl-4 sm:h-32 flex items-center'>
                            {strategy.link.link_text}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex default:w-[1440px] px-5 justify-end my-4'>
                {/* <button className='mt-8 bg-bg-col or text-blue border border-blue text-lg font-light py-2 px-20 hover:bg-blue hover:text-white transition-colors duration-200 ease-in-out'>{strategyProps.button_learn_more_text}</button> */}
            </div>
            {
                id !== 'renewable_energy' &&
                <>
                    <h2 className='text-5xl text-turquoise' id={investProps.content_id.split('#')[1]}>{investProps.title}</h2>
                    <div className='mt-16 flex flex-col lg:flex-row justify-center gap-8 default:w-[1440px] px-5 lg:px-16 min-h-[416px]'>
                        {articles && articles.map(article => (
                            <Link href={article.link.link_url} target='_blank' key={article.id} id={article.content_id.split('#')[1]} className='w-full cursor-pointer flex items-center relative transition-opacity opacity-100 hover:opacity-80'>
                                <Image width={400} height={500} src={article.image} alt='article' className='w-full h-full object-cover' />
                                <span className='absolute top-0 left-0 w-full h-full bg-black/20' />
                                <span className='absolute top-[5%] left-[5%] text-2xl text-white mt-4'>{article.text}</span>
                                <span className='absolute bottom-[5%] left-[5%]'>
                                    <span className='flex flex-row gap-2 mt-16 items-center font-medium hover:font-bold hover:gap-4 transition-all duration-500'>
                                        <span className='text-xl text-white'>{article.link.link_text}</span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.2613 12.2613L7.26129 22.2613C7.11912 22.3938 6.93107 22.4659 6.73677 22.4625C6.54247 22.459 6.35708 22.3803 6.21967 22.2429C6.08226 22.1055 6.00355 21.9201 6.00012 21.7258C5.99669 21.5315 6.06881 21.3435 6.20129 21.2013L15.67 11.7313L6.20129 2.26129C6.06881 2.11912 5.99669 1.93107 6.00012 1.73677C6.00355 1.54247 6.08226 1.35708 6.21967 1.21967C6.35708 1.08226 6.54247 1.00355 6.73677 1.00012C6.93107 0.996689 7.11912 1.06881 7.26129 1.20129L17.2613 11.2013C17.4017 11.3419 17.4806 11.5325 17.4806 11.7313C17.4806 11.93 17.4017 12.1207 17.2613 12.2613Z" fill="#00ADBB" />
                                            </svg>
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default Invest