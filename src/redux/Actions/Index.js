// functions or constants  returns an object with type and payload
import * as types from "./Types";
export const addUser = (userDetails) => {
  return { type: types.ADD_USER, payload: userDetails };
};
