import { getUser } from "@/apis/user/user";
import { useQuery } from "react-query";

export const useUserQuery = () => {
  return useQuery(["user"], () => getUser(), {
    retry: 0
  });
};
