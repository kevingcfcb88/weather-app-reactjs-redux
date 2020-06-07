import { combineReducers } from 'redux';
import {
  GET_CURRENT_POSITION,
  GET_CURRENT_POSITION_BLOCK,
  GET_CURRENT_WEATHER,
} from '../actions';

const initialState = {
  lat: -34.6131516,
  lon: -58.3772316,
};

const getCurrentPosition = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_POSITION:
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    default:
      return state;
  }
};

const getCurrentPositionBlock = (state = false, action) => {
  switch (action.type) {
    case GET_CURRENT_POSITION_BLOCK:
      return { ...state, payload: true };
    default:
      return state;
  }
};

const getCurrentWeather = (state = null, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({
  getPosition: getCurrentPosition,
  getPositionBlock: getCurrentPositionBlock,
  getWeather: getCurrentWeather,
});
