import {
  LATEST_RACE_RESULT_FAILURE,
  LATEST_RACE_RESULT_REQUEST,
  LATEST_RACE_RESULT_SUCCESS,
} from '../Constants/RaceResultsConstants';

//GET:  latest race result
export const latestRaceResultReducer = (state = {}, action) => {
  switch (action.type) {
    case LATEST_RACE_RESULT_REQUEST:
      return { loading: true };
    case LATEST_RACE_RESULT_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case LATEST_RACE_RESULT_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};