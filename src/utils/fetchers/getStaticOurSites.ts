import { OurSitesACF } from "@/types/OurSitesACF";

const options: Record<string, string> = {
    ['maritime_energy_transition']: '177',
    ['agricaltural_production']: '804',
    ['renewable_energy']: '806',
};

export async function getStaticOurSites(id: string):Promise<OurSitesACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + `/wp-json/wp/v2/pages/${id ? options[id] : '177'}?_fields=acf&acf_format=standard`, 
    {next:{revalidate: 60}}).then((res) => res.json());
}