import type { HeaderACF } from "@/types/acf";

export async function getStaticHeader():Promise<HeaderACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/11?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}