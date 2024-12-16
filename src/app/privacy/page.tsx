import Title from './components/Title'
import TextComponent from './components/TextComponent'
import { getStaticCookies } from '@/utils/fetchers/getStaticCookies'
import { Suspense } from 'react';

async function page() {

    const data = await getStaticCookies();
    return (
        <div className='flex flex-col justify-center items-center'>
            <Title title={data?.title?.rendered} />
            <Suspense fallback={null}><TextComponent content={data?.content?.rendered}/></Suspense>
        </div>
    )
}

export default page