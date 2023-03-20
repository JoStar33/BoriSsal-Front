import React from "react";
import styles from "./input_part.module.scss";

interface IProps {
  onChangeAccount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: string | null;
  inputName: string;
  inputLabel: string;
  textOrPassword: string;
};

const InputPart = ({
  onChangeAccount,
  validate,
  inputName,
  inputLabel,
  textOrPassword
}: IProps) => {
  return (
    <div className={styles.input_box}>
      <div className={styles.input_container}>
        <p>{inputLabel}</p>
        <input
          name={inputName}
          role={inputName}
          onChange={onChangeAccount}
          type={textOrPassword}
        />
      </div>
      <div className={styles.validate_text}>{validate}</div>
    </div>
  );
};

export default InputPart;
