import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BORI_SSAL_API_URL, // 기본 서버 주소 입력
  timeout: JSON.parse(process.env.NEXT_PUBLIC_AXIOS_TIMEOUT as string),
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, config?: AxiosRequestConfig<{}>) => customAxios.get<T>(url, config).then(responseBody),
  post: <T>(url: string, body: {} | undefined, config?: AxiosRequestConfig) => customAxios.post<T>(url, body, config).then(responseBody),
  put: <T>(url: string, body: {} | undefined) => customAxios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => customAxios.delete<T>(url).then(customAxios),
  patch: <T>(url: string, body: object | FormData | undefined, config?: AxiosRequestConfig) =>
    customAxios.patch<T>(url, body, config).then(responseBody),
};

export { requests };
