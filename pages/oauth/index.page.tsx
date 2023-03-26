import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./oauth.module.scss";
import oauth_bori_ssuang from "/public/login/oauth_bori_ssuang.png";
import { useUserQuery } from "@/hooks/user/useUserQuery/useUserQuery";
import { useRouter } from "next/router";

const Oauth = () => {
  const router = useRouter();
  const { isSuccess } = useUserQuery();
  useEffect(() => {
    if (isSuccess)
      router.push("/");
  }, [isSuccess])
  return (
    <>
      <div className={styles.oauth_container}>
        <Image width={200} height={400} src={oauth_bori_ssuang} alt="열일중인 보리"></Image>
        <div>
          <h1>잠시 기다려주세요!</h1>
          <h1>우리 보리가 열일 중이에요...</h1>
        </div>
      </div>
    </>
  );
};

export default Oauth;
