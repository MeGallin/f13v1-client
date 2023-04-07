import {
  F1_TICKER_DATA_FAILURE,
  F1_TICKER_DATA_REQUEST,
  F1_TICKER_DATA_SUCCESS,
} from '../Constants/TickerConstants';

//GET:   race result
export const f1TickerDataReducer = (state = {}, action) => {
  switch (action.type) {
    case F1_TICKER_DATA_REQUEST:
      return { loading: true };
    case F1_TICKER_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case F1_TICKER_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
