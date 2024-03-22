import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'content-type':
      'application/json;charset=UTF-8',
    accept: 'application/json,',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTA1Njc4MTIzNCIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzE0NzMwNjM3LCJpYXQiOjE3MTExMzA2Mzd9.V5vhk5mGEmzoTXpSHWHyPXukZ2LrjnVJ1bRNO6DSrU0`,
  },
});
