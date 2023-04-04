import axios from 'axios';
import {
  CALENDAR_FAILURE,
  CALENDAR_REQUEST,
  CALENDAR_SUCCESS,
} from '../Constants/CalendarConstants';

//GET: Race result
export const calendarAction = (year) => async (dispatch) => {
  // ../../../src/assets/data/calendar.json
  //   https://ergast.com/api/f1/${year}.json?callback
  console.log(year);
  try {
    dispatch({
      type: CALENDAR_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `../../../src/assets/data/calendar.json`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: CALENDAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CALENDAR_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
