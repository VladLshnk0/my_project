import { getNews } from "./getNews";
import { NewsPostsACF } from "@/types/NewsPageACF";


export async function getNewsByCategory(slug: string):Promise<NewsPostsACF[] | null> {
    const data = await getNews();
    const news = data.filter((newsItem: NewsPostsACF) => newsItem.acf.category.includes(slug))
    if (news) {
        return news
    } else {
        return null
    }
}