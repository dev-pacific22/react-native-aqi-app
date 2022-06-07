import axios from 'axios';
import {Config} from '../config/Config';
import {API_TIME_OUT} from '../utils/Constant';

const configHeader = async (token = '') => {
  // Can get the token from async storage.
  return {
    headers: {
      'Content-Type': 'application/json',
      access_token: token,
    },
    timeout: API_TIME_OUT,
  };
};

const addTokenParam = URL => {
  //TODO: Add token to separate config file with envs, add config to gitignore.
  return `${URL}?token=${Config.API_TOKEN}`;
};
export const getRequestApi = async (
  URL,
  dispatch,
  actionSuccess,
  actionFail,
  actionLoading,
  isLoadingRequired = false,
) => {
  if (isLoadingRequired) {
    dispatch({type: actionLoading});
  }
  let headers = await configHeader();
  try {
    const response = await axios.get(addTokenParam(URL), headers);
    dispatch({type: actionSuccess, payload: response.data});
    return response;
  } catch (error) {
    dispatch({type: actionFail, payload: error.message});
    return error;
  }
};
