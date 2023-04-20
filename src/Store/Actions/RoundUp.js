import axios from 'axios';
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

//GET: F! ticker data
export const motoGPDataAction = () => async (dispatch) => {
  // ../../../src/assets/data/motoGPData.json
  //   https://api.rss2json.com/v1/api.json?rss_url=https://www.motorsport.com/rss/motogp/news/

  try {
    dispatch({
      type: MOTOGP_ROUND_UP_DATA_REQUEST,
    });

    const options = {
      method: 'GET',
      url: ` https://api.rss2json.com/v1/api.json?rss_url=https://www.motorsport.com/rss/motogp/news/`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: MOTOGP_ROUND_UP_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOTOGP_ROUND_UP_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET: Rugby data
export const rugbyDataAction = () => async (dispatch) => {
  // ../../../src/assets/data/motoGPData.json
  //   https://api.rss2json.com/v1/api.json?rss_url=https://www.espn.com/espn/rss/rugby/news

  try {
    dispatch({
      type: RUGBY_ROUND_UP_DATA_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://api.rss2json.com/v1/api.json?rss_url=https://www.espn.com/espn/rss/rugby/news`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: RUGBY_ROUND_UP_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RUGBY_ROUND_UP_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET: football data
export const footballDataAction = () => async (dispatch) => {
  // ../../../src/assets/data/motoGPData.json
  //   https://api.rss2json.com/v1/api.json?rss_url=https://www.motorsport.com/rss/motogp/news/

  try {
    dispatch({
      type: FOOTBALL_ROUND_UP_DATA_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/sport/football/rss.xml`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: FOOTBALL_ROUND_UP_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FOOTBALL_ROUND_UP_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//GET: Sport i General data
export const sportDataAction = () => async (dispatch) => {
  // ../../../src/assets/data/motoGPData.json

  try {
    dispatch({
      type: SPORT_ROUND_UP_DATA_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://api.rss2json.com/v1/api.json?rss_url=https://www.theguardian.com/uk/sport/rss`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: SPORT_ROUND_UP_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SPORT_ROUND_UP_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
