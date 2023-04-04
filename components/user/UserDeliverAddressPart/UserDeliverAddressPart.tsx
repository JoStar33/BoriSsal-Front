import { errorMessage } from "@/apis/error/customError";
import { useDeliverAddressMutation } from "@/hooks/user/useDeliverAddressMutation/useDeliverAddressMutation";
import { IPatchDeliverAddress } from "@/types/deliverAddress";
import { AxiosError } from "axios";
import React, { useEffect, useRef, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import styles from "./user_deliver_address_part.module.scss";

interface IProps {
  addressInfo: string;
  labelInfo: string;
  addressType: string;
};

const UserDeliverAddressPart = ({
  addressInfo,
  labelInfo,
  addressType
}: IProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [address, setAddress] = useState<string>(addressInfo);
  const inputRef = useRef<HTMLInputElement>(null);
  const userAddressInfo: IPatchDeliverAddress = {
    address_info: address,
    address_type: addressType,
  }
  const { isLoading, isError, isSuccess, error, mutate } =
    useDeliverAddressMutation(userAddressInfo);
  useEffect(() => {
    setAddress(addressInfo);
    if (!inputRef.current) return;
    if (!addressInfo) {
      inputRef.current.value = "";
      return;
    }
    inputRef.current.value = addressInfo;
  }, [addressInfo]);
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const onCompletePost = (data: any) => {
    setAddress(() => data.address);
    setDialog(false);
    setTimeout(() => {
      mutate();
    }, 1000);
  }; // onCompletePost 함수
  return (
    <>
      <div className={styles.user_deliver_address_container}>
        {dialog && (
          <div className={styles.address_dialog_background}>
            <button
              aria-label="주소 다이얼로그 닫기 버튼"
              type="button"
              onClick={() => setDialog(false)}
              className={styles.postcode_button}
            >
              닫기
            </button>
            <DaumPostcode
              onClose={() => setDialog(false)}
              style={{
                width: "400px",
                height: "400px",
              }}
              onComplete={onCompletePost}
            ></DaumPostcode>
          </div>
        )}
        <p className={styles.deliver_address_label}>{labelInfo}</p>
        {!(addressType === "address") ? (
          <input
            onChange={handleChangeAddress}
            ref={inputRef}
            type="text"
            role={addressType}
          />
        ) : (
          <p className={styles.address} role="address">{address}</p>
        )}
        {!(addressType === "address") ? (
          <button
            aria-label="주소 수정 버튼"
            className={styles.modify_button}
            onClick={() => mutate()}
            role="modify_address_button"
          >
            <BsFillPencilFill style={{width: '1vw', height: '1vw'}}></BsFillPencilFill>
          </button>
        ) : (
          <button
            aria-label="주소 검색 버튼"
            className={styles.address_search_button}
            onClick={() => setDialog(true)}
          >
            주소검색
          </button>
        )}
        <>
          {isLoading && (
            <div className={styles.mutation_handle_box}>
              <div className={styles.loading}></div>
            </div>
          )}
          {isError && (
            <div className={styles.mutation_handle_box}>
              <div className={styles.state_cover}>
                <RiAlarmWarningFill size={25} color="red"></RiAlarmWarningFill>
              </div>
              {errorMessage(error as AxiosError)}
            </div>
          )}
          {isSuccess && (
            <div className={styles.mutation_handle_box}>
              <div className={styles.state_cover}>
                <AiFillCheckCircle size={25} color="green"></AiFillCheckCircle>
              </div>
              변경 성공!
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default UserDeliverAddressPart;
