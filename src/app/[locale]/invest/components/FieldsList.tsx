import Image from 'next/image'
import { ArticlesInvestACF, ParagraphsACF } from '@/types/acf'
import ArrowLink from '@/utils/components/ArrowLink'
import Link from 'next/link'

function FieldsList({ props }: { props: ArticlesInvestACF[] }) {

    const fields = props

    return (
        <div className='max-w-[1440px] pl-6 pr-4 flex flex-col gap-4 md:gap-8'>
            {fields.map((field, index) => (
                <Link href={field.link_url} target={field.link_url.includes('https') ? '_blank' : '_self'} key={index} 
                className={`flex gap-4 bg-white md:gap-8 w-full cursor-pointer ${index % 2 == 0 ? 'md:flex-row flex-col-reverse' : 'md:flex-row-reverse flex-col-reverse'} border border-dark-gray hover:border-turquoise transition-colors duration-300`}>
                    <div className='basis-full md:basis-1/2 flex flex-col p-4 gap-8 justify-between'>
                        <div className='flex flex-col gap-4'>
                            <h2 id={field.content_id.split('#')[1]} className='text-blue text-3xl md:text-5xl font-medium'>{field.title}</h2>
                            <div className='flex flex-col gap-4 text-blue text-base md:text-xl'>
                                {field.paragraphs.slice(0, 2).map((line: ParagraphsACF, index: number) => (
                                    <p key={index} id={line.content_id.split('#')[1]}>{line.paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <ArrowLink href={field.link_url} text='Learn more' />
                    </div>
                    <div className='basis-full md:basis-1/2'>
                        <Image width={565} height={335} src={field.image} alt={field.title} className='w-full h-full object-cover' />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default FieldsList