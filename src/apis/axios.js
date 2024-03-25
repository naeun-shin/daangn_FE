import axios from "axios";
import Cookies from "universal-cookie";


// 헤더가 필요 없는 인스턴스
export const instanceWithoutHeaders = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 헤더가 필요한 인스턴스
export const instanceWithToken = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `${new Cookies().get('accessToken')}`,
  },
});