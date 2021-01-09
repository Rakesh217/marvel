import * as types from "../Actions/Types";
let initialState = {};

handleAddUserSuccess = (state, action) => {
  let newState;
  newState = Object.assign(...state, { result: action.result });
  return newState;
};

handleAddUserError = (state, action) => {
  let newState;
  newState = Object.assign(...state, { result: action.result });
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state;
    case types.ADD_USER_RESPONSE_SUCCESS:
      handleAddUserSuccess(state, action);
    case types.ADD_USER_RESPONSE_ERROR:
      handleAddUserError(state, action);
    default:
      return state;
  }
};
