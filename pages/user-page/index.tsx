import React, { useState } from "react";
import Image from "next/image";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useDeliverAddressQuery } from "@/hooks/user/useDeliverAddressQuery";
import UserDeliverAddressPart from "@/components/user/UserDeliverAddressPart/UserDeliverAddressPart";
import styles from "./userpage.module.scss";
import PassWordChangeDialog from "@/components/dialogs/PassWordChangeDialog/PassWordChangeDialog";
import { useLoginCheckQuery } from "@/hooks/auth/useLoginCheckQuery";
import Loading from "@/components/loading/Loading/Loading";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";
import { BsFillPencilFill } from "react-icons/bs";
import { useProfileUpdateMutation } from "@/hooks/user/useProfileUpdateMutation";

const UserPage = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const [dialog, setDialog] = useState(false);
  const { data } = useDeliverAddressQuery({ user_id: user.id });
  const { isLoading, isError } = useLoginCheckQuery();
  const formData = new FormData();
  const { mutate } = useProfileUpdateMutation({
    user_id: user.id,
    image: formData,
  });
  const handleOnChangeProfileImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: any = (e?.target.files as any)[0];
    formData.append("img", file);
    mutate();
  };

  return (
    <>
      {isLoading && <Loading></Loading>}
      {isError && (
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
          <div className={styles.user_deliver_address}>
            <h1>배송정보 변경</h1>
            <UserDeliverAddressPart
              user_id={user.id}
              addressInfo={data?.data[0].phone_number}
              addressType="phone_number"
              labelInfo="전화번호: "
            ></UserDeliverAddressPart>
            <UserDeliverAddressPart
              user_id={user.id}
              addressInfo={data?.data[0].address}
              addressType="address"
              labelInfo="주소: "
            ></UserDeliverAddressPart>
            <UserDeliverAddressPart
              user_id={user.id}
              addressInfo={data?.data[0].address_detail}
              addressType="address_detail"
              labelInfo="상세주소: "
            ></UserDeliverAddressPart>
          </div>
        </div>
        <div className={styles.user_info_part}>
          <p>회원 이메일: {user.email}</p>
          <p>회원 닉네임: {user.nick}</p>
          <button onClick={() => setDialog(true)}>비밀번호 변경</button>
        </div>
      </div>
    </>
  );
};

export default UserPage;
