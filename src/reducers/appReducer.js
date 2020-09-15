import { SET_INTERVALS } from "../constants/types";

const initialState = {
  apiCallIntervals: 15,
};

const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_INTERVALS:
      return {
        ...state,
        apiCallIntervals: action.apiCallIntervals,
      };
    default:
      return state;
  }
};

export default appReducer;
