import type { CompanyPostsACF } from "@/types/CompaniesACF";


// export async function getCompanyPosts():Promise<CompanyPostsACF> {
//     return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/pages/431?_fields=acf&acf_format=standard", 
//     {next:{revalidate: 60}}).then((res) => res.json());
// }

export async function getCompanyPosts():Promise<CompanyPostsACF[]> {
    return await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/posts?categories=1&_fields=acf&acf_format=standard", 
    {next:{revalidate: 60}}).then((res) => res.json());
}