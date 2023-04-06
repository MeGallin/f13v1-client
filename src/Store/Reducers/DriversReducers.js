import {
  DRIVERS_FAILURE,
  DRIVERS_REQUEST,
  DRIVERS_SUCCESS,
} from '../Constants/DriversConstants';

//GET:   race result
export const DriversReducer = (state = {}, action) => {
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
