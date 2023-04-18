import axios from "axios";
import {
  CALENDAR_FAILURE,
  CALENDAR_REQUEST,
  CALENDAR_SUCCESS,
  WINNERS_ROUND_ONE_FAILURE,
  WINNERS_ROUND_ONE_REQUEST,
  WINNERS_ROUND_ONE_SUCCESS,
  WINNERS_ROUND_THREE_FAILURE,
  WINNERS_ROUND_THREE_REQUEST,
  WINNERS_ROUND_THREE_SUCCESS,
  WINNERS_ROUND_TWO_FAILURE,
  WINNERS_ROUND_TWO_REQUEST,
  WINNERS_ROUND_TWO_SUCCESS,
} from "../Constants/CalendarConstants";

//GET: Race result
export const calendarAction = (year) => async (dispatch) => {
  // ../../../src/assets/data/calendar.json
  //   https://ergast.com/api/f1/${year}.json?callback

  try {
    dispatch({
      type: CALENDAR_REQUEST,
    });

    const options = {
      method: "GET",
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

//GET: Winners round one
export const winnersRoundOneAction = (round) => async (dispatch) => {
  try {
    dispatch({
      type: WINNERS_ROUND_ONE_REQUEST,
    });
    const options = {
      method: "GET",
      url: `https://f1-three.onrender.com/api/winners/2023/${round}`,
    };
    const { data } = await axios.request(options);
    dispatch({ type: WINNERS_ROUND_ONE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WINNERS_ROUND_ONE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET: Winners round TWO
export const winnersRoundTwoAction = (round) => async (dispatch) => {
  try {
    dispatch({
      type: WINNERS_ROUND_TWO_REQUEST,
    });
    const options = {
      method: "GET",
      url: `https://f1-three.onrender.com/api/winners/2023/${round}`,
    };
    const { data } = await axios.request(options);
    dispatch({ type: WINNERS_ROUND_TWO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WINNERS_ROUND_TWO_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET: Winners round THREE
export const winnersRoundThreeAction = (round) => async (dispatch) => {
  try {
    dispatch({
      type: WINNERS_ROUND_THREE_REQUEST,
    });
    const options = {
      method: "GET",
      url: `https://f1-three.onrender.com/api/winners/2023/${round}`,
    };
    const { data } = await axios.request(options);
    dispatch({ type: WINNERS_ROUND_THREE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WINNERS_ROUND_THREE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
