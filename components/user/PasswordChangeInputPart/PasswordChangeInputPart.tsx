import React from "react";
import styles from "./password_change_input_part.module.scss";

type propsType = {
  onChangeAccount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validatePassword: string | null;
  passType: string;
  passInfo: string;
};

const PasswordChangeInputPart = ({
  onChangeAccount,
  validatePassword,
  passType,
  passInfo,
}: propsType) => {
  return (
    <>
      <div className={styles.input_container}>
        {/*바꾸고 싶은 비밀번호*/}
        <p>{passInfo}</p>
        <input
          name={passType}
          role={passType}
          onChange={onChangeAccount}
          type="password"
        />
      </div>
      <div className={styles.validate_text}>{validatePassword}</div>
    </>
  );
};

export default PasswordChangeInputPart;
