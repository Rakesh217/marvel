import { combineReducers } from "redux";
import UsersReducer from "./Users";
import characterReducer from "./Characters";
import validateUser from "./ValidateUser";

export default combineReducers({
  User: UsersReducer,
  Character: characterReducer,
  Validation: validateUser,
});
