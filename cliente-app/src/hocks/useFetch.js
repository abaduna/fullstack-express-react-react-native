import { useReducer } from "react";
import { initialState, reducerFetch } from "../reducers/Fetch";
import { API } from "../API";
import { ERROR_SALE, SEND_SALE, UPLOADING, DELETE_SALE } from "../action/Fetch";

export const useFetch = (endpoing) => {
  const [state, dispatch] = useReducer(reducerFetch, initialState);

  const getData = async (endpoing) => {
    //http://localhost:3001/api
    try {
      console.log(`get data`);

      
      
      const {data} = await API.get(endpoing)
      dispatch({ type: SEND_SALE, payload: data });
    } catch (error) {
      console.log( error.message);
      dispatch({ type: ERROR_SALE });
    }
  };

  const postData = async (endpoing, data) => {
    try {
      const dataRespons = await API.post(endpoing, data);
      dispatch({ type: UPLOADING });
    } catch (error) {
      dispatch({ type: ERROR_SALE });
    }
  };

  const deleteData = async (endpoint) => {
    try {
      const response = await API.delete(endpoint)
      dispatch({ type: DELETE_SALE });
    } catch (error) {
      dispatch({ type: ERROR_SALE });
    }
  };
  return { state, getData, postData, deleteData };
};
