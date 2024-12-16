import { AboutUsACF } from "@/types/acf";

export async function getStaticAboutUs():Promise<AboutUsACF> {
    return await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-json/wp/v2/pages/419?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}