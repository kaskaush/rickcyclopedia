/* Creates and returns an instance of axios */

import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "access-control-allow-origin": "*",
    "content-type": "application/json;charset=UTF-8",
  },
});

export const CancelToken = axios.CancelToken;

export const cancelTokenSource = CancelToken.source();

export const isCancel = axios.isCancel;

export default instance;
