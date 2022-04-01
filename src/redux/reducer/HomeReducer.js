import {
  BUTTON_CLICKED,
  FETCH_AQI_SUCCESS,
  FETCH_AQI_FAILED,
} from '../action/types';

const initialState = {
  message: 'No data loaded',
  cityData: {},
  error: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        message: payload,
      };

    case FETCH_AQI_SUCCESS:
      return {
        ...state,
        cityData: payload?.data,
        error: false,
        message: 'Successfully retrieved data.',
      };
    case FETCH_AQI_FAILED:
      return {
        ...state,
        error: true,
        message: 'Error, while retrieving the data',
      };

    default:
      return state;
  }
};
