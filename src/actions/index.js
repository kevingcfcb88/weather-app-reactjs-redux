import axios from 'axios';
import {
  WEATHER_API_KEY,
  BASE_API_WEATHER_URL_BY_LOCATION,
  BASE_API_WEATHER_URL_BY_CITY_ID,
  BASE_API_GET_FIVE_DAY_FORECAST,
} from '../api/openWeather';

export const GET_CURRENT_POSITION = 'GET_CURRENT_POSITION';
export const GET_CURRENT_POSITION_BLOCK = 'GET_CURRENT_POSITION_BLOCK';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_CURRENT_WEATHER_BY_CITY_ID = 'GET_CURRENT_WEATHER_BY_CITY_ID';
export const GET_FIVE_DAY_FORECAST = 'GET_FIVE_DAY_FORECAST';

export const getCurrentPosition = () => async (dispatch) => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(
    (position) => {
      dispatch({
        type: GET_CURRENT_POSITION,
        payload: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
      });
    },
    (err) => {
      dispatch({ type: GET_CURRENT_POSITION_BLOCK, err: true });
    }
  );
};

export const getCurrentWeather = (lat, lon) => async (dispatch) => {
  const url = `${BASE_API_WEATHER_URL_BY_LOCATION}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  dispatch({ type: GET_CURRENT_WEATHER, payload: response.data });
};

export const getCurrentWeatherByCity = (id) => async (dispatch) => {
  const url = `${BASE_API_WEATHER_URL_BY_CITY_ID}id=${id}&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  dispatch({ type: GET_CURRENT_WEATHER_BY_CITY_ID, payload: response.data });
};

export const getFiveDayForecast = (id) => async (dispatch) => {
  const url = `${BASE_API_GET_FIVE_DAY_FORECAST}id=${id}&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  dispatch({ type: GET_FIVE_DAY_FORECAST, payload: response.data });
};
