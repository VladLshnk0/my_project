import { AboutUsACF } from "@/types/AboutUsACF";

export async function getStaticAboutUs():Promise<AboutUsACF> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/457?_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}