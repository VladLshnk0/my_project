"use server";
import { api } from "@/app/api/api";

export async function getCustomerById(id: number) {
    const response = await api.get(`customers/${id}`);
    return response.data;
}