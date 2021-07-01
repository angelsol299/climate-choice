import { loadUsers } from "../../services/api";

export const fetchUsersData = () => {
  return async (dispatch) => {
    dispatch(getIsDataLoading(true));
    const result = await loadUsers();
    dispatch(getUsersData(result));
    dispatch(getIsDataLoading(false));
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
