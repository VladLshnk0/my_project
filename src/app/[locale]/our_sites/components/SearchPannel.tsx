// import { PostsBlock } from '@/types/OurSitesACF'
// import ArrowDownTurquoise from '@/utils/components/ArrowDownTurquoise'
// import SearchIconBlue from '@/utils/components/SearchIconBlue'
// import React from 'react'

// function SearchPannel({props} : {props : PostsBlock }) {
//     return (
//         <div className='default:w-[1440px] px-5 default:px-0 w-full mt-20 mb-16'>
//             <div className='flex justify-between w-full h-12 gap-32'>
//                 <div className='w-[50%] border border-blue flex flex-row gap-4 items-center'>
//                     <div className='ml-4'>
//                         <SearchIconBlue />
//                     </div>
//                     <input
//                         type='text'
//                         placeholder={props.search_text}
//                         className='w-full bg-bg-color py-1 outline-none mt-1'
//                     />
//                 </div>
//                 <div className='flex mt-2 gap-4 h-10 w-[50%]'>
//                     <div className='flex flex-row justify-between items-center px-4 border border-blue w-[40%] h-full'>
//                         <p className='text-blue text-base font-light'>{props.filter_group.filter_text}</p>
//                         <div>
//                             <ArrowDownTurquoise />
//                         </div>
//                     </div>
//                     <div className='flex flex-row justify-between items-center px-4 border border-blue w-[60%] h-full'>
//                         <p className='text-blue text-base font-light'>{props.category_group.category_text}</p>
//                         <div>
//                             <ArrowDownTurquoise />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SearchPannel