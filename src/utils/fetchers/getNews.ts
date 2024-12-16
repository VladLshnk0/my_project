import { NewsPostsACF } from "@/types/NewsPageACF";

function getFullDate(date: string): string {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    return `${dateObj.getDate()} ${month} ${dateObj.getFullYear()}`;
}

function getShortDate(date: string): string {
    const short = date.split("T")[0].split("-").reverse().join(".");
    const cutYear = short.slice(short.length-2, short.length);
    return short.split(".").slice(0, 2).join(".") + "." + cutYear;
}

export async function getNews():Promise<NewsPostsACF[]> {
    const acf = await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/posts?categories=14&_fields=acf&acf_format=standard", {next:{revalidate: 60}}).then((res) => res.json());
    const data = await fetch(process.env.WORDPRESS_PUBLIC_URL + "/wp-json/wp/v2/posts?categories=14", 
    {next:{revalidate: 60}}).then((res) => res.json());
    const posts = data.map((post: any, index: number) => {
        return {
            acf: {...acf[index].acf, date_full: getFullDate(post.date), date_short: getShortDate(post.date)},
        }
    });
    return posts;
}