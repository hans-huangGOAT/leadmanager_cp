import { GET_ERROR } from "../actions/type";

const initialState = {
  msg: {},
  status: null,
};

export default function (
  state = initialState,
  action
) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
