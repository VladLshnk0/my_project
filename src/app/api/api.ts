import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_URL as string,
    consumerKey: process.env.WC_CONSUMER_KEY as string,
    consumerSecret: process.env.WC_CONSUMER_SECRET as string,
    version: "wc/v3"
  });

  export interface IResponse {
    success: boolean,
    data: any[],
    error?: string
 }