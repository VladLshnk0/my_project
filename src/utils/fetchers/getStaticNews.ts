import type { NewsPageACF } from "@/types/NewsPageACF";

export async function getStaticNews():Promise<NewsPageACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/720?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}