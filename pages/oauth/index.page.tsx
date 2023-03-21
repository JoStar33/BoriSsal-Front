import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./oauth.module.scss";
import oauth_bori_ssuang from "/public/login/oauth_bori_ssuang.png";
import { useUserQuery } from "@/hooks/user/useUserQuery/useUserQuery";
import ValidateDialog from "@/components/dialogs/ValidateDialog/ValidateDialog";

const Oauth = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialogText, setDialogText] = useState<string>("");
  useUserQuery({ setDialogText, setDialog });
  return (
    <>
      {dialog && (
        <ValidateDialog
          text={dialogText}
          setDialog={setDialog}
        ></ValidateDialog>
      )}
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
