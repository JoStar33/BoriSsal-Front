import { useRef } from 'react';
import { useMutation } from "react-query";
import { postProfileImage } from "@/apis/user/user";
import { IUserProfileUpload } from "@/types/user";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setUserProfileState } from "@/store/user";

export const useProfileUpdateMutation = (profileImage: FormData) => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const dispatch = useDispatch<AppDispatch>();
  const userProfile = useRef<IUserProfileUpload>({
    user_id: user.id,
    image: profileImage
  });
  return useMutation(() => postProfileImage(userProfile.current), {
    onSuccess(data) {
      dispatch(setUserProfileState(data.data.profile_image))
    },
  });
};
