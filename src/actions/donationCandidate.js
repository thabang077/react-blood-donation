import api from "./api";

export const ACTION_TYPES = {
  CRAETE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

const FormData = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

export const fetchAll = () => (dispatch) => {
  api
    .DonationCandidate()
    .fetchAll()
    .then((response) => {
      // console.log(response);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

export const create = (data, onSuccess) => (dispatch) => {
  data = FormData(data);

  api
    .DonationCandidate()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CRAETE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((error) => console.log(error));
};

export const update = (id, data, onSuccess) => (dispatch) => {
  data = FormData(data);

  api
    .DonationCandidate()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: id,
        ...data,
      });
      onSuccess();
    })
    .catch((error) => console.log(error));
};

export const deelete =
  (id, onSuccess) =>
  (
    dispatch //USed deelete because delete is used by React
  ) => {
    api
      .DonationCandidate()
      .delete(id)
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.DELETE,
          payload: id,
        });
        onSuccess();
      })
      .catch((error) => console.log(error));
  };
