import * as types from "./ActionTypes";

const initState = {
  top: [],
  error: "",
  loading: false,
  tech: [],
  sports: [],
  science: [],
  business: [],
  entertainment:[],
 

};

const newsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        top: payload,
      };
    case types.GET_TECH_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_TECH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_TECH_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        tech: payload,
      };
    case types.GET_SPORTS_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_SPORTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_SPORTS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        sports: payload,
      };
    case types.GET_SCIENCE_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_SCIENCE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_SCIENCE_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        science: payload,
      };
    case types.GET_BUSINESS_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_BUSINESS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_BUSINESS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        business: payload,
      };
      case types.GET_ENTERTAINMENT_REQUEST:
        return {
          ...state,
          error: "",
          loading: true,
        };
      case types.GET_ENTERTAINMENT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      case types.GET_ENTERTAINMENT_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          entertainment: payload,
        };  
       
        
    default:
      return state;
  }
};
export default newsReducer;
