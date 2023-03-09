import React, { useState } from 'react';
import { BsFillPencilFill, BsCheckLg } from 'react-icons/bs';
import styles from './user_deliver_address_part.module.scss';

type propsType = {
  addressInfo: string,
  labelInfo: string
}

const UserDeliverAddressPart = ({addressInfo, labelInfo}: propsType) => {
  const [modify, setModify] = useState(false);
  const [modifyText, setModifyText] = useState(addressInfo);
  const handleModify = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyText(e.target.value);
  };
  const modifyAddressInfo = () => {
    
  }
  return (
    <div className={styles.user_deliver_address_container}>
      <p>
        {
          labelInfo
        }
      </p>
      {
        modify
        ? <input type="text" onChange={handleModify}/>
        : <p>{ addressInfo }</p>
      }
      {
        modify      
        ?<button>
          <BsFillPencilFill></BsFillPencilFill>
        </button>
        :<button>
          <BsCheckLg></BsCheckLg>
        </button>
      }
    </div>
  );
};

export default UserDeliverAddressPart;