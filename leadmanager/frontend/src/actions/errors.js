import { GET_ERROR } from "./type";

export const returnError = (msg, status) => ({
  type: GET_ERROR,
  payload: { msg, status },
});
