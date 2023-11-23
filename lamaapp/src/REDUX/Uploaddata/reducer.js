import {
  PROJECT_POST_ERROR,
  PROJECT_POST_REQUEST,
  PROJECT_POST_SUCCESS,
 
} from "./actiontype";

const intialState = {
  isCreate: false,
  error: null,
  isLoading: false,
};
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case PROJECT_POST_REQUEST:
      return { ...state, isLoading: true };
    case PROJECT_POST_SUCCESS:
      

      return { ...state, isLoading: false, isCreate: true,message:payload.message};

    case PROJECT_POST_ERROR:
      return { ...state, isLoading: false, error: true };

    default:
      return { ...state };
  }
};
