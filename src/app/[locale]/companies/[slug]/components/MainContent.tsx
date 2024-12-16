import { CompanyPostsACF } from '@/types/CompaniesACF'
import React from 'react'
import Title from './Title'
import Info from './Info'

function MainContent({ props }: { props: CompanyPostsACF }) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Title props={props} />
            <Info props={props} />
        </div>
    )
}

export default MainContent