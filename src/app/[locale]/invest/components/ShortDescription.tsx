import { DescriptionBlockACF, ParagraphsACF } from '@/types/acf'

function ShortDescription({props}: {props: DescriptionBlockACF}) {


    return (
        <div className='max-w-[1440px] pr-6 pl-4'>
            <h2 className='text-blue text-4xl md:text-5xl font-medium mb-4 md:mb-8' id={props.content_id.split('#')[1]}>
                {props.title}
            </h2>
            <div className='grid md:grid-flow-col gap-4 md:grid-rows-2'>
                {props.paragraphs.map((line: ParagraphsACF, index: number) => (
                    <p className='text-blue text-xl w-full' key={index} id={line.content_id.split('#')[1]}>
                        {line.paragraph}    
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ShortDescription