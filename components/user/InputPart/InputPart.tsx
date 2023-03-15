import React from "react";
import styles from "./input_part.module.scss";

type propsType = {
  onChangeAccount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: string | null;
  type: string;
  info: string;
  textOrPass: string;
};

const InputPart = ({
  onChangeAccount,
  validate,
  type,
  info,
  textOrPass
}: propsType) => {
  return (
    <>
      <div className={styles.input_container}>
        {/*바꾸고 싶은 비밀번호*/}
        <p>{info}</p>
        <input
          name={type}
          role={type}
          onChange={onChangeAccount}
          type={textOrPass}
        />
      </div>
      <div className={styles.validate_text}>{validate}</div>
    </>
  );
};

export default InputPart;
