import * as types from "../Actions/Types";

const initialState = {
  result: {},
};

const handleValidationSuccess = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.payload });
  console.log("New State Success", newState);
  return newState;
};

const handleValidationError = (state, action) => {
  const newState = { ...state };
  newState = Object.assign({}, state, { result: action.payload });
  console.log("New State Error", newState);
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.VALIDATE_USER:
      return state;
    case types.VALIDATE_USER_SUCCESS:
      return handleValidationSuccess(state, action);
    case types.VALIDATE_USER_ERROR:
      return handleValidationError(state, action);
    default:
      return state;
  }
};
