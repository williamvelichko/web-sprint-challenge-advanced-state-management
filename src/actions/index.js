import axios from "axios";
export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";
export const ADD_SMURF = " AD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getSmurf = () => {
  return (dispatch) => {
    dispatch({ type: START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        console.log(resp);
        dispatch({ type: SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: FAIL, payload: err });
      });
  };
};

export const addSmurf = (newSmurf) => {
  return { type: ADD_SMURF, payload: newSmurf };
};

export const setError = () => {
  return { type: SET_ERROR };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
