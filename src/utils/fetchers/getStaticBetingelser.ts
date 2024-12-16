import type { BetingelserACF } from "@/types/acf";

export async function getStaticBetingelser():Promise<BetingelserACF> {
    return await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-json/wp/v2/pages/649?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}