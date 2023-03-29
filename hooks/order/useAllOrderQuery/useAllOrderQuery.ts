import { getAllOrder } from "@/apis/order/order";
import { useQuery } from "react-query";

export const useAllOrderQuery = (limit: number, search: string, start_date: Date | null, end_date: Date | null) => {
  return useQuery(['order'], () => 
    getAllOrder(limit, search, start_date, end_date));
};
