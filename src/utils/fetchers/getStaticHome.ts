import type { HomeACF } from "@/types/acf";

export async function getStaticHome():Promise<HomeACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/25?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}