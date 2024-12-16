import type { CompanyPostsACF } from "@/types/CompaniesACF";
import { getCompanyPosts } from "./getCompanyPosts";


export async function getCompanyBySlug(slug: string):Promise<CompanyPostsACF | null> {
    const data = await getCompanyPosts();
    const company = data.find((company: CompanyPostsACF) => company.acf.slug === slug);
    if (company) {
        return company
    } else {
        return null
    }
}