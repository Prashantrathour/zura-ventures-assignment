import {
  PROJECT_DEL_UPLOAD_SUCCESS,
  PROJECT_UPLOAD_ERROR,
  PROJECT_UPLOAD_REQUEST,
  PROJECT_UPLOAD_SUCCESS,
  PROJECTUPLOAD_GET_SUCCESS,
} from "./actiontype";

const intialState = {
  isUPLOAD: false,
  error: null,
  isLoading: false,
};
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case PROJECT_UPLOAD_REQUEST:
      return { ...state, isLoading: true };
    case PROJECT_UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUPLOAD: true,
        projectdata: payload,
      };
    case PROJECT_DEL_UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
       
        projectdata: payload,
      };
    case PROJECTUPLOAD_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUPLOAD: true,
        projectdata: payload,
      };
    case PROJECT_UPLOAD_ERROR:
      return { ...state, isLoading: false, error: true };

    default:
      return { ...state };
  }
};
