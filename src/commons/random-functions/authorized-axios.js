import axios from 'axios';

const { SERVER_URL } = process.env;
export const authorizedAxios = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
});
