import { GET_MESSAGE } from "./type";

export const returnMessage = (msg) => ({
  type: GET_MESSAGE,
  payload: msg,
});
