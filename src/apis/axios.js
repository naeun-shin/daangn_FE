import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'content-type':
      'application/json;charset=UTF-8',
    accept: 'application/json,',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTAzMDcwNzQyNyIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzE0ODAxMjYwLCJpYXQiOjE3MTEyMDEyNjB9.24ES2yT3AnAra_FM4sd6-mZIqmpO5qFeld2GN9tHCww`,
  },
});

export const instance2 = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTAzMDcwNzQyNyIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzE0ODAxMjYwLCJpYXQiOjE3MTEyMDEyNjB9.24ES2yT3AnAra_FM4sd6-mZIqmpO5qFeld2GN9tHCww`,
  },
});
