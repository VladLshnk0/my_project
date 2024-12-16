import Title from "../components/Title";
import Content from "./components/Content";
import { getCustomerByEmail } from "@/utils/fetchers/WooCommerce/getCustomerByEmail";
import { createCustomer } from "@/utils/fetchers/WooCommerce/createCustomer";
import { updateCustomer } from "@/utils/fetchers/WooCommerce/updateCustomer";
import { getOrder } from "@/utils/fetchers/WooCommerce/getOrder";
import { updateOrderByCustomerId } from "@/utils/fetchers/WooCommerce/updateOrderByCustomerId";


type PageProps = {
  searchParams: {
    id: string;
  };
};

async function page({ searchParams: { id } }: PageProps) {
    if(!id) return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <Title active={"confirmation"} />
            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center">No order id found</h1>
            </div>
        </div>
    );
    let customer_id = 0;
  const order = await getOrder(parseInt(id));
  if(order){
    const customer = await getCustomerByEmail(order.billing.email);
    if(customer && customer.id){
        customer_id = customer.id;
        await updateCustomer(customer.id, order);
    }else{
        const customer = await createCustomer(order);
        if(customer && customer.id){
            customer_id = customer.id;
        }
    }
  }
  if(order && customer_id > 0){
    await updateOrderByCustomerId(order.id, customer_id);
  }
  if (!order) return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Title active={"confirmation"} />
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Order not found</h1>
      </div>
    </div>
    );

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Title active={"confirmation"} />
      <Content order={order} id={id} customer_id={customer_id}/>
    </div>
  );
}

export default page;