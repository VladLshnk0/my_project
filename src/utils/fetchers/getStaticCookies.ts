export async function getStaticCookies():Promise<any> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/3", 
    {next:{revalidate: 60}}).then((res) => res.json());
}