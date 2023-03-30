import PassWordChangeDialog from "@/components/dialogs/PassWordChangeDialog/PassWordChangeDialog";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import Loading from "@/components/loading/Loading/Loading";
import UserDeliverAddressViewer from "@/components/user/UserDeliverAddressViewer/UserDeliverAddressViewer";
import { useLoginCheckQuery } from "@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery";
import { useDeliverAddressQuery } from "@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery";
import { useProfileUpdateMutation } from "@/hooks/user/useProfileUpdateMutation/useProfileUpdateMutation";
import { useUserQuery } from "@/hooks/user/useUserQuery/useUserQuery";
import { initDeliver, initUser } from "@/utils/initData";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import styles from "./userpage.module.scss";

const UserPage = () => {
  let {data: user} = useUserQuery();
  const [dialog, setDialog] = useState<boolean>(false);
  const formData = useRef<FormData>(new FormData());
  let { data: deliverAddress, isError, isLoading } = useDeliverAddressQuery();
  const loginCheck = useLoginCheckQuery();
  const { mutate } = useProfileUpdateMutation();
  const handleOnChangeProfileImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) {
      return
    }
    const file: File = (e.target.files)[0];
    formData.current.append("img", file);
    mutate(formData.current);
  };
  if(!user) {
    user = initUser;
  }
  if(!deliverAddress) {
    deliverAddress = initDeliver;
  }
  return (
    <>
      {loginCheck.isLoading && <Loading></Loading>}
      {loginCheck.isError && (
        <ValidateDialog text="로그인상태가 아닙니다!"></ValidateDialog>
      )}
      {dialog && (
        <PassWordChangeDialog setDialog={setDialog}></PassWordChangeDialog>
      )}
      <div className={styles.userpage_container}>
        <div className={styles.user_image__deliver_info}>
          <div className={styles.user_image}>
            <h1>회원정보</h1>
            <div style={{ position: "relative" }}>
              {user.profile_image ? (
                <div>
                  <Image
                    style={{ borderRadius: "100px" }}
                    alt="프로필 이미지"
                    width={200}
                    height={200}
                    src={
                      process.env.NEXT_PUBLIC_BORI_SSAL_API_URL +
                      user.profile_image
                    }
                  ></Image>
                </div>
              ) : (
                <div className={styles.none_image}></div>
              )}
              <label
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "150px",
                  left: "150px",
                }}
                className="input-file-button"
                htmlFor="input-file"
              >
                <BsFillPencilFill size={20}></BsFillPencilFill>
              </label>
              <input
                id="input-file"
                type="file"
                onChange={handleOnChangeProfileImage}
                style={{ display: "none" }}
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
          <UserDeliverAddressViewer 
            deliverAddress={deliverAddress} 
            isLoading={isLoading} 
            isError={isError}/>
        </div>
        <div className={styles.user_info_part}>
          <p>회원 이메일: {user.email}</p>
          <p>회원 닉네임: {user.nick}</p>
          <button onClick={() => setDialog(true)}>비밀번호 변경</button>
        </div>
      </div>
      <div className={styles.button_container}>
        <Link href="/order-history">
          <button>주문내역 보러가기</button>
        </Link>
      </div>
    </>
  );
};

export default UserPage;
