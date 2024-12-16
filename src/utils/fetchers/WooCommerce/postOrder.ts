"use server"
import { api } from "@/app/api/api";

export async function postOrder(order: any): Promise<any> {
  try {
    const data = await api.post(`orders`, order);
    return data?.data?.id;
  } catch (error: any) {
    console.error("Error posting order", error);
    return null;
  }
}
