import { postProfileImage } from "@/apis/user/user";
import { useMutation, useQueryClient } from "react-query";

export const useProfileUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((profileImage: FormData) => postProfileImage({
    image: profileImage
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    }
  });
};
