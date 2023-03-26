export interface IDeliverAddress {
  _id: string;
  phone_number: string;
  address: string;
  address_detail: string;
};

//주소정보와 주소타입을 보내주면 그에 맞춰서 정보수정이 가능하도록 코드 수정
export interface IPatchDeliverAddress {
  address_info: string;
  address_type: string;
};
