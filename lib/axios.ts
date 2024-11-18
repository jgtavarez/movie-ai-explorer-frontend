import axios from "axios";

export interface DataError {
  message: string[] | string;
  error: string;
  statusCode: number;
}

// no cache like fetch()
export const baseApi = axios.create({
  baseURL: `${process.env.SERVER_URL}`,
});
