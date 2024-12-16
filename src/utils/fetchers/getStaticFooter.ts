import type { FooterACF } from "@/types/acf";

export async function getStaticFooter():Promise<FooterACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/141?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}