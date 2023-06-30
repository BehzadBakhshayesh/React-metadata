import { loading } from "./loading";
import { userData } from "../data/index";

export const users = (data) => {
  return {
    type: "USERS",
    payload: data,
  };
};

export const getUsers = (data) => {
  return (dispatch) => {
    dispatch(loading(true));
    setTimeout(() => {
      dispatch(users(userData));
      dispatch(loading(false));
    }, 1000);
  };
};
