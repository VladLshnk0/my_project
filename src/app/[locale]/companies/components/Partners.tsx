import { OurPartnersCompaniesBlockACF } from '@/types/CompaniesACF'
import React from 'react'
import Posts from './Posts'
import { PostsACF } from '@/types/acf'

function Partners({ props, posts }: { props: OurPartnersCompaniesBlockACF, posts: PostsACF[] }) {
  return (
    <div className='hidden default:w-[1440px] px-5 my-16'>
      <h2 className='text-3xl sm:text-5xl' id={props.content_id.split('#')[1]}>{props.title}</h2>
      <p className='text-xl sm:text-xl mt-4 sm:w-[55%]'>{props.description}</p>
      <Posts props={posts} />
      <div className='w-full flex justify-center mt-16'>
        <button className='w-48 h-12 border-2 border-blue text-blue flex items-center justify-center hover:text-white hover:bg-blue transition-colors duration-300'>
          {props.button_text}
        </button>
      </div>
    </div>
  )
}

export default Partners