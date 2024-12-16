import React from 'react'
import Title from './components/Title'
import TextComponent from './components/TextComponent'
import { getStaticCookies } from '@/utils/fetchers/getStaticCookies'
import ReloadComponent from '@/utils/components/ReloadComponent'

async function page() {

    const data = await getStaticCookies()

    return (
        <div className='flex flex-col justify-center items-center'>
            <Title title={data.title.rendered} />
            <TextComponent content={data.content.rendered}/>
            <ReloadComponent />
        </div>
    )
}

export default page