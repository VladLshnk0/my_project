import { getNews } from "./getNews";
import { NewsPostsACF } from "@/types/NewsPageACF";


export async function getNewsBySlug(slug: string):Promise<NewsPostsACF | null> {
    const data = await getNews();
    const news = data.find((company: NewsPostsACF) => company.acf.slug === slug);
    if (news) {
        return news
    } else {
        return null
    }
}