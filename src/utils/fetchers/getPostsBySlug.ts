import type { PostsACF } from "@/types/acf";
import { getPosts } from "./getPosts";


export async function getPostsBySlug(slug: string):Promise<PostsACF | null> {
    const data = await getPosts();
    const site = data.find((company: PostsACF) => company.acf.slug === slug);
    if (site) {
        return site
    } else {
        return null
    }
}