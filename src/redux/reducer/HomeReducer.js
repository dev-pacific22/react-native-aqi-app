import {BUTTON_CLICKED} from '../action/types';

const initialState = {
  message: 'Initial State Message',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
};
