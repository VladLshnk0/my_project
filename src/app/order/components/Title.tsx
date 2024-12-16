'use client';
import { useCart } from "@/utils/state/state";
import Link from "next/link"

type Active = 'cart' | 'checkout' | 'confirmation'

function Title(props: {active: Active}) {

    const cart = useCart((state) => state.cart)

    const filled = 'w-24 md:w-52 rounded-full border-2 border-[#009999] bg-[#009999] flex items-center justify-center py-2 md:py-4 z-10'
    const active = 'w-24 md:w-52 rounded-full border-2 border-[#009999] bg-white flex items-center justify-center py-2 md:py-4 z-10'
    const inactive = 'w-24 md:w-52 rounded-full border-2 border-[#E5E5E5] bg-[#E5E5E5] flex items-center justify-center py-2 md:py-4 z-10'

    const paragraphInactive = 'text-xs md:text-lg text-white uppercase font-semibold'
    const paragraphActive = 'text-xs md:text-lg text-[#009999] uppercase font-semibold'

    const pages = [
        {
            name: 'cart',
            nameNorvegian: 'handlekurv',
            style: props.active === 'cart' ? active : filled,
            styleParagraph: props.active === 'cart' ? paragraphActive : paragraphInactive
        },
        {
            name: 'checkout',
            nameNorvegian: 'utsjekk',
            style: props.active === 'checkout' ? active : props.active === 'cart' ? inactive : filled,
            styleParagraph: props.active === 'checkout' ? paragraphActive : paragraphInactive
        },
        {
            name: 'confirmation',
            nameNorvegian: 'fullført',
            style: props.active === 'confirmation' ? active : inactive,
            styleParagraph: props.active === 'confirmation' ? paragraphActive : paragraphInactive
        }
    ]

  return (
    <div className='h-full w-full max-w-[1440px] flex flex-row items-center justify-center py-8 gap-4 sm:gap-16 relative'>
        {pages.map((page, index) => (
            <div key={index}>
            {page.name !== "confirmation" && cart.length > 0 ? <Link href={"/order/" + page.name} key={index} className={page.style}>
                <span className={page.styleParagraph}>{page.nameNorvegian}</span>
            </Link> : <div className={page.style}>
                <span className={page.styleParagraph}>{page.nameNorvegian}</span>
                </div>}
            </div>
        ))}
        <div className='absolute w-full h-full flex flex-row justify-center items-center top-0 left-0 -z-10'>
            <div className={props.active == 'checkout' || props.active == 'confirmation' ? 'w-1/4 h-[2px] bg-[#009999]' : 'w-1/4 h-[2px] bg-[#E5E5E5]'} />
            <div className={props.active == 'confirmation' ? 'w-1/4 h-[2px] bg-[#009999]' : 'w-1/4 h-[2px] bg-[#E5E5E5]'} />
        </div>
    </div>
  )
}

export default Title