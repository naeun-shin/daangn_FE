import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'content-type':
      'application/json;charset=UTF-8',
    accept: 'application/json,',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTA1Njc4MTIzNCIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzE0NjY5OTQ2LCJpYXQiOjE3MTEwNjk5NDZ9.mZBAEiLdQizhGnZuxwFgPkN2YKvETt_ag_8rGnHkPDc`,
  },
});
