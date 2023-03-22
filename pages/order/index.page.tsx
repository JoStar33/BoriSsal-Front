import { useLoginCheckQuery } from '@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery';
import { useDeliverAddressQuery } from '@/hooks/user/useDeliverAddressQuery/useDeliverAddressQuery';
import React from 'react';

//로그인 여부 확인 필요

const OrderPage = () => {
  useLoginCheckQuery();
  useDeliverAddressQuery();
  return (
    <div>
      
    </div>
  );
};

export default OrderPage;