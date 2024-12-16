export type ImageWP = {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    "1536x1536": string;
    "1536x1536-width": number;
    "1536x1536-height": number;
    "2048x2048": string;
    "2048x2048-width": number;
    "2048x2048-height": number;
    woocommerce_thumbnail: string;
    "woocommerce_thumbnail-width": number;
    "woocommerce_thumbnail-height": number;
    woocommerce_single: string;
    "woocommerce_single-width": number;
    "woocommerce_single-height": number;
    woocommerce_gallery_thumbnail: string;
    "woocommerce_gallery_thumbnail-width": number;
    "woocommerce_gallery_thumbnail-height": number;
  };
};

export type TopSectionHomePage = {
  title: string;
  text: string;
};

export type Category = {
  title: string;
  image: ImageWP;
};

export type Categories = {
  glass: Category;
  plates: Category;
  napkins: Category;
  cutlery: Category;
  candle_holder: Category;
  dish_serving: Category;
  salt: Category;
  coffee_equipment: Category;
};

export type CategoriesHomePage = {
  title: string;
  categories_list: Categories;
};

export type AboutUsHomePage = {
  small_title: string;
  big_title: string;
  text: string;
  button_text: string;
  video_one: string;
  video_two: string;
};

export type PopularProductsHomePage = {
  title: string;
  button_text: string;
};

export type PopularProduct = {
  product_name: string;
  product_price: string;
  product_material: string;
  product_image: string;
};

export type ConditionsHomePage = {
  title: string;
  // conditions_image: string;
  order: {
    name: string;
    title: string;
    text: string;
    image: string;
  };
  transport: {
    name: string;
    title: string;
    text: string;
    image: string;
  };
  return: {
    name: string;
    title: string;
    text: string;
    image: string;
  };
  payment: {
    name: string;
    title: string;
    text: string;
    image: string;
  };
};

export type VideoSectionHomePage = {
  text: string;
  button_text: string;
  video: string;
};

export type ContactInfoHomePage = {
  title: string;
  text: string;
  address_title: string;
  address: string;
  phone_title: string;
  phone: string;
  email_title: string;
  email: string;
  image: ImageWP;
};

export type HomeACF = {
  acf: {
    top_section: TopSectionHomePage;
    categories: CategoriesHomePage;
    about_us: AboutUsHomePage;
    popular_products: PopularProductsHomePage;
    conditions: any;
    video_section: VideoSectionHomePage;
    contact_us: ContactInfoHomePage;
  };
};

export type BetingelserACF = {
  acf: {
    top_section: {
      title: string;
      image: string;
    };
    informasjon: {
      bestilling: InformasjonACF;
      leieperiode: InformasjonACF;
      transport: InformasjonACF;
      tilbakelevering: InformasjonACF;
      betaling: InformasjonACF;
    };
    kontakt_oss: {
      title1: string;
      title2: string;
      image: string;
      button_text: string;
    };
  };
};

export type InformasjonACF = {
  number: string;
  title: string;
  subtitle1: string;
  paragraph1: string;
  subtitle2: string;
  paragraph2: string;
  subtitle3: string;
  paragraph3: string;
  subtitle4: string;
  paragraph4: string;
  subtitle5: string;
  paragraph5: string;
};

export type InfoContactUs = {
  title: string;
  text: string;
  address_title: string;
  address: string;
  phone_title: string;
  phone: string;
  email_title: string;
  email: string;
  image: ImageWP;
};

export type BottomSectionContactUs = {
  button_text: string;
  bottom_text: string;
  bottom_image: ImageWP;
};

export type ContactUsACF = {
  acf: {
    info: InfoContactUs;
    bottom_section: BottomSectionContactUs;
  };
};

export type TopSectionPartners = {
  title: string;
  text: string;
  image_1: ImageWP;
  image_2: ImageWP;
  image_3: ImageWP;
  image_4: ImageWP;
  image_5: ImageWP;
};

export type Partner = {
  name: string;
  description: string;
  logo: string;
  photo: string;
  link: string;
};

export type PartnersSectionPartners = {
  partner_1: Partner;
  partner_2: Partner;
  partner_3: Partner;
  partner_4: Partner;
  partner_5: Partner;
  partner_6: Partner;
};

export type ContactUsPartners = {
  text: string;
  button_text: string;
  background: ImageWP;
};

export type PartnersACF = {
  acf: {
    top_section: TopSectionPartners;
    partners: PartnersSectionPartners;
    contact_us: ContactUsPartners;
  };
};

export type TopSectionAboutUs = {
  title: string;
  text: string;
  background: ImageWP;
  button_text: string;
};

export type OurHistoryType = {
  name: string;
  title: string;
  text: string;
  image: ImageWP;
};

export type OurTeamType = {
  title: string;
  text: string;
  image: ImageWP;
};

export type OurServicesType = {
  name: string;
  service_1: {
    title: string;
    text: string;
    image: string;
  };
  service_2: {
    title: string;
    text: string;
    image: ImageWP;
  };
};

export type OurVisionType = {
  name: string;
  title_1: string;
  text_1: string;
  title_2: string;
  text_2: string;
  video_1: string;
  video_2: string;
  video_3: string;
};

export type OurWorkType = {
  name: string;
  title: string;
  text: string;
  image_1: ImageWP;
  image_2: ImageWP;
  image_3: ImageWP;
};

export type AboutUsACF = {
  acf: {
    top_section: TopSectionAboutUs;
    our_history: OurHistoryType;
    our_team: OurTeamType;
    our_services: OurServicesType;
    our_vision: OurVisionType;
    our_work: OurWorkType;
    contact_us: ContactUsPartners;
  };
};