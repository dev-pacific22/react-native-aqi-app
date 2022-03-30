import {FETCH_AQI_WITH_LOCATION} from '../../networking/Endpoints';
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
      FETCH_AQI_WITH_LOCATION(cityName),
      dispatch,
      FETCH_AQI_SUCCESS,
      FETCH_AQI_FAILED,
      null,
      false,
    );
    console.log(response);
    dispatch({type: ON_LOADING_STOP});
  };
};
