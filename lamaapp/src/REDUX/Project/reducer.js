import {
  PROJECT_CREATE_ERROR,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_GET_SUCCESS,
} from "./actiontype";

const intialState = {
  isCreate: false,
  error: null,
  isloading: false,
};
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case PROJECT_CREATE_REQUEST:
      return { ...state, isloading: true };
    case PROJECT_CREATE_SUCCESS:
      

      return { ...state, isloading: false, isCreate: true,message:payload.message};
    case PROJECT_GET_SUCCESS:
        
      return {
        ...state,
        isloading: false,
        isCreate: false,
        projectdata: payload,
      };
    case PROJECT_CREATE_ERROR:
      return { ...state, isloading: false, error: true };

    default:
      return { ...state };
  }
};
