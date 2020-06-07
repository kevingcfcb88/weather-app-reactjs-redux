import axios from 'axios';
import { WEATHER_API_KEY, BASE_API_WEATHER_URL } from '../api/openWeather';

export const GET_CURRENT_POSITION = 'GET_CURRENT_POSITION';
export const GET_CURRENT_POSITION_BLOCK = 'GET_CURRENT_POSITION_BLOCK';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';

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
      dispatch({ type: GET_CURRENT_POSITION_BLOCK, payload: true });
    }
  );
};

export const getCurrentWeather = (lat, lon) => async (dispatch) => {
  const url = `${BASE_API_WEATHER_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  dispatch({ type: GET_CURRENT_WEATHER, payload: response });
};
