import axios from 'axios';
import {
  LATEST_RACE_RESULT_FAILURE,
  LATEST_RACE_RESULT_REQUEST,
  LATEST_RACE_RESULT_SUCCESS,
  RACE_RESULT_FAILURE,
  RACE_RESULT_REQUEST,
  RACE_RESULT_SUCCESS,
} from '../Constants/RaceResultsConstants';

//GET: Race result
export const latestRaceResultAction = () => async (dispatch) => {
  //http://ergast.com/api/f1/current/last/results.json?callback
  // ../../../src/assets/data/latestResults.json

  try {
    dispatch({
      type: LATEST_RACE_RESULT_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `http://ergast.com/api/f1/current/last/results.json?callback`,
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

//GET: Race result
export const raceResultAction = (round) => async (dispatch) => {
  // https://ergast.com/api/f1/2023/${round}/results.json?callback
  // ../../../src/assets/data/latestResults.json

  try {
    dispatch({
      type: RACE_RESULT_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://ergast.com/api/f1/2023/${round}/results.json?callback`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: RACE_RESULT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RACE_RESULT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
