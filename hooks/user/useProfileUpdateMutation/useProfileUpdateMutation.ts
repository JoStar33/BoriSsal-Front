import { postProfileImage } from "@/apis/user/user";
import { useUserStore } from "@/store/user";
import { useMutation } from "react-query";

export const useProfileUpdateMutation = () => {
  const { user, setUserProfile } = useUserStore();
  return useMutation((profileImage: FormData) => postProfileImage({
    user_id: user.id,
    image: profileImage
  }), {
    onSuccess(data) {
      setUserProfile(data.data.profile_image)
    },
  });
};
