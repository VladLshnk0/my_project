import React from 'react'
import './Cookies.css'
import TextComponent from './TextComponent'
import ReloadComponent from '@/utils/components/ReloadComponent'

function page() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <TextComponent />
            <ReloadComponent />
        </div>
    )
}

export default page