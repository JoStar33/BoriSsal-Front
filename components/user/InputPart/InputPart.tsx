import React from "react";
import styles from "./input_part.module.scss";

interface IProps {
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
}: IProps) => {
  return (
    <div className={styles.input_box}>
      <div className={styles.input_container}>
        <p>{info}</p>
        <input
          name={type}
          role={type}
          onChange={onChangeAccount}
          type={textOrPass}
        />
      </div>
      <div className={styles.validate_text}>{validate}</div>
    </div>
  );
};

export default InputPart;
