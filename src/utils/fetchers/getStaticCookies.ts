export async function getStaticCookies():Promise<any> {
    return await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-json/wp/v2/pages/3", 
    {next:{revalidate: 60}}).then((res) => res.json());
}