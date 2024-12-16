import type { ImageACF } from "./acf";

export type AboutUsACF = {
    acf: {
        hero_block: HeroBlockAboutUsACF;
        norsea_block: NorseaBlockAboutUsACF;
        virtual_tur_block: VirtualTourBlockAboutUsACF;
        atlantic_today_block: AtlanticTodayBlockAboutUsACF;
        more_info_block: MoreInfoBlockAboutUsACF;
        our_ambition_block: OurAmbitionBlockAboutUsACF;
        footer_about_us_block: FooterAboutUsBlockAboutUsACF;
    };
};

export type HeroBlockAboutUsACF = {
    title: string;
    description: string;
    image: string;
    content_id: string;
};

export type NorseaBlockAboutUsACF = {
    title: string;
    description: string;
    gallery: ImageACF[];
    content_id: string;
};

export type VirtualTourBlockAboutUsACF = {
    title: string;
    description: string;
    panorama: ImageACF[];
    content_id: string;
};

export type AtlanticTodayBlockAboutUsACF = {
    title: string;
    description: string;
    poster: string;
    content_id: string;
};

export type MoreInfoBlockAboutUsACF = {
    video_source: string;
    video_text: string;
    video_poster: string;
    some_image: string;
    additional_info: AdditionalInfoAboutUsACF[];
};

export type AdditionalInfoAboutUsACF = {
    title: string;
    description: string;
    content_id: string;
    numer_text: string;
};

export type OurAmbitionBlockAboutUsACF = {
    title: string;
    description: string;
    content_id: string;
};

export type FooterAboutUsBlockAboutUsACF = {
    logo: string;
    background_image: string;
    text: string;
    button_text: string;
    content_id: string;
};