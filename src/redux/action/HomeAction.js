import {BUTTON_CLICKED} from './types';

export const buttonClickedAction = () => {
  return {
    type: BUTTON_CLICKED,
    payload: 'Message From Action',
  };
};
