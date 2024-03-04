import { SEND_SALE, ERROR_SALE,UPLOADING } from "../action/Fetch";

export const initialState = {
  loading: false,
  error: false,
  data: {},
};

export const reducerFetch = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_SALE:
      return { ...state, data: payload };
    case ERROR_SALE:
      return { ...state, error: true };
    case UPLOADING:
      return{
        ...state,
      }
    default:
      return state;
  }
};
