import { combineReducers } from "redux";
import usersDataReducer from "./usersDataReducer";

const reducers = combineReducers({ users: usersDataReducer });

export default reducers;
