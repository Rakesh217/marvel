import * as types from "../Actions/Types";
let initialState = {
  result: {},
};

const handleAddUserSuccess = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

const handleAddUserError = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state;
    case types.ADD_USER_RESPONSE_SUCCESS:
      return handleAddUserSuccess(state, action);

    case types.ADD_USER_RESPONSE_ERROR:
      return handleAddUserError(state, action);

    default:
      return state;
  }
};
