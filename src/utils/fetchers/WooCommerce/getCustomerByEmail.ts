"use server";

import { api } from "@/app/api/api";

export async function getCustomerByEmail(email: string) {
    try {
        const response = await api.get(`customers?email=${email}`);
        console.log("Customer by email", response?.data?.[0]);
        return response?.data?.[0];
    } catch (error) {
        console.error("Error getting customer by email", error);
        return null;
    }
}