import { combineReducers } from 'redux';
import {
  GET_CURRENT_POSITION,
  GET_CURRENT_POSITION_BLOCK,
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_BY_CITY_ID,
} from '../actions';

const initialState = {
  lat: -34.6131516,
  lon: -58.3772316,
};

const initialStateBlock = {
  err: null,
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

const getCurrentPositionBlock = (state = initialStateBlock, action) => {
  switch (action.type) {
    case GET_CURRENT_POSITION_BLOCK:
      return { ...state, err: true };
    default:
      return state;
  }
};

const getCurrentWeather = (state = null, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};

const getCurrentWeatherByCity = (state = null, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_BY_CITY_ID:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  getPosition: getCurrentPosition,
  getPositionBlock: getCurrentPositionBlock,
  getWeather: getCurrentWeather,
  getWeatherByCity: getCurrentWeatherByCity,
});
