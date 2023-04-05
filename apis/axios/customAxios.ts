import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BORI_SSAL_API_URL, // 기본 서버 주소 입력
  timeout: JSON.parse(process.env.NEXT_PUBLIC_AXIOS_TIMEOUT as string),
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export { customAxios };

