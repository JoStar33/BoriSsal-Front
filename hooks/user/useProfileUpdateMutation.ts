import { useMutation } from "react-query";
import { postProfileImage } from "@/apis/user/user";
import { userProfileUpload } from "@/types/user";

export const useProfileUpdateMutation = (userProfile: userProfileUpload) => {
  return useMutation(() => {
    return postProfileImage(userProfile.image, userProfile.user_id);
  });
};
