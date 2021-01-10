import * as types from "../Actions/Types";

let initialState = {
  result: [],
};
const handleCharSuccess = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

const handleCharError = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return { ...state };
    case types.GET_CHARACTERS_SUCCESS:
      return handleCharSuccess(state, action);
    case types.GET_CHARACTERS_ERROR:
      return handleCharError(state, action);
    default:
      return { ...state };
  }
};
