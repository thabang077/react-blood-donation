import api from "./api";

export const ACTION_TYPES = {
  CRAETE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .DonationCandidate()
    .fetchAll()
    .then((response) => {
      // console.log(response)
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};
