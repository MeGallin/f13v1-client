import axios from 'axios';
import {
  LATEST_RACE_RESULT_FAILURE,
  LATEST_RACE_RESULT_REQUEST,
  LATEST_RACE_RESULT_SUCCESS,
} from '../Constants/RaceResultsConstants';

//GET: Race result
export const latestRaceResultAction = () => async (dispatch) => {
  // ../../../src/assets/data/latestResults.json

  try {
    dispatch({
      type: LATEST_RACE_RESULT_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `  http://ergast.com/api/f1/current/last/results.json?callback`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: LATEST_RACE_RESULT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LATEST_RACE_RESULT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};