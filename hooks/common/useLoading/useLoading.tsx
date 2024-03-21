import Loading from '@/components/loading/Loading/Loading';
import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const renderLoading = () => loading && <Loading />;
  return { setLoading, renderLoading };
};
