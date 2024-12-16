"use server";
import { api } from "@/app/api/api";

export async function getCoupon(code: string): Promise<any> {


  try {
    const data = await api.get(`coupons?code=${code}`);
    if (data.data.length > 0) {
      return data.data;
    } else {
      return undefined;
    }

  } catch (error: any) {
    console.log(error);
  }
}