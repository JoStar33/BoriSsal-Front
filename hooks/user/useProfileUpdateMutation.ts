import { useMutation, useQueryClient } from "react-query";
import { postProfileImage } from "@/apis/user/user";
import { userProfileUpload } from "@/types/user";


export const useProfileUpdateMutation = (userProfile: userProfileUpload) => {
  const queryClient = useQueryClient();
  return useMutation(() => {
    return postProfileImage(userProfile.image, userProfile.user_id)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("deliver-address");
    }
  });
};