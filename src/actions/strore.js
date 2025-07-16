import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducers } from "../reducers/index";
// import donateCandidateReducer from "../reducers/index";

export const store = createStore(
  reducers,

  compose(applyMiddleware(thunk))
);
