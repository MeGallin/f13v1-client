import axios from 'axios';
import {
  F1_TICKER_DATA_FAILURE,
  F1_TICKER_DATA_REQUEST,
  F1_TICKER_DATA_SUCCESS,
} from '../Constants/TickerConstants';

//GET: F! ticker data
export const f1TickerDataAction = () => async (dispatch) => {
  // ../../../src/assets/data/f1TickerData.json
  //   https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.autosport.com%2Frss%2Ffeed%2Ff1

  try {
    dispatch({
      type: F1_TICKER_DATA_REQUEST,
    });

    const options = {
      method: 'GET',
      url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.autosport.com%2Frss%2Ffeed%2Ff1`,
    };

    const { data } = await axios.request(options);
    dispatch({ type: F1_TICKER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: F1_TICKER_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
