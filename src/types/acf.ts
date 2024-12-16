import { Option } from "./ContactUsACF";

//----------------Header----------------
export type HeaderACF = {
    acf: {
        available_languages: string;
        logo: string;
        navigation:ItemsNavigationsACF[];
        search_text: string;
        contact_us: LinkACF;
    }
};

export type ItemsNavigationsACF = {
    link: LinkACF;
    sub_menu: SubMenuACF[] | false;
};

export type SubMenuACF = {
    sub_link: LinkACF;
};
//----------------Header----------------


//----------------Home------------------

export type HomeACF = {
    acf: {
        hero_block: HeroBlockACF;
        title_block: TitleBlockACF;
        invest_block: InvestBlockACF;
        benefits_block: BenefitsBlockACF;
        industrial_block: IndustrialBlockACF;
        about_block: AboutBlockACF;
        virtual_tur: VirtualTurACF;
        news_block: NewsBlockACF;
        contact_block: ContactBlockACF;
    }
};

export type IndustrialBlockACF = {
    title: string;
    description: string;
    title_description_2: string;
    description_2: string;
    description_3: string;
    shema_image: string;
    content_id: string;
    button_1: LinkACF;
    button_2: LinkACF;
    bg_image: string;
};

export type VirtualTurACF = {
    title: string;
    sub_title: string;
    paragraphs: ParagraphsACF[];
    images: ImageACF[];
    button_text: string;
    content_id: string;
};

export type ImageACF = {
    image: string;
};

export type HeroBlockACF = {
    video_url: string;
    video_mobile_url: string;
    title: string;
    contact_button_text: string;
    get_started_text: string;
    content_id: string;
};

export type TitleBlockACF = {
    title: string;
    description: string;
    text_on_button: string;
    sites: SitesACF[];
    content_id: string;
};

export type SitesACF = {
    image: string;
    link: LinkACF;
};

export type LinkACF = {
    link_text: string;
    link_url: string;
};

export type InvestBlockACF = {
    title: string;
    articles: ArticlesACF[];
    content_id: string;
};

export type ArticlesACF = {
    text_number: string;
    title: string;
    description: string;
    link: LinkACF;
    content_id: string;
};

export type AboutBlockACF = {
    image: string;
    title: string;
    description: string;
    link: LinkACF;
    content_id: string;
};

export type NewsBlockACF = {
    title: string;
    text_on_button: string;
    content_id: string;
};

export type ParagraphsACF = {
    paragraph: string;
    content_id: string;
};

export type ContactBlockACF = {
    background_image: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    form: FormACF;
    text_before_options: string;
    options: Option[];
    pdf: string;
    content_id: string;
};

export type FormACF = {
    text_about_pdf: string;
    company_text: string;
    position_text: string;
    first_name_text: string;
    last_name_text: string;
    email_text: string;
    phone_text: string;
    message_text: string;
    text_agreement: string;
    text_on_button: string;
};
//----------------Home------------------
//----------------Footer----------------
export type FooterACF = {
    acf: {
        media_links: MediaLinksACF;
        navigation_group: {
            column: ColumnACF[];
        };
        footer_group: FooterGroupACF;
    }
};

export type FooterGroupACF = {
    all_right_text: string;
    link_privacy_policy: LinkACF;
    link_terms: LinkACF;
};

export type MediaLinksACF = {
    facebook_url: string;
    linkedin_url: string;
};

export type ColumnACF = {
    title: string;
    footer_links: LinkACF[];
};
//----------------Footer----------------

//----------------Posts-------------------
export type PostsACF = {
    acf: PostACF;
};

export type PostACF = {
    slug: string;
    banner: string;
    logo: string;
    title: string;
    sub_title: string;
    image: string;
    description: string;
    link: LinkACF;
    paragraphs: ParagraphsACF[];
    web_site: LinkACF;
    gallery_text: string;
    gallery: GalleryACF[];
    other_sites_text: string;
    content_id: string;
};

export type GalleryACF = {
    image: string;
};
//----------------Posts-------------------
//----------------Invest------------------

export type InvestACF = {
    acf: {
        hero_block: HeroBlockInvestACF;
        description_block: DescriptionBlockACF;
        benefits_block: BenefitsBlockACF;
        values_block: ValuesBlockACF;
        map_block: MapBlockACF;
        team_block: TeamBlockACF;
        contact_block: ContactBlockInvestACF;
    };
};

export type HeroBlockInvestACF = {
    title: string;
    image: string;
    content_id: string;
};

export type DescriptionBlockACF = {
    title: string;
    paragraphs: ParagraphsACF[];
    articles: ArticlesInvestACF[];
    content_id: string;
};

export type ArticlesInvestACF = {
    title: string;
    link_url: string;
    paragraphs: ParagraphsACF[];
    image: string;
    content_id: string;
};

export type BenefitsBlockACF = {
    title: string;
    benefits: BenefitsACF[];
    content_id: string;
};

export type BenefitsACF = {
    title: string;
    text: string;
    image: string;
    content_id: string;
};

export type ValuesBlockACF = {
    title: string;
    sub_title: string;
    image: string;
    lists: ValuesACF[];
    content_id: string;
};

export type ValuesACF = {
    title: string;
    description: string;
    image: string;
    content_id: string;
};

export type MapBlockACF = {
    title: string;
    description: string;
    button_text: string;
    default_image: string;
    source_url: string;
    content_id: string;
};

export type TeamBlockACF = {
    title: string;
    description: string;
    teams: MembersACF[];
    content_id: string;
};

export type MembersACF = {
    full_name: string;
    position: string;
    foto: string;
    description: string;
    email: string;
    phone: string;
    linkedin_url: string;
    content_id: string;
};

export type ContactBlockInvestACF = {
    title: string;
    description: string;
    button_text: string;
    image: string;
    content_id: string;
};

//----------------Invest------------------