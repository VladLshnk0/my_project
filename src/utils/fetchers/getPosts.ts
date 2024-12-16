import type { PostsACF } from "@/types/acf";

// export async function getPosts():Promise<PostsACF> {
//     return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/175?_fields=acf&acf_format=standard", 
//     {next:{revalidate: 60}}).then((res) => res.json());
// }

export async function getPosts():Promise<PostsACF[]> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/posts?categories=13&_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}