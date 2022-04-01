import {
  FETCH_AQI_WITH_LOCATION,
  FETCH_AQI_WITH_CITY_NAME,
} from '../../networking/Endpoints';
import {
  BUTTON_CLICKED,
  ON_LOADING_START,
  ON_LOADING_STOP,
  FETCH_AQI_SUCCESS,
  FETCH_AQI_FAILED,
} from './types';
import {getRequestApi} from '../../networking/NetworkManager';

export const buttonClickedAction = () => {
  return {
    type: BUTTON_CLICKED,
    payload: 'Message From Action',
  };
};

export const getAQIDetailsWithCity = cityName => {
  return async dispatch => {
    dispatch({type: ON_LOADING_START});
    const response = await getRequestApi(
      FETCH_AQI_WITH_CITY_NAME(cityName),
      dispatch,
      FETCH_AQI_SUCCESS,
      FETCH_AQI_FAILED,
      null,
      false,
    );
    dispatch({type: ON_LOADING_STOP});
  };
};
export const getAQIDetailsWithLocation = (latitude, longitude) => {
  return async dispatch => {
    dispatch({type: ON_LOADING_START});
    const response = await getRequestApi(
      FETCH_AQI_WITH_LOCATION(latitude, longitude),
      dispatch,
      FETCH_AQI_SUCCESS,
      FETCH_AQI_FAILED,
      null,
      false,
    );
    dispatch({type: ON_LOADING_STOP});
  };
};
