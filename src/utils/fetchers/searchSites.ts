'use server'

export async function getSearchSites(search: string) {
    const response = await fetch(`${process.env.WORDPRESS_PUBLIC_URL}/wp-json/wp/v2/posts?categories=13&acf_format=standard&search=${search}`);
    const data = await response.json();
    return data;
}