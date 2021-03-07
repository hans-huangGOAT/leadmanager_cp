import {
  GET_LEADS,
  DELETE_LEAD,
  ADD_LEAD,
} from "./type";
import { returnMessage } from "./messages";
import { returnError } from "./errors";

// get all the lead
export const getLeads = () => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/leads")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: GET_LEADS,
        payload: data,
      });
    })
    .catch((errRes) => {
      console.log(errRes);
      errRes
        .json()
        .then((err) => console.log(err));
    });
};

// delete lead
export const deleteLead = (id) => (dispatch) => {
  fetch(`http://127.0.0.1:8000/api/leads/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      dispatch(returnMessage("Lead Deleted"));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((errRes) => console.log(errRes));
};

// add lead
export const addLead = (user) => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/leads/", {
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
      dispatch(returnMessage("Lead Added"));

      dispatch({
        type: ADD_LEAD,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes
        .json()
        .then((err) =>
          dispatch(returnError(err, errRes.status))
        );
    });
};
