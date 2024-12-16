import { IndustrialBlockACF, ParagraphsACF } from "./acf";

export type ContactUsACF = {
    acf: {
        hero_block: HeroBlockContactUsACF;
        form_block: FormBlockContactUsACF;
        industrial_block: IndustrialBlockACF;
    };
};

export type HeroBlockContactUsACF = {
    title: string;
    contacts: Contact[];
    bg_image: string;
    default_image: string;
    contact_people: ContactPerson[];
    content_id: string;
};

export type Contact = {
    text: string;
    information: string;
    content_id: string;
};

export type ContactPerson = {
    place_description: string;
    full_name: string;
    about_person: string;
    phone: Contact;
    email: Contact;
    content_id: string;
};

export type FormBlockContactUsACF = {
    title: string;
    paragraphs: ParagraphsACF[];
    form: FormContactUSACF;
    content_id: string;
    options: Option[];
    text_before_options: string;
    pdf: string;
};

export type FormContactUSACF = {
    first_name: string;
    last_name: string;
    company_name: string;
    position: string;
    email: string;
    phone: string;
    message: string;
    button_text: string;
};

export type Option = {
    option_name: string;
}