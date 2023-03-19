import { AxiosError, AxiosResponse } from "axios";

export const errorMessage = (error: AxiosError): string => {
  const { response } = error;
  if (!response) {
    return '서버 내부오류 발생!';
  }
  const { data }: AxiosResponse = response;
  if (!data)
    return '서버 내부오류 발생!';
  return data.message;
};