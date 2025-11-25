import { combineReducers } from "redux";
import donatetionCandidateReducer from "./donateCandidate";

export const reducers = combineReducers({
  DonationCandidate: donatetionCandidateReducer,
});
