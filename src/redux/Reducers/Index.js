import { combineReducers } from "redux";
import UsersReducer from "./Users";

export default combineReducers({ User: UsersReducer });
