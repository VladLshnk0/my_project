"use server";
import { api } from "@/app/api/api";

export async function getProducts(quantity?: string): Promise<any> {

  const perPage = quantity || "10";

  try {
    const data = await api.get(`products?per_page=${perPage}`);

    if (data.data && data.data.length > 0) {
      return {
        products: data.data as any[],
        total: parseInt(data.headers["x-wp-total"]) as number,
      };
    } else {
    //   console.log("getProductsBySearch====error> ", data.data);
      return undefined;
    }

    // if(data){
    //     console.log(`data available`, data[0])
    // }

    // return data;
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(error);
  }
}
