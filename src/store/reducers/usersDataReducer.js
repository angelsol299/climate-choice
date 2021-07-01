const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export default reducer;
