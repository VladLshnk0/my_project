"use client";

import { useCart, useCustomer, useOrderErrors } from "@/utils/state/state";
import Image from "next/image";
import React from "react";

type ContentProps = {
  order: any;
  id: string;
    customer_id: number;
};

function Content(props: ContentProps) {
  console.log(props.order);
  const order = props.order;
  //   console.log(order.line_items[0].image);
 const clearCart = useCart((state) => state.clearCart);
 const setErrors = useOrderErrors((state) => state.setErrors);
 const setCustomerId = useCustomer((state) => state.setCustomerId);
setCustomerId(props.customer_id);
clearCart();
setErrors(false);

  console.log((+order.id).toString(2));
 
  return (
    <div className="h-full w-full max-w-[1440px] flex flex-col px-2 sm:px-4 mb-8 lg:mb-32">
      <div className="w-full">
        <h2 className="font-semibold text-4xl text-[#7A9C59] uppercase">
          Takk! Vi har mottatt ordren din!
        </h2>
        <span className="text-2xl font-semibold mt-4 flex flex-row items-center gap-2">
          Ordrenummer:<p className="text-[#82B835]"> #{order.number}</p>
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-3/5 flex flex-col gap-4 border-t-2 border-[#E5E5E5] pt-4">
          {order.line_items.map((item: any) => (
            <div key={item.id} className="flex flex-row gap-4">
              <Image
                src={item.image.src}
                alt={""}
                width={132}
                height={161}
                className="w-32 h-40 object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-2xl font-medium text-[#7A9C59]">
                    {(+item.price).toFixed(2)} kr
                  </p>
                </div>

                <span className="text-xl font-medium flex flex-row items-center gap-2">
                  QTY:<p className="text-xl font-light"> {item.quantity}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <div className="border-2 border-[#e5e5e5] w-full flex flex-col rounded-2xl px-8 py-4 divide-y-2 divide-[#e5e5e5] gap-4">
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg">Total</span>
              <span className="text-lg font-semibold text-[#7A9C59]">
                {(+order.total).toFixed(2)} kr
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              {order.coupon_lines.length > 0 && (
                <>
                {order.coupon_lines?.[0].discount_type === "percent" && (
                  <div className="flex flex-row w-full justify-between">
                    <span className="text-lg">Har brukt rabattkode</span>
                    <span className="text-lg font-semibold">
                      {(+order.coupon_lines[0].nominal_amount)}% OFF
                    </span>
                  </div>
                )}
                  <div className="flex flex-row w-full justify-between">
                    <span className="text-lg">Rabbat</span>
                    <span className="text-lg font-semibold">
                      {(+order.coupon_lines[0].discount).toFixed(2)} kr
                    </span>
                  </div>
                </>
              )}
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg">Frakt</span>
                <span className="text-lg font-semibold">
                  {order.shipping_lines[0] ? (+order.shipping_lines?.[0].total).toFixed(2) : `0`} kr
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg">Betalingsmåte:</span>
                <span className="text-lg font-semibold">Faktura</span>
              </div>
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg">Dato:</span>
                <span className="text-lg">
                  {order.date_created}
                </span>
              </div>
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg">Ordrenummer:</span>
                <span className="text-lg font-semibold">#{order.id}</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 pt-4">
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg font-semibold w-full flex justify-between">
                  <p className="text-[#009999]">Leveringsdato: </p>
                  <p>{order?.meta_data?.find((e:any)=>e.key==="delivery_date")?.value?.split("T")?.[0]}</p>
                </span>
                <span className="text-lg font-semibold">
                  {order?.meta_data?.find((e:any)=>e.key==="delivery_date")?.value?.split("T")?.[1]}
                </span>
              </div>
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg font-semibold flex flex-row w-full justify-between">
                  <p className="text-[#009999]">Returdato: </p>
                  <p>{order?.meta_data?.find((e:any)=>e.key==="return_date")?.value?.split("T")?.[0]}</p>
                </span>
                <span className="text-lg font-semibold">
                  {order?.meta_data?.find((e:any)=>e.key==="return_date")?.value?.split("T")?.[1]}
                </span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#e5e5e5] w-full flex flex-col rounded-2xl px-8 py-4 gap-4">
            <h2 className="text-[#009999] text-2xl font-semibold uppercase">
              fakturaadresse
            </h2>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Navn:</span>
              <span className="text-lg font-light">
                {order.billing.first_name + " " + order.billing.last_name}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Adresse:</span>
              <span className="text-lg font-light">
                {order.billing.address_1}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">By:</span>
              <span className="text-lg font-light">{order.billing.city}</span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Postnummer:</span>
              <span className="text-lg font-light">
                {order.billing.postcode}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Telefon:</span>
              <span className="text-lg font-light">{order.billing.phone}</span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Epost:</span>
              <span className="text-lg font-light">{order.billing.email}</span>
            </div>
          </div>
          <div className="border-2 border-[#e5e5e5] w-full flex flex-col rounded-2xl px-8 py-4 gap-4">
            <h2 className="text-[#009999] text-2xl font-semibold uppercase">
              leveringsadresse
            </h2>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Navn:</span>
              <span className="text-lg font-light">
                {order.shipping.first_name + " " + order.shipping.last_name}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Adresse:</span>
              <span className="text-lg font-light">
                {order.shipping.address_1}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">By:</span>
              <span className="text-lg font-light">{order.shipping.city}</span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Postnummer:</span>
              <span className="text-lg font-light">
                {order.shipping.postcode}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span className="text-lg font-semibold">Telefon:</span>
              <span className="text-lg font-light">{order.shipping.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;