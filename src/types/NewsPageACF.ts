import type { LinkACF, ParagraphsACF } from "./acf";

//----------------NewsPage----------------
export type NewsPageACF = {
    acf: {
        hero_block: HeroBlockNewsACF;
        controlls_block: ControllsBlockNewsACF;
    };
}

export type HeroBlockNewsACF = {
    title: string;
    image: string;
    content_id: string;
};

export type ControllsBlockNewsACF = {
    search_text: string;
    filters_text: string;
    items_filter: ItemsControllACF[];
    category_text: string;
    category_items: ItemsControllACF[];
};

export type ItemsControllACF = {
    item: string;
};
//----------------NewsPage----------------
//-----------------Posts-------------------
export type NewsPostsACF = {
    acf: NewsACF;
};
export type NewsACF = {
    slug: string;
    category: string[];
    short_description: string | false;
    date_full: string;
    date_short: string;
    image: string;
    title: string;
    paragraphs: ParagraphsACF[];
    link: LinkACF;
    hyper_link: LinkACF;
    redirect_to_hyperlink: boolean;
    content_id: string;
};
//----------------Posts------------------