import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
} from "./type";
import { returnError } from "./errors";

// LOAD USER
export const loadUser = () => (
  dispatch,
  getState
) => {
  dispatch({
    type: USER_LOADING,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = token;
  }

  fetch(
    "http://127.0.0.1:8000/api/auth/user",
    config
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes.json().then((err) => {
        dispatch({ type: AUTH_ERROR });
        dispatch(returnError(err, errRes.status));
      });
    });
};

// LOGIN
export const login = (user) => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes.json().then((err) => {
        dispatch({ type: AUTH_ERROR });
        dispatch(returnError(err, errRes.status));
      });
    });
};

// REGISTER
export const register = (user) => (dispatch) => {
  fetch(
    "http://127.0.0.1:8000/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes.json().then((err) => {
        dispatch({ type: AUTH_ERROR });
        dispatch(returnError(err, errRes.status));
      });
    });
};

// logout
export const logout = () => (
  dispatch,
  getState
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;

  if (token) {
    config.headers["Authorization"] = token;
  }

  fetch("http://127.0.0.1:8000/api/auth/logout", {
    method: "POST",
    headers: config.headers,
  })
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((errRes) => {
      errRes.json().then((err) => {
        dispatch(returnError(err, errRes.status));
      });
    });
};
