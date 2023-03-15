import { useDuplicateCheckMutation } from '@/hooks/auth/useDuplicateCheckMutation';
import React, { useCallback } from 'react';
import styles from './duplicate_check_part.module.scss'
import { AiFillCheckCircle } from "react-icons/ai";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AxiosError } from 'axios';

type propsType = {
  validate: string | null,
  type: boolean;
  info: string;
  duplicateState: {
    email: boolean;
    nick: boolean;
  }
  setDuplicateState: React.Dispatch<React.SetStateAction<{
    email: boolean;
    nick: boolean;
  }>>
}

const DuplicateCheckPart = ({
  type,
  info,
  validate,
  setDuplicateState,
  duplicateState
}: propsType) => {
  const {mutate, isSuccess, isError, isLoading, error} = useDuplicateCheckMutation({type, info});
  const handleOnClick = () => {
    if (validate) return;
    if (!info) return;
    mutate()
  }
  useCallback(() => {
    if(isSuccess) {
      info 
      ? setDuplicateState({...duplicateState, 
        nick: true,
      })
      : setDuplicateState({...duplicateState, 
        email: true,
      })
    };
  }, [isSuccess]);
  useCallback(() => {
    if(isError) {
      info 
      ? setDuplicateState({...duplicateState, 
        nick: false,
      })
      : setDuplicateState({...duplicateState, 
        email: false,
      })
    };
  }, [isError]);
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
            {((error as AxiosError).response?.data as any)?.message}
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