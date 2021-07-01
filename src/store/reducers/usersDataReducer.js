const initialState = {
  data: [],
  isDataLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      return { ...state, data: action.payload };
    case "IS_DATA_LOADING":
      return { ...state, isDataLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
