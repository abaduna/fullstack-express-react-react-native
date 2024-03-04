import { useReducer } from "react";
import { initialState, reducerFetch } from "../reducers/Fetch";
import { API } from "../API";
import { ERROR_SALE, SEND_SALE, UPLOADING, DELETE_SALE } from "../action/Fetch";

export const useFetch = (endpoing) => {
  const [state, dispatch] = useReducer(reducerFetch, initialState);

  const getData = async () => {
    
    try {
      console.log(`get data`);
      let { data } = await API.get(endpoing);
      console.log(data);
      dispatch({ type: SEND_SALE, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_SALE });
    }
  };

  const postData = async (endpoing, data) => {
    try {
      const dataRespons = await API.post(endpoing, data);
      console.log(dataRespons);
      dispatch({ type: UPLOADING });
    } catch (error) {
      dispatch({ type: ERROR_SALE });
    }
  };

  const deleteData = async (endpoint) => {
    try {
      const response = await API.delete(endpoint);
      console.log(response);
      dispatch({ type: DELETE_SALE });
    } catch (error) {
      dispatch({ type: ERROR_SALE });
    }
  };
  return { state, getData, postData, deleteData };
};
