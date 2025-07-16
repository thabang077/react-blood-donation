import api from "../actions/api";

const initialState = {
  list: [],
};
export const donateCandidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPES.FEACT_ALL":
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};

export default donateCandidateReducer;
