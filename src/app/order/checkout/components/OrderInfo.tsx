"use client";
import { useCart, useOrder, useOrderErrors } from "@/utils/state/state";
import { useEffect, useState } from "react";
import { ConvertDate } from "@/utils/functions/TimeProcessor";
import { getCoupon } from "@/utils/fetchers/WooCommerce/getCoupon";
import subtract from "/public/images/Subtract.png";
import Image from "next/image";
import EditComponent from "./EditComponent";

type OrderInfoProps = {
  postOrder: (order: any) => any;
  methodes: any[] | undefined;
};

function OrderInfo(props: OrderInfoProps) {
  const shippingOptions = props.methodes && props.methodes.filter(m=>m?.enabled).map((method) => {
    return {
      id: method?.id,
      name: method?.title,
      price: method?.settings?.cost ? method?.settings?.cost?.value?.replace(',', '.') : '0.00',
    };
  }).sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  const setErrors = useOrderErrors((state) => state.setErrors);
  const cart = useCart((state) => state.cart);
  const order = useOrder((state) => state.order);
  const total = useCart((state) => state.total);
  console.log("Order: ", order);
  const setOrder = useOrder((state) => state.setOrder);

  const getCartTotal = useCart((state) => state.getCartTotal);
  const [totalPrice, setTotalPrice] = useState<number>(getCartTotal(cart));
  const [activeShipping, setActiveShipping] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dateError, setDateError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    if (activeShipping) {
      setOrder({...order, shipping_lines: [
        {
          method_id: activeShipping.id,
          method_title: activeShipping.name,
          total: activeShipping.price,
        },
      ],});
      setTotalPrice(getCartTotal(cart) + (parseFloat(activeShipping.price)*1.25));
    }else{
      setTotalPrice(getCartTotal(cart));
      if (shippingOptions && shippingOptions.length > 0)
      {setOrder({...order, shipping_lines: [
        {
          method_id: shippingOptions[0].id,
          method_title: shippingOptions[0].name,
          total: shippingOptions[0].price,
        },
      ],});}
    }
  }, [cart, activeShipping, total]);

  useEffect(() => {
    if (order.shipping_lines){
      setActiveShipping({id: order.shipping_lines[0].method_id, name: order.shipping_lines[0].method_title, 
        price: order.shipping_lines[0].total});
    }else if (shippingOptions && shippingOptions.length > 0){
      setActiveShipping(shippingOptions[0]);
    }
  }, []);

  const [coupon, setCoupon] = useState(
    order.order?.coupon_lines?.[0]?.code || ""
  );

  const removeFromCart = useCart((state) => state.removeFromCart);


  const mva = (totalPrice-(totalPrice / 1.25)).toFixed(2);

  function handleChangePrice(type: string, price: number, amount: number) {
    if (type === "percent") {
      const discount = (price * amount) / 100;
      console.log(discount);
      return (price - discount).toFixed(2);
    }
    const discount = price - amount;
    return discount.toFixed(2);
  }

  async function applyCoupon(coupon: string) {
    console.log(coupon);
    const data = await getCoupon(coupon);
    if (data) {
      console.log(data);
      setOrder({ ...order, coupon_lines: [{ code: coupon }] });
      const price = handleChangePrice(data[0].discount_type, totalPrice, +data[0].amount);
      console.log(price);
      setTotalPrice(parseFloat(price));
    }else{
      setOrder({ ...order, coupon_lines: [] });
      setTotalPrice(getCartTotal(cart));
      setError("Kupongen er ugyldig");
      setTimeout(() => {
        setError(null);
        setCoupon("");
      }, 2000);
    }
  }

  function checkFormErrors() {
      if (
        order?.billing?.first_name?.length < 2 ||
        order?.billing?.last_name?.length < 2 ||
        order?.billing?.address_1?.length < 2 ||
        !/^\d{4}$/.test(order?.billing?.postcode) ||
        order?.billing?.city?.length < 2 ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(order?.billing?.email) ||
        !/^(\+47)?[0-9]{8}$/.test(order?.billing?.phone) ||
        order?.shipping?.first_name?.length < 2 ||
        order?.shipping?.last_name?.length < 2 ||
        order?.shipping?.address_1?.length < 2 ||
        !/^\d{4}$/.test(order?.shipping?.postcode) ||
        order?.shipping?.city?.length < 2 ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(order?.shipping?.email) ||
        !/^(\+47)?[0-9]{8}$/.test(order?.shipping?.phone)
      ) {
        setErrors(true);
        setFormError(true);
        return true;
      } else {
        setErrors(false);
        setFormError(false);
        return false;
      }
  }

  function checkDateErrors() {

      if (deliveryDate === "" || returnDate === "") {
        setDateError(true);
        setErrors(true);
        return true;
      } else {
        setDateError(false);
        setErrors(false);
        return false;
      }

  }

  function checkErrors() {
    const err1 = checkFormErrors();
    const err2 = checkDateErrors();
    return err1 || err2;
  }

  async function handleSetOrder(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const errors = checkErrors();
    console.log("Errors: ", errors);
    if (errors) {
      return;
    }
    const source_name = sessionStorage.getItem('source_name');
    const source_source = sessionStorage.getItem('source_source');
    console.log('sourse_name useKassenOrder: ', source_name);
    console.log('sourse_source useKassenOrder: ', source_source);
                const source_arr = [];
                if (source_name && source_source) {
                    source_arr.push({
                        key: '_wc_order_attribution_source_type',
                        value: 'organic',
                    });
                    source_arr.push({
                        key: '_wc_order_attribution_referrer',
                        value: source_source,
                    });
                    source_arr.push({
                        key: '_wc_order_attribution_utm_source',
                        value: source_name,
                    });
                } else {
                    source_arr.push({
                        key: '_wc_order_attribution_source_type',
                        value: 'organic',
                    });
                    source_arr.push({
                        key: '_wc_order_attribution_referrer',
                        value: 'https://www.kokkeglede.no',
                    });
                    source_arr.push({
                        key: '_wc_order_attribution_utm_source',
                        value: 'Direkte',
                    });
                }

    const orderData = {
      ...order,
      payment_method: "invoice",
      payment_method_title: "Faktura",
      set_paid: false,
      status: "processing",
      billing: order.billing,
      shipping: order.shipping,
      line_items: [
        ...cart.map((item: any) => {
          console.log(item.id, item.quantity);
          return {
            product_id: item.id,
            quantity: item.quantity,
          };
        }),
      ],
      shipping_lines: [
        {
          method_id: activeShipping.id,
          method_title: activeShipping.name,
          total: activeShipping.price,
        },
      ],
      meta_data: [
        {
          key: "delivery_date",
          value: ConvertDate(deliveryDate) + "T" + deliveryTime,
        },
        {
          key: "return_date",
          value: ConvertDate(returnDate) + "T" + returnTime,
        },
        ...source_arr,
      ],
      coupon_lines: order.coupon_lines,
    };

    console.log(orderData);

    const data = await props.postOrder(orderData);
  }

  function setShippingAddress(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, address_1: e.target.value },
    });
  }

  return (
    <div className="w-fit h-fit" style={{backgroundImage: `url(${subtract.src})`}}>
      <div className="w-full h-full flex flex-col p-2 md:px-8 md:py-8 items-center">
        <h2 className="text-2xl font-medium uppercase mt-4">Ordren din</h2>
        {/* <button className="w-full bg-[#727276] hover:bg-[#82b835] text-white font-semibold mt-8 py-4" onClick={clearOrder}>
        zhopa
      </button> */}
        <div className="w-full bg-white flex flex-col mt-4">
          <div className="flex flex-row justify-between border-b border-[#E5E5E5] py-2 md:py-4 mx-2 md:mx-4">
            <span className="text-lg font-semibold uppercase">Produkt</span>
            <span className="text-lg font-semibold uppercase">Delsum</span>
          </div>
          <div className="flex flex-col border-b border-[#E5E5E5] py-4 mx-4 max-h-40 overflow-y-auto">
            {cart.map((item) => (
              <EditComponent item={item} key={item.id} />
            ))}
          </div>
          <div className="flex flex-row justify-between border-b border-[#E5E5E5] py-4 mx-4">
            <span className="text-lg font-medium">Delsum</span>
            <span className="text-lg font-medium text-[#82B835]">
              kr {cart.reduce((acc, i)=>acc + parseInt(i.price)*i.quantity,0).toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col gap-2 border-b border-[#E5E5E5] py-4 mx-4">
            <span className="text-lg font-medium">Frakt</span>
            {shippingOptions && shippingOptions.map((option) => (
              <div key={option.id}
                className="flex flex-row justify-between items-center p-2 border border-[#E5E5E5]"
                
              >
                <span className="flex flex-row items-center gap-2">
                  <button type="button" onClick={() => {setActiveShipping(option)}} className="w-5 h-5 border rounded-full flex justify-center items-center border-black">
                    <span
                      className={
                        `w-4 h-4 rounded-full ${activeShipping && activeShipping.id === option.id
                          ? 'bg-[#82b835]'
                          : 'bg-white'}`
                      }
                    />
                  </button>
                  <p className="text-sm">{option.name}</p>
                </span>
                <span className="text-sm font-medium text-[#82B835]">
                  {`kr ${(+option.price).toFixed(2)}`}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between border-b border-[#E5E5E5] py-4 mx-4">
            <p className="text-lg font-semibold ">Totalt</p>
            <div className="flex flex-col items-end">
              <p className="text-2xl font-medium text-[#82b835]">
                kr {totalPrice.toFixed(2)}
              </p>
              <p className="text-sm text-[#707070] flex flex-row gap-1">
                (inkl. <span className="text-[#82b835]">{mva} kr</span> MVA)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Rabattkode"
            className="w-1/2 px-2 border-2 border-[#F2F2F8] mt-4 py-4"
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            onClick={() => applyCoupon(coupon)}
            type="button"
            className="w-1/2 bg-[#727276] text-sm lg:text-base hover:bg-[#82b835] text-white font-semibold mt-4 uppercase"
          >
            Bruk Rabattkode
          </button>
          </div>
          {error && <p className="text-red-500 animate-pulse">{error}</p>}
        </div>
        </div>
        <div className="w-full flex flex-col mt-4 px-2">
          <h2 className="text-lg font-medium">Henting og retur</h2>

          <div className="flex flex-row gap-4 mt-2 w-full">
            <div className="w-9/12 flex flex-col gap-2 ">
              <span className="text-xs">Velg leveringsdato</span>
              <input
                type="date"
                className="w-full border border-[#E5E5E5] p-2 text-xs"
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
              {dateError && deliveryDate.length <= 0 && (
                <span className="text-red-500 text-xs">Velg leveringsdato</span>
              )}
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <span className="text-xs">Tid (valgfritt)</span>
              <input
                type="time"
                className="w-full border border-[#E5E5E5] p-2 text-xs"
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-2 w-full">
            <div className="w-9/12 flex flex-col gap-2">
              <span className="text-xs">Velg returdag</span>
              <input
                type="date"
                className="w-full border border-[#E5E5E5] p-2 text-xs"
                onChange={(e) => setReturnDate(e.target.value)}
              />
              {dateError && returnDate.length <= 0 && (
                <span className="text-red-500 text-xs">Velg returdato</span>
              )}
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <span className="text-xs">Tid (valgfritt)</span>
              <input
                type="time"
                className="w-full border border-[#E5E5E5] p-2 text-xs"
                onChange={(e) => setReturnTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2 w-full border-b border-[#E5E5E5] pb-4">
            <span>Adresse</span>
            <textarea
              value={order?.shipping?.address_1 || order?.billing?.address_1}
              onChange={(e) => setShippingAddress(e)}
              className="w-full border border-[#E5E5E5] p-2 h-28"
              placeholder="Faktura blir sendt til din e-postadresse eller i posten etter avtale, så snart retur er kontrollert og godkjent. Faktura forfaller til betaling innen 10 dager etter mottatt faktura.s"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between mt-2 px-2">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" className="w-4 h-4 accent-[#82b835]" checked={checkbox} onChange={(e)=>setCheckbox(e.target.checked)}/>
            <p>Jeg har lest og aksepterer nettstedets vilkår og betingelser </p>
          </div>
          <button
          type="submit"
            disabled={!checkbox || cart.length === 0}
            className="w-full bg-[#727276] enabled:hover:bg-[#82b835] text-white font-semibold mt-2 py-4 disabled:opacity-50"
            onClick={handleSetOrder}
          >
            Fullfør bestilling
          </button>
        </div>
      </div>
      {/* <Image src={subtract} alt="" width={1000} height={1000} className="w-full h-fit object-scale-down"/> */}
    </div>
  );
}

export default OrderInfo;
