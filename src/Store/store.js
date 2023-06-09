import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  latestRaceResultReducer,
  raceResultReducer,
} from './Reducers/RaceResultsReducers';
import {
  calendarReducer,
  winnersRoundFiveReducer,
  winnersRoundFourReducer,
  winnersRoundOneReducer,
  winnersRoundThreeReducer,
  winnersRoundTwoReducer,
} from './Reducers/CalendarReducers';
import {
  driversReducer,
  driversStandingsReducer,
} from './Reducers/DriversReducers';
import { f1TickerDataReducer } from './Reducers/TickerReducers';
import {
  footballDataReducer,
  motoGPDataReducer,
  rugbyDataReducer,
  sportDataReducer,
} from './Reducers/RoundUp';

const reducer = combineReducers({
  latestRaceResult: latestRaceResultReducer,
  raceResult: raceResultReducer,
  calendar: calendarReducer,
  winnersRoundOne: winnersRoundOneReducer,
  winnersRoundTwo: winnersRoundTwoReducer,
  winnersRoundThree: winnersRoundThreeReducer,
  winnersRoundFour: winnersRoundFourReducer,
  winnersRoundFive: winnersRoundFiveReducer,
  drivers: driversReducer,
  driversStandings: driversStandingsReducer,
  f1TickerData: f1TickerDataReducer,
  motoGPData: motoGPDataReducer,
  sportData: sportDataReducer,
  rugbyData: rugbyDataReducer,
  footballData: footballDataReducer,
});

const initialState = {};

const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
