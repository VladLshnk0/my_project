'use client'
import { useState } from 'react'
import Image from 'next/image'
import ContactItem from './ContactItem'
import { MembersACF, TeamBlockACF } from '@/types/acf'


function Team({ props }: { props: TeamBlockACF }) {
    const [active, setActive] = useState<number | false>(false)
    return (
        <div className='default:w-[1440px] pl-6 pr-4 w-full my-8 md:my-16 flex flex-col gap-4'>
            <h2 className='text-3xl md:text-5xl text-blue font-medium' id={props.content_id.split('#')[1]}>{props.title}</h2>
            {props.description && <p className='md:w-[50%] text-blue md:text-xl'>{props.description}</p>}
            <div className='hidden lg:flex gap-4 overflow-hidden'>
                {props.teams.map((team: MembersACF, index) => (
                    <div id={team.content_id.split('#')[1]} key={index} className={`border h-[450px] border-blue transition-all duration-1000 ease-linear ${index === active ? 'basis-1/2' : 
                    `${index === 0 && active === props.teams.length - 1 ? 'basis-0 border-0' : `${index === props.teams.length - 1 && active !== false ? 'basis-0 border-0' : 'basis-1/4'}`}`}`}>
                        <div className='flex gap-2 h-full' onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(false)}>
                            <img src={team.foto} alt='Foto' className={`h-full object-cover transition-all duration-1000 ease-linear ${index === active ? 'grayscale-0 basis-1/2' : 'grayscale basis-full'}`} />
                            <ContactItem team={team} active={active} index={index} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-4 lg:hidden'>
                {props.teams.map((team: MembersACF, index) => (
                        <div id={team.content_id.split('#')[1]} key={index} className='flex flex-row w-full gap-4'>
                            <Image src={team.foto} alt='Foto' width={175} height={175} />
                            <div className='flex flex-col gap-4'>
                                <div>
                                <h3 className='text-blue text-xl'>{team.full_name}</h3>
                                <p className='text-turquoise text-base'>{team.position}</p>
                                </div>
                                <div>
                                <p className='text-blue text-sm mt-4'>{team.email}</p>
                                <p className='text-blue text-lg'>{team.phone}</p>
                                </div> 
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Team