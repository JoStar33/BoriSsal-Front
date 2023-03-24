import { postProfileImage } from "@/apis/user/user";
import { useUserStore } from "@/store/user";
import { IUserProfileUpload } from "@/types/user";
import { useRef } from 'react';
import { useMutation } from "react-query";

export const useProfileUpdateMutation = (profileImage: FormData) => {
  const { user, setUserProfile } = useUserStore();
  const userProfile = useRef<IUserProfileUpload>({
    user_id: user.id,
    image: profileImage
  });
  return useMutation(() => postProfileImage(userProfile.current), {
    onSuccess(data) {
      setUserProfile(data.data.profile_image)
    },
  });
};
