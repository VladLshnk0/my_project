"use server"
import { api } from "@/app/api/api";

export async function updateOrderByCustomerId(id:number, customer_id: number): Promise<any> {
  try {
    const data = await api.put(`orders/${id}`, {customer_id});
    return data?.data?.id;
  } catch (error: any) {
    console.error("Error posting order", error);
    return null;
  }
}