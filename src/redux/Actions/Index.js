// functions or constants  returns an object with type and payload
import * as types from "./Types";

const addUser = (userDetails) => {
  return { type: types.ADD_USER, payload: userDetails };
};
const getChar = () => {
  return { type: types.GET_CHARACTERS };
};

const validateUser = (userDetails) => {
  return { type: types.VALIDATE_USER, payload: userDetails };
};
export { addUser, getChar, validateUser };
