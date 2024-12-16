import { FormACF, IndustrialBlockACF, LinkACF, ParagraphsACF } from "./acf";

export type OurSitesACF = {
    acf: {
        hero_block: HeroBlock;
        posts_block: PostsBlock;
        cart_block: CartBlock;
        reports: ReportsBlock;
        articles: ArticlesBlock;
        invest_block: InvestBlock;
        strategy_block: StrategyBlock;
        contact_block: ContactBlock;
        pdf_file: string;
        // industrial_block: IndustrialBlockACF;
    }
}

export type HeroBlock = {
    image: string;
    title: string;
    content_id: string;
}

export type PostsBlock = {
    title: string;
    sub_title: string;
    button_more_text: string;
}

export type FilterGroup = {
    filter_text: string;
    filter_items: FilterItem[];
}

export type FilterItem = {
    item: string;
}

export type CategoryGroup = {
    category_text: string;
    category_items: CategoryItem[];
}

export type CategoryItem = {
    item: string;
}

export type CartBlock = {
    title: string;
    cart_source: string;
    default_image: string;
    content_id: string;
}

export type InvestBlock = {
    title: string;
    items: Article[];
    content_id: string;
}

export type Article = {
    id: string;
    image: string;
    text: string;
    description: string;
    link: LinkACF;
    content_id: string;
}

export type StrategyBlock = {
    title: string;
    paragraphs: ParagraphsACF[];
    strategies: Strategy[];
    button_learn_more_text: string;
    content_id: string;
}

export type Strategy = {
    link: LinkACF;
}

export type ContactBlock = {
    title: string;
    image: string;
    contacts: EmployeesACF[];
    title_form: string;
    form: FormACF;
    content_id: string;
}

export type EmployeesACF = {
    foto: string;
    full_name: string;
    position: string;
    email: string;
    phone: string;
    content_id: string;
}

export type ReportsBlock = {
    reports: Report[];
}

export type ArticlesBlock = {
    articles: Report[];
}

export type Report = {
    title: string;
    small_title: string;
    image: string;
    text: string;
    link_text: string;
    link_url: string;
    date: string;
}