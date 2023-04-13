import {
  FOOTBALL_ROUND_UP_DATA_FAILURE,
  FOOTBALL_ROUND_UP_DATA_REQUEST,
  FOOTBALL_ROUND_UP_DATA_SUCCESS,
  MOTOGP_ROUND_UP_DATA_FAILURE,
  MOTOGP_ROUND_UP_DATA_REQUEST,
  MOTOGP_ROUND_UP_DATA_SUCCESS,
  RUGBY_ROUND_UP_DATA_FAILURE,
  RUGBY_ROUND_UP_DATA_REQUEST,
  RUGBY_ROUND_UP_DATA_SUCCESS,
  SPORT_ROUND_UP_DATA_FAILURE,
  SPORT_ROUND_UP_DATA_REQUEST,
  SPORT_ROUND_UP_DATA_SUCCESS,
} from '../Constants/RoundUp';

//GET:   MotoGP news
export const motoGPDataReducer = (state = {}, action) => {
  switch (action.type) {
    case MOTOGP_ROUND_UP_DATA_REQUEST:
      return { loading: true };
    case MOTOGP_ROUND_UP_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case MOTOGP_ROUND_UP_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
//GET:   RUGBY news
export const rugbyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case RUGBY_ROUND_UP_DATA_REQUEST:
      return { loading: true };
    case RUGBY_ROUND_UP_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case RUGBY_ROUND_UP_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
//GET:   Football news
export const footballDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FOOTBALL_ROUND_UP_DATA_REQUEST:
      return { loading: true };
    case FOOTBALL_ROUND_UP_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case FOOTBALL_ROUND_UP_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
//GET:   Sport in General news
export const sportDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SPORT_ROUND_UP_DATA_REQUEST:
      return { loading: true };
    case SPORT_ROUND_UP_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case SPORT_ROUND_UP_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
