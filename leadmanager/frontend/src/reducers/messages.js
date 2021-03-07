import { GET_MESSAGE } from "../actions/type";

const initialState = {
  msg: "",
};

export default function (
  state = initialState,
  action
) {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
}
