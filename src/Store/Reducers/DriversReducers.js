import {
  DRIVERS_FAILURE,
  DRIVERS_REQUEST,
  DRIVERS_STANDINGS_FAILURE,
  DRIVERS_STANDINGS_REQUEST,
  DRIVERS_STANDINGS_SUCCESS,
  DRIVERS_SUCCESS,
} from '../Constants/DriversConstants';

//GET:   race result
export const driversReducer = (state = {}, action) => {
  switch (action.type) {
    case DRIVERS_REQUEST:
      return { loading: true };
    case DRIVERS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case DRIVERS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

//GET:   Drivers Standings
export const driversStandingsReducer = (state = {}, action) => {
  switch (action.type) {
    case DRIVERS_STANDINGS_REQUEST:
      return { loading: true };
    case DRIVERS_STANDINGS_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case DRIVERS_STANDINGS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
