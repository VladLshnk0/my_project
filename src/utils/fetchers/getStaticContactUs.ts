import { ContactUsACF } from "@/types/ContactUsACF";


export async function getStaticContactUs():Promise<ContactUsACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/511?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}