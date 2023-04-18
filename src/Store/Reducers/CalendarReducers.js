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

//GET:   race result
export const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case CALENDAR_REQUEST:
      return { loading: true };
    case CALENDAR_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case CALENDAR_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

//GET: Winners Round one
export const winnersRoundOneReducer = (state = {}, action) => {
  switch (action.type) {
    case WINNERS_ROUND_ONE_REQUEST:
      return { loading: true };
    case WINNERS_ROUND_ONE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case WINNERS_ROUND_ONE_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

//GET: Winners Round two
export const winnersRoundTwoReducer = (state = {}, action) => {
  switch (action.type) {
    case WINNERS_ROUND_TWO_REQUEST:
      return { loading: true };
    case WINNERS_ROUND_TWO_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case WINNERS_ROUND_TWO_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};

//GET: Winners Round THREE
export const winnersRoundThreeReducer = (state = {}, action) => {
  switch (action.type) {
    case WINNERS_ROUND_THREE_REQUEST:
      return { loading: true };
    case WINNERS_ROUND_THREE_SUCCESS:
      return {
        loading: false,
        success: true,
        ...action.payload,
      };
    case WINNERS_ROUND_THREE_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
