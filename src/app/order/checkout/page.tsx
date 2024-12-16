import Title from "../components/Title";
import Checkout from "./components/Checkout";
import { postOrder } from "@/utils/fetchers/WooCommerce/postOrder";
import { redirect } from "next/navigation";
import { getShippingMethodes } from "@/utils/fetchers/WooCommerce/getShippingMethodes";

async function post(order: any) {
  "use server";
  console.log("Post order state: ", order);
    const data = await postOrder(order);
    console.log("Post order response: ", data);
    redirect(`/order/confirmation?id=${data}`);
}

async function page() {
  const methodes = await getShippingMethodes();
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-2 sm:px-4">
      <Title active={"checkout"} />
      <Checkout post={post} methodes={methodes}/>
    </div>
  );
}

export default page;
