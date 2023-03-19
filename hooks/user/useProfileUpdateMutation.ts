import { useMutation } from "react-query";
import { postProfileImage } from "@/apis/user/user";
import { IUserProfileUpload } from "@/types/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setUserProfileState } from "@/store/user";

export const useProfileUpdateMutation = (userProfile: IUserProfileUpload) => {
  const dispatch = useDispatch<AppDispatch>();
  return useMutation(() => postProfileImage(userProfile), {
    onSuccess(data) {
      dispatch(setUserProfileState(data.data.profile_image))
    },
  });
};
