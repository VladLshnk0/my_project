"use server";
import { api } from "@/app/api/api";

export async function getProductBySlug(slug: string): Promise<any> {
  try {
    const data = await api.get(`products?slug=${slug}`);

    if (data.data && data.data.length > 0) {
      return data.data[0];
    } else {
      return undefined;
    }

  } catch (error: any) {
    console.log(error);
  }
}