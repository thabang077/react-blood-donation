import { combineReducers } from "redux";
// import DonationCandidates from "./donateCandidate";
import donatetionCandidateReducer from "./donateCandidate";

export const reducers = combineReducers({
  // Define your reducers here
  // DonationCandidates,
  DonationCandidate: donatetionCandidateReducer,
});
