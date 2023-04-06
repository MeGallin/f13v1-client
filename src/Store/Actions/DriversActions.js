import axios from 'axios';
import {
  DRIVERS_FAILURE,
  DRIVERS_REQUEST,
  DRIVERS_STANDINGS_FAILURE,
  DRIVERS_STANDINGS_REQUEST,
  DRIVERS_STANDINGS_SUCCESS,
  DRIVERS_SUCCESS,
} from '../Constants/DriversConstants';

//GET: Race result
export const driversAction = (year) => async (dispatch) => {
  // ../../../src/assets/data/drivers.json
  //   https://ergast.com/api/f1/2023/drivers.json?callback
  console.log(year);
  try {
    dispatch({
      type: DRIVERS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `../../../src/assets/data/drivers.json`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: DRIVERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DRIVERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET: Drivers Standings
export const driversStandingsAction = (year, round) => async (dispatch) => {
  // ../../../src/assets/data/drivers.json
  //   https://ergast.com/api/f1/2023/3/driverStandings.json?callback
  console.log(year);
  console.log(round);
  try {
    dispatch({
      type: DRIVERS_STANDINGS_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `../../../src/assets/data/driverStandings.json`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: DRIVERS_STANDINGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DRIVERS_STANDINGS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
