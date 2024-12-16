import type { CompaniesACF } from "@/types/CompaniesACF";


export async function getStaticCompanies():Promise<CompaniesACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/388?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}