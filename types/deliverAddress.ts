export type deliverAddressType = {
  _id: string;
  user_id: string;
  phone_number: string;
  address: string;
  address_detail: string;
}

export type putDeliverAddressType = {
  user_id: string;
  phone_number: string;
  address: string;
  address_detail: string;
}