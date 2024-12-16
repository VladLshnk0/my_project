"use server";
import { api } from "@/app/api/api";

export async function updateCustomer(id: number, order: any) {
    if (!order) return null;
    const data = {
        email: order.billing.email,
        first_name: order.billing.first_name,
        last_name: order.billing.last_name,
        username: order.billing.email,
        billing: {
            first_name: order.billing.first_name,
            last_name: order.billing.last_name,
            address_1: order.billing.address_1,
            address_2: order.billing.address_2,
            city: order.billing.city,
            postcode: order.billing.postcode,
            country: "NO",
            email: order.billing.email,
            phone: order.billing.phone,
        },
        shipping: {
            first_name: order.shipping.first_name,
            last_name: order.shipping.last_name,
            address_1: order.shipping.address_1,
            address_2: order.shipping.address_2,
            city: order.shipping.city,
            postcode: order.shipping.postcode,
            country: "NO",
        },
    };
    try {
        const response = await api.get(`customers/${id}`);
        console.log("Customer", response.data);
        return response.data.id;
    } catch (error) {
        console.error("Error getting customer by id", error);
        return null
    }
}