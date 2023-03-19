import { useDuplicateCheckMutation } from '@/hooks/auth/useDuplicateCheckMutation';
import React, { useCallback } from 'react';
import styles from './duplicate_check_part.module.scss'
import { AiFillCheckCircle } from "react-icons/ai";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AxiosError } from 'axios';
import { errorMessage } from '@/apis/error/customError';

interface propsType {
  validate: string | null,
  type: boolean;
  info: string;
}

const DuplicateCheckPart = ({
  type,
  info,
  validate
}: propsType) => {
  const {mutate, isSuccess, isError, isLoading, isIdle, error} = useDuplicateCheckMutation({type, info});
  const handleOnClick = () => {
    if (validate) return;
    if (!info) return;
    mutate()
  }
  return (
    <div className={styles.duplicate_container}>
      <button 
        role='duplicate_button'
        className={styles.duplicate_button}
        onClick={() => handleOnClick()}>중복확인</button>
      <div>
        {
          isLoading && 
          <div className={styles.mutation_handle_box}>
            <div className={styles.loading}></div>
          </div>
        }
        {
          isError && 
          <div className={styles.mutation_handle_box}>
            <div 
              className={styles.state_cover}>
              <RiAlarmWarningFill size={25} color="red"></RiAlarmWarningFill>
            </div>
            {errorMessage(error as AxiosError)}
          </div>
        }
        {
          isSuccess && (
          <div className={styles.mutation_handle_box}>
            <div className={styles.state_cover}>
              <AiFillCheckCircle size={25} color="green"></AiFillCheckCircle>
            </div>
            사용해도 괜찮은  
            {
              type ? ' 이메일' :  ' 닉네임'
            }이네요!
          </div>
          )
        }
      </div>
    </div>
  );
};

export default DuplicateCheckPart;