import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { latestRaceResultReducer } from './Reducers/RaceResultsReducers';

const reducer = combineReducers({
  latestRaceResult: latestRaceResultReducer,
});

const initialState = {};

const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
