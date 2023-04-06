import axios from 'axios';
import {
  DRIVERS_FAILURE,
  DRIVERS_REQUEST,
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
