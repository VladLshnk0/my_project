"use client";
import { useOrder, useOrderErrors } from "@/utils/state/state";
import { useEffect, useState } from "react";

function Form() {
  const order = useOrder((state) => state.order);
  const setOrder = useOrder((state) => state.setOrder);
  const errors = useOrderErrors((state) => state.errors);
  const [checkbox, setCheckbox] = useState<boolean>(order?.shipping ? true : false);
  const [error, setError] = useState(errors || false);
  useEffect(() => {
    console.log("useEffects: ", errors);
    setError(errors);
  }, [errors]);

function setFirstName(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, first_name: e.target.value },
      shipping: { ...order.shipping, first_name: e.target.value },
    });
  }

  function setLastName(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, last_name: e.target.value },
      shipping: { ...order.shipping, last_name: e.target.value },
    });
  }

  function setAddress(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, address_1: e.target.value },
      shipping: { ...order.shipping, address_1: e.target.value },
    });
  }

  function setPostcode(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, postcode: e.target.value },
      shipping: { ...order.shipping, postcode: e.target.value },
    });
  }

  function setPostOffice(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, city: e.target.value },
      shipping: { ...order.shipping, city: e.target.value },
    });
  }

  function setEmail(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, email: e.target.value },
      shipping: { ...order.shipping, email: e.target.value },
    });
  }

  function setPhone(e: any) {
    setOrder({
      ...order,
      billing: { ...order.billing, phone: e.target.value },
      shipping: { ...order.shipping, phone: e.target.value },
    });
  }

  function setNotes(e: any) {
    setOrder({
      ...order,
      customer_note: e.target.value,
    });
  }

  function setShippingFirstName(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, first_name: e.target.value },
    });
  }

  function setShippingLastName(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, last_name: e.target.value },
    });
  }

  function setShippingAddress(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, address_1: e.target.value },
    });
  }

  function setShippingPostcode(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, postcode: e.target.value },
    });
  }

  function setShippingPostOffice(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, city: e.target.value },
    });
  }

  function setShippingEmail(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, email: e.target.value },
    });
  }

  function setShippingPhone(e: any) {
    setOrder({
      ...order,
      shipping: { ...order.shipping, phone: e.target.value },
    });
  }

  return (
    <div className="border border-[#E5E5E5] px-2 py-10 rounded-md mt-4 w-full">
      <h2 className="text-lg font-semibold uppercase">Faktureringsdetaljer</h2>
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Fornavn</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            value={order.billing?.first_name}
            required={true}
            onChange={(e) => setFirstName(e)}
          />
          {(error && order?.billing?.first_name?.length < 2) && (
            <span className="text-red-500 text-sm">Fornavn er påkrevd</span>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Etternavn</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            value={order.billing?.last_name}
            required={true}
            onChange={(e) => setLastName(e)}
          />
          {(error && order?.billing?.last_name?.length < 2) && (
            <span className="text-red-500 text-sm">Etternavn er påkrevd</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span>Adresse</span>
        <input
          type="text"
          className="w-full border border-[#E5E5E5] p-2"
          value={order.billing?.address_1}
          required={true}
          onChange={(e) => setAddress(e)}
        />
        {(error && order?.billing?.address_1?.length < 2) && (
          <span className="text-red-500 text-sm">Adresse er påkrevd</span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Postnummer</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            value={order.billing?.postcode}
            pattern="[0-9]{4}"
            required={true}
            onChange={(e) => setPostcode(e)}
          />
          {(error && !/^\d{4}$/.test(order?.billing?.postcode)) && (
            <span className="text-red-500 text-sm">Postnummer er påkrevd</span>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Poststed</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            required={true}
            value={order.billing?.city}
            onChange={(e) => setPostOffice(e)}
          />
          {(error && order?.billing?.city?.length < 2) && (
            <span className="text-red-500 text-sm">Poststed er påkrevd</span>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Telefon</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            required={true}
            pattern="(\+47)?[0-9]{8}"
            value={order.billing?.phone}
            onChange={(e) => setPhone(e)}
          />
          {(error && !/^(\+47)?[0-9]{8}$/.test(order?.billing?.phone)) && (
            <span className="text-red-500 text-sm">Telefon er påkrevd</span>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>E-postadresse</span>
          <input
            type="email"
            className="w-full border border-[#E5E5E5] p-2"
            required={true}
            value={order.billing?.email}
            onChange={(e) => setEmail(e)}
          />
          {(error && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(order?.billing?.email)) && (
            <span className="text-red-500 text-sm">E-postadresse er påkrevd</span>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-2 mt-4">
        <input type="checkbox" checked={checkbox} onChange={(e)=>setCheckbox(e.target.checked)}/>
        <span className="">Sende til en annen adresse?</span>
      </div>
      {checkbox && (<div className="">
        <h2 className="text-lg font-semibold uppercase">Leveringsdetaljer</h2>
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Fornavn</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            value={order.shipping?.first_name}
            required={true}
            onChange={(e) => setShippingFirstName(e)}
          />
          {(error && order?.shipping?.first_name?.length < 2) && (
            <span className="text-red-500 text-sm">Fornavn er påkrevd</span>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Etternavn</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            value={order.shipping?.last_name}
            required={true}
            onChange={(e) => setShippingLastName(e)}
          />
          {(error && order?.shipping?.last_name?.length < 2) && (
            <span className="text-red-500 text-sm">Etternavn er påkrevd</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span>Adresse</span>
        <input
          type="text"
          className="w-full border border-[#E5E5E5] p-2"
          value={order.shipping?.address_1}
          required={true}
          onChange={(e) => setShippingAddress(e)}
        />
        {(error &&  order?.shipping?.address_1?.length < 2) && (
          <span className="text-red-500 text-sm">Adresse er påkrevd</span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Postnummer</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            value={order.shipping?.postcode}
            pattern="[0-9]{4}"
            required={true}
            onChange={(e) => setShippingPostcode(e)}
          />
          {(error && !/^\d{4}$/.test(order?.shipping?.postcode)) && (
            <span className="text-red-500 text-sm">Postnummer er påkrevd</span>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Poststed</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            required={true}
            value={order.shipping?.city}
            onChange={(e) => setShippingPostOffice(e)}
          />
          {(error && order?.shipping?.city?.length < 2) && (
            <span className="text-red-500 text-sm">Poststed er påkrevd</span>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>Telefon</span>
          <input
            type="text"
            className="w-full border border-[#E5E5E5] p-2"
            required={true}
            pattern="(\+47)?[0-9]{8}"
            value={order.shipping?.phone}
            onChange={(e) => setShippingPhone(e)}
          />
          {(error && !/^(\+47)?[0-9]{8}$/.test(order?.shipping?.phone)) && (
            <span className="text-red-500 text-sm">Telefon er påkrevd</span>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span>E-postadresse</span>
          <input
            type="email"
            className="w-full border border-[#E5E5E5] p-2"
            required={true}
            value={order.shipping?.email}
            onChange={(e) => setShippingEmail(e)}
          />
          {(error && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(order?.shipping?.email)) && (
            <span className="text-red-500 text-sm">E-postadresse er påkrevd</span>
          )}
        </div>
      </div>
      </div>)}
      <div className="flex flex-col gap-2 mt-4">
        <span>Ordrenotater (valgfritt)</span>
        <textarea
          onChange={(e) => setNotes(e)}
          value={order?.customer_note}
          className="w-full border border-[#E5E5E5] p-2 h-28"
          placeholder="Merknader til din ordre, f.eks. spesielle ønsker for levering."
        />
      </div>
    </div>
  );
}

export default Form;
