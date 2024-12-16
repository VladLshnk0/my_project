export type OrderInputData = {
    billing: Billing;
    shipping: Shipping;
};

export type Billing = {
    first_name: string;
    last_name: string;
    address_1: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
};

export type Shipping = Billing;