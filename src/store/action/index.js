import { loadUsers } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const widthdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "widthdraw",
      payload: amount,
    });
  };
};

// export const fetchUsersData = () => {
//   return (dispatch) => {
//     const result = loadUsers();
//     if (!result.ok) {
//       //possibility to show a more detail error
//       console.log("response error");
//     }
//     return dispatch(getUsersData(result));
//   };
// };

export const fetchUsersData = (dispatch) => {
  console.log("====================================");
  console.log("FETCHING DATA");
  console.log("====================================");

  return async (dispatch) => {
    const result = await loadUsers();
    dispatch(getUsersData(result));
  };
};

export const getUsersData = (data) => {
  return {
    type: "GET_USERS_DATA",
    payload: data,
  };
};

// try {
//   //setIsLoading(true);
//   const result = await loadUsers();

//   if (!result.ok) {
//     //possibility to show a more detail error
//     console.log("response error");
//   }
// //   setIsLoading(false);
// //  setData(result);
// } catch (e) {
//   console.log(e);
// }
