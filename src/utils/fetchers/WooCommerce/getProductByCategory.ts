"use server";
import { api } from "@/app/api/api";

export async function getProductByCategory(category: string): Promise<any[] | undefined> {
  try {
    const data = await api.get(`products?category=${category}`);

    if (data.data && data.data.length > 0) {
      return data.data as any[];
    } else {
      return undefined;
    }

  } catch (error: any) {
    console.log(error);
  }
}