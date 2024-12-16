import Image from 'next/image'
import Link from 'next/link'
import { ArticlesBlock } from '@/types/OurSitesACF'


function Article({ articles }: { articles: ArticlesBlock }) {

    const article = articles?.articles[0]

    return (
        <>
            {article &&
                <Link href={article.link_url} target='_blank'>
                    <span className='xl:h-[575px] w-full xl:w-[1440px] relative my-16 overflow-hidden bg-gradient-to-r from-blue/50 to-transparent flex flex-row'>
                        <Image src={article.image} alt={article.title} width={1440} height={575} className='-z-10 object-cover absolute h-[575px] w-full overflow-hidden' />
                        <span className='max-w-[1440px] w-full pl-6 lg:pl-10 2xl:pl-6 pr-4 py-8 flex flex-col gap-8 justify-between'>
                            <span className='block w-full md:w-1/2'>
                                <span className='block text-xl sm:text-3xl font-light text-white'>{article.small_title}</span>
                                <span className='block text-3xl sm:text-5xl text-white mt-4'>{article.title}</span>
                                <span className='block text-base sm:text-xl text-white mt-8'>{article.text}</span>
                                <span className='flex flex-row gap-2 mt-4 items-center font-medium group hover:gap-4 transition-all duration-500'>
                                    <span className='text-white text-xl group-hover:text-turquoise duration-500'>{article.link_text}</span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541584 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C24.9961 9.18599 23.6779 6.00882 21.3345 3.66546C18.9912 1.3221 15.814 0.00389197 12.5 0ZM12.5 23.5294C10.3186 23.5294 8.18617 22.8825 6.37239 21.6706C4.55861 20.4587 3.14495 18.7361 2.31016 16.7208C1.47537 14.7054 1.25695 12.4878 1.68252 10.3483C2.10809 8.20877 3.15854 6.24352 4.70103 4.70103C6.24352 3.15854 8.20878 2.10809 10.3483 1.68251C12.4878 1.25694 14.7054 1.47536 16.7208 2.31015C18.7361 3.14494 20.4587 4.55861 21.6706 6.37239C22.8825 8.18616 23.5294 10.3186 23.5294 12.5C23.5262 15.4242 22.3631 18.2277 20.2954 20.2954C18.2277 22.3631 15.4242 23.5262 12.5 23.5294ZM15.9608 11.9804C16.0985 12.1183 16.1758 12.3051 16.1758 12.5C16.1758 12.6949 16.0985 12.8817 15.9608 13.0196L11.0588 17.9216C10.9194 18.0514 10.7351 18.1222 10.5446 18.1188C10.3541 18.1154 10.1723 18.0383 10.0376 17.9035C9.90291 17.7688 9.82574 17.5871 9.82238 17.3966C9.81902 17.2061 9.88973 17.0217 10.0196 16.8823L14.4007 12.5L10.0196 8.11765C9.88973 7.97826 9.81902 7.7939 9.82238 7.60341C9.82574 7.41292 9.90291 7.23117 10.0376 7.09645C10.1723 6.96173 10.3541 6.88456 10.5446 6.8812C10.7351 6.87784 10.9194 6.94855 11.0588 7.07843L15.9608 11.9804Z" fill="white" />
                                    </svg>
                                </span>
                            </span>
                            <span className='text-white font-thin text-2xl'>{article.date}</span>
                        </span>
                    </span>
                </Link>
            }
        </>
    )
}

export default Article