import { getOrder } from "@/apis/order/order";
import { IOrder } from '@/types/order';
import { useQuery, UseQueryResult } from "react-query";

export const useOrderQuery = (): UseQueryResult<IOrder[]> => {
  return useQuery(['order'], () => 
    getOrder());
};
