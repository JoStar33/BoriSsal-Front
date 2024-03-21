import { IDeliverAddress, IPatchDeliverAddress } from '@/types/deliverAddress';
import { requests } from '../axios/customAxios';

const getDeliverAddress = async () => {
  const deliverAddress = await requests.get<IDeliverAddress>(`/deliver-address`);
  return deliverAddress;
};

const patchDeliverAddress = async (deliverAddress: IPatchDeliverAddress) => {
  return await requests.patch('/deliver-address', deliverAddress);
};

export { getDeliverAddress, patchDeliverAddress };
