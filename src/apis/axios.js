import axios from "axios";

export const instance = axios.create({
  baseURL: `http://3.38.152.248/`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE3MTQ2MTAyNjYsImlhdCI6MTcxMTAxMDI2Nn0.Q4FOzdFRSHLKX-md0dzbWPPB24oPc8_V_L35sxccObM`,
  },
});
