"use server";
import { api } from "@/app/api/api";

export async function getShippingMethodes(): Promise<any[] | undefined> {
  try {
    const data = await api.get(`shipping/zones/1/methods`);

    if (data.data && data.data.length > 0) {
      return data.data as any[];
    } else {
      return undefined;
    }

  } catch (error: any) {
    console.log(error);
  }
}