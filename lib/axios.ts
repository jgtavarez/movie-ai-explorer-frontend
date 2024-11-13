import axios from "axios";

export interface DataError {
  message: string[] | string;
  error: string;
  statusCode: number;
}

export const baseApi = axios.create({
  baseURL: "http://localhost:3001/api",
});
