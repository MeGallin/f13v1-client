import {
  CALENDAR_FAILURE,
  CALENDAR_REQUEST,
  CALENDAR_SUCCESS,
} from '../Constants/CalendarConstants';

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
