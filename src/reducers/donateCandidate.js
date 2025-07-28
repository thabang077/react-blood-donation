import {ACTION_TYPES} from "../actions/donationCandidate";

const initialState = {
  list: [],
};
export const donatetionCandidateReducer = (state = initialState, action) => {



  
  switch (action.type) {
    case "ACTION_TYPES.FETCH_ALL":
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};

export default donatetionCandidateReducer;

