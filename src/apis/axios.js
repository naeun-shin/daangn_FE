import axios from "axios";
import Cookies from "universal-cookie";

//임시
export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTA1Njc4MTIzNCIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzE0NzMwNjM3LCJpYXQiOjE3MTExMzA2Mzd9.V5vhk5mGEmzoTXpSHWHyPXukZ2LrjnVJ1bRNO6DSrU0`,
  },
});


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