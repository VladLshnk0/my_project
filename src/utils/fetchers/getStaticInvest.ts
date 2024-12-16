import type { InvestACF } from "@/types/acf";

export async function getStaticInvest():Promise<InvestACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/269?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}