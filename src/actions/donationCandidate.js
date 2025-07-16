import api from "./api";

export const ACTION_TYPES = {
  CRAETE: "CREATE",
  FEACT_ALL: "FEACT_ALL",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const feachall = () => (dispatch) => {
  api
    .DonationCandidate()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FEACT_ALL,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};
