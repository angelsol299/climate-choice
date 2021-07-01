import { loadUsers } from "../../services/api";

export const fetchUsersData = () => {
  return async (dispatch) => {
    dispatch(getIsDataLoading(true));
    const result = await loadUsers(dispatch);
    dispatch(getIsDataLoading(false));
    dispatch(getUsersData(result));
  };
};

export const getUsersData = (payload) => {
  return {
    type: "GET_USERS_DATA",
    payload: payload,
  };
};

export const getIsDataLoading = (payload) => {
  return {
    type: "IS_DATA_LOADING",
    payload: payload,
  };
};
