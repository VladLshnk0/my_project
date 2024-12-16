"use server"
import { api } from "@/app/api/api";

export async function getCategories():Promise<any> {
    try {
        const { data } = await api.get(
           `products/categories`,
        )

        // if(data){
        //     console.log(`data available`, data[0])
        // }

        return data;

     }
     catch (error: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(error)

     }
}