import { ACTION_TYPES } from "../actions/donationCandidate";

const initialState = {
  list: [],
};
export const donatetionCandidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      //  console.log("Reducer Payload:", action.payload); Debugging reducer payload

      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;

    case ACTION_TYPES.CRAETE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: [
          state.map((x) => (x.id == action.payload.id ? action.payload : x)),
        ],
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        list: [state.list.filter((x) => x.id != action.payload)],
      };
  }
};

export default donatetionCandidateReducer;
