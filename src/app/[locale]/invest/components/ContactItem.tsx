import type { MembersACF } from "@/types/acf"
import Link from "next/link"

function ContactItem({ team, active, index }:{team: MembersACF, active: number | false, index: number}) {
    return (
        <div className={`flex-col h-full text-blue justify-between p-1 xl:p-4 ${active === index ? 'flex basis-1/2' : 'hidden'}`}>
            <div className="flex flex-col shrink gap-8 w-full">
                <div>
                    <span className="font-medium text-turquoise text-wrap text-xs xl:text-sm">{team.position}</span>
                    <h3 className="xl:text-2xl font-semibold text-wrap">{team.full_name}</h3>
                </div>
                <p className="text-wrap text-xs xl:text-sm">{team.description}</p>
                <div className="flex flex-col gap-4">
                    <span className="text-wrap text-xs xl:text-sm">{team.email}</span>
                    <span className="text-wrap text-xs xl:text-sm">{team.phone}</span>
                </div>
            </div>
            <Link href={team.linkedin_url} target="_blank" className="w-6 h-6 bg-blue text-white text-center text-xl font-bold">in</Link>
        </div>
    )
}

export default ContactItem