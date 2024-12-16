import type { IndustrialBlockACF, LinkACF, ParagraphsACF } from "./acf";

export type CompaniesACF = {
    acf: {
        hero_block: HeroCompaniesBlockACF;
        introduction_block: IntroductionCompaniesBlockACF;
        our_partners_block: OurPartnersCompaniesBlockACF;
        companies_block: CompaniesCompaniesBlockACF;
        synergy_block: SynergyCompaniesBlockACF;
        become_block: BecomeCompaniesBlockACF;
        industrial_block: IndustrialBlockACF;
}
};
export type HeroCompaniesBlockACF = {
    title: string;
    image: string;
    content_id: string;
};

export type IntroductionCompaniesBlockACF = {
    title: string;
    text: string;
    image: string;
    paragraphs: ParagraphsACF[];
    content_id: string;
};

export type OurPartnersCompaniesBlockACF = {
    title: string;
    description: string;
    button_text: string;
    content_id: string;
};

export type CompaniesCompaniesBlockACF = {
    title: string;
    description: string;
    content_id: string;
};

export type SynergyCompaniesBlockACF = {
    title: string;
    description: string;
    content_id: string;
    image: string;
};

export type BecomeCompaniesBlockACF = {
    title: string;
    description: string;
    button_text: string;
    content_id: string;
    background_image: string;
};

// ------------------Posts-------------------

export type CompanyPostsACF = {
    acf: CompaniesArrayACF;
};

export type CompaniesArrayACF = {
    slug: string;
    title: string;
    category: string;
    background_image: string;
    logo: string;
    link: LinkACF;
    description_title: string;
    description: string;
    foundation: BlockACF;
    headquarters: BlockACF;
    website: WebSiteACF;
    image_array: ImageArrayACF[];
    content_id: string;
};

export type BlockACF = {
    text: string;
    year: string;
};

export type WebSiteACF = {
    text: string;
    link: string;
};

export type ImageArrayACF = {
    image: string;
};