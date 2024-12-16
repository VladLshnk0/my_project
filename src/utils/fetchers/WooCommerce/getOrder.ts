"use server"
import { api } from "@/app/api/api";

export async function getOrder(id: number): Promise<any> {
  try {
    const data = await api.get(`orders/${id}`);
    return data?.data;
  } catch (error: any) {
    console.error("Error posting order", error);
    return null;
  }
}